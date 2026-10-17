// src/context/AuthContext.tsx
import { createContext, useContext, useState, useEffect } from "react";
import {
  supabase,
  isSupabaseConfigured,
  cadastrarUsuarioSupabase,
  loginUsuarioSupabase,
  logoutUsuarioSupabase,
  obterMatricula,
  salvarMatricula,
} from "../services/supabaseClient";

interface Usuario {
  id: string;
  email: string;
  nome: string;
  role: "aluno" | "professor" | "superadmin";
}

interface Matricula {
  matricula?: string;
  numero_matricula?: string;
  status_pagamento: string;
  pagamento?: string;
  confirmadoEm?: string;
  [key: string]: unknown;
}

interface AuthContextValue {
  usuario: Usuario | null;
  login: (email: string, senha: string) => Promise<void>;
  logout: () => Promise<void>;
  cadastrar: (nome: string, email: string, senha: string) => Promise<boolean>;
  matricula: Matricula | null;
  setMatricula: (dados: Matricula, salvarNoBanco?: boolean) => Promise<void>;
  pagamentoConfirmado: boolean;
  setPagamentoConfirmado: (v: boolean) => Promise<void>;
  assinaturas: Record<string, string>;
  setAssinaturas: (obj: Record<string, string>) => void;
  isConfiguredSupabase: boolean;
  carregandoAuth: boolean;
}

const AuthContext = createContext<AuthContextValue | null>(null);
const SUPERADMIN_EMAIL = import.meta.env.VITE_SUPERADMIN_EMAIL || "edukadoshmda@gmail.com";

function obterRoleUsuario(email: string | undefined, roleInformada: string | undefined): "aluno" | "professor" | "superadmin" {
  return email?.trim().toLowerCase() === SUPERADMIN_EMAIL ? "superadmin" : (roleInformada as "aluno" | "professor" | "superadmin") || "aluno";
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(() => {
    try {
      return JSON.parse(sessionStorage.getItem("ta_usuario")) || JSON.parse(localStorage.getItem("ta_usuario_persistido"));
    } catch {
      return null;
    }
  });

  const [matricula, setMatriculaState] = useState<Matricula | null>(() => {
    try {
      return JSON.parse(localStorage.getItem("ta_matricula"));
    } catch {
      return null;
    }
  });

  const [pagamentoConfirmado, setPagamentoConfirmadoState] = useState(() => {
    return localStorage.getItem("ta_pagamento_confirmado") === "true";
  });

  const [assinaturas, setAssinaturasState] = useState<Record<string, string>>(() => {
    try {
      const salvo = JSON.parse(localStorage.getItem("ta_assinaturas") || "{}");
      return {
        coordenador: "/assinatura-coordenador.png",
        secretaria: "/assinatura-secretaria.png",
        ...salvo,
      };
    } catch {
      return {
        coordenador: "/assinatura-coordenador.png",
        secretaria: "/assinatura-secretaria.png",
      };
    }
  });

  const [carregandoAuth, setCarregandoAuth] = useState(true);

  const sincronizarMatricula = (mat: Matricula | null, sessao?: Usuario | null) => {
    const userAtivo = sessao ?? usuario;
    if (userAtivo?.role === "superadmin") {
      const matSuperadmin: Matricula = mat || {
        matricula: "TA-SUPERADMIN",
        numero_matricula: "TA-SUPERADMIN",
        nomeCompleto: userAtivo.nome,
        email: userAtivo.email,
        status_pagamento: "pago",
        pagamento: "pago",
      };
      matSuperadmin.status_pagamento = "pago";
      matSuperadmin.pagamento = "pago";
      setMatriculaState(matSuperadmin);
      setPagamentoConfirmadoState(true);
      localStorage.setItem("ta_matricula", JSON.stringify(matSuperadmin));
      localStorage.setItem("ta_pagamento_confirmado", "true");
      return;
    }

    setMatriculaState(mat);
    const pago = mat?.status_pagamento === "pago" || mat?.pagamento === "pago";
    setPagamentoConfirmadoState(Boolean(pago));
    if (pago) {
      localStorage.setItem("ta_pagamento_confirmado", "true");
    } else {
      localStorage.removeItem("ta_pagamento_confirmado");
    }
  };

  // Monitora sessão ativa no Supabase Auth
  useEffect(() => {
    let subscription: { unsubscribe: () => void } | null = null;

    async function checarSessao() {
      if (usuario?.role === "superadmin") {
        sincronizarMatricula(matricula, usuario);
      }
      if (isSupabaseConfigured() && supabase) {
        try {
          const { data: { session } } = await supabase.auth.getSession();
          if (session?.user) {
            const sessaoFormatada: Usuario = {
              id: session.user.id,
              email: session.user.email,
              nome: session.user.user_metadata?.nome_completo || session.user.user_metadata?.nome || session.user.email.split("@")[0],
              role: obterRoleUsuario(session.user.email, session.user.user_metadata?.role),
            };
            setUsuario(sessaoFormatada);
            sessionStorage.setItem("ta_usuario", JSON.stringify(sessaoFormatada));
            localStorage.setItem("ta_usuario_persistido", JSON.stringify(sessaoFormatada));

            // Sincroniza matrícula do banco
            const mat = await obterMatricula(session.user.id);
            sincronizarMatricula(mat, sessaoFormatada);
          }
        } catch (e) {
          console.warn("Falha ao checar sessão Supabase:", e);
        }

        // Listener de mudanças na sessão
        const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
          if (event === "SIGNED_IN" && session?.user) {
            const sessaoFormatada: Usuario = {
              id: session.user.id,
              email: session.user.email,
              nome: session.user.user_metadata?.nome_completo || session.user.user_metadata?.nome || session.user.email.split("@")[0],
              role: obterRoleUsuario(session.user.email, session.user.user_metadata?.role),
            };
            setUsuario(sessaoFormatada);
            sessionStorage.setItem("ta_usuario", JSON.stringify(sessaoFormatada));
            localStorage.setItem("ta_usuario_persistido", JSON.stringify(sessaoFormatada));
            const mat = await obterMatricula(session.user.id);
            sincronizarMatricula(mat, sessaoFormatada);
          } else if (event === "SIGNED_OUT") {
            setUsuario(null);
            sessionStorage.removeItem("ta_usuario");
            localStorage.removeItem("ta_usuario_persistido");
          }
        });
        subscription = data?.subscription;
      }
      setCarregandoAuth(false);
    }

    checarSessao();

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  const cadastrar = async (nome: string, email: string, senha: string) => {
    const res = await cadastrarUsuarioSupabase(email, senha, nome);
    const user = res.user;
    const sessao: Usuario = {
      id: user?.id || "user-" + Date.now(),
      nome,
      email,
      role: obterRoleUsuario(email, "aluno"),
    };
    setUsuario(sessao);
    sessionStorage.setItem("ta_usuario", JSON.stringify(sessao));
    localStorage.setItem("ta_usuario_persistido", JSON.stringify(sessao));
    if (sessao.role === "superadmin") {
      sincronizarMatricula(null, sessao);
    }
    return true;
  };

  const login = async (email: string, senha: string) => {
    const res = await loginUsuarioSupabase(email, senha);
    const user = res.user;
    const sessao: Usuario = {
      id: user?.id || "user-" + Date.now(),
      nome: user?.user_metadata?.nome_completo || user?.user_metadata?.nome || email.split("@")[0],
      email,
      role: obterRoleUsuario(email, user?.user_metadata?.role),
    };
    setUsuario(sessao);
    sessionStorage.setItem("ta_usuario", JSON.stringify(sessao));
    localStorage.setItem("ta_usuario_persistido", JSON.stringify(sessao));

    // Busca matrícula do aluno
    if (sessao.role === "superadmin") {
      sincronizarMatricula(null, sessao);
    } else if (sessao.id) {
      const mat = await obterMatricula(sessao.id);
      sincronizarMatricula(mat, sessao);
    }
  };

  const logout = async () => {
    await logoutUsuarioSupabase();
    setUsuario(null);
    sessionStorage.removeItem("ta_usuario");
    localStorage.removeItem("ta_usuario_persistido");
  };

  const setMatricula = async (dados: Matricula, salvarNoBanco = true) => {
    const statusFinal = dados.status_pagamento || dados.pagamento || "pendente";
    const dadosComStatus: Matricula = {
      ...dados,
      status_pagamento: statusFinal,
      pagamento: statusFinal,
    };
    sincronizarMatricula(dadosComStatus, usuario);
    localStorage.setItem("ta_matricula", JSON.stringify(dadosComStatus));

    if (salvarNoBanco && usuario?.id) {
      const salvo = await salvarMatricula(usuario.id, dadosComStatus);
      if (salvo && typeof salvo === "object") {
        const mesclado: Matricula = {
          ...dadosComStatus,
          ...salvo,
          status_pagamento: (salvo as Matricula).status_pagamento || statusFinal,
        };
        sincronizarMatricula(mesclado, usuario);
        localStorage.setItem("ta_matricula", JSON.stringify(mesclado));
      }
    }
  };

  const setPagamentoConfirmado = async (v: boolean) => {
    if (!v) {
      setPagamentoConfirmadoState(false);
      localStorage.removeItem("ta_pagamento_confirmado");
      return;
    }

    // A liberação só pode refletir o status confirmado no banco/webhook do Asaas.
    if (matricula?.status_pagamento === "pago" || matricula?.pagamento === "pago") {
      setPagamentoConfirmadoState(true);
      localStorage.setItem("ta_pagamento_confirmado", "true");
    }
  };

  const setAssinaturas = (obj: Record<string, string>) => {
    setAssinaturasState(obj);
    localStorage.setItem("ta_assinaturas", JSON.stringify(obj));
  };

  return (
    <AuthContext.Provider
      value={{
        usuario,
        login,
        logout,
        cadastrar,
        matricula,
        setMatricula,
        pagamentoConfirmado,
        setPagamentoConfirmado,
        assinaturas,
        setAssinaturas,
        isConfiguredSupabase: isSupabaseConfigured(),
        carregandoAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}