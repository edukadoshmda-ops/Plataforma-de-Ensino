import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  listarAlunosSaaS,
  salvarAlunoSaaSAdmin,
  atualizarAlunoSaaSAdmin,
  excluirAlunoSaaSAdmin,
  testarConexaoSupabase,
} from "../services/supabaseClient";
import {
  ShieldCheck,
  Users,
  CheckCircle2,
  Clock,
  DollarSign,
  UserPlus,
  Search,
  RefreshCw,
  Database,
  Copy,
  Check,
  Trash2,
  Award,
  Unlock,
  Lock,
  Sparkles,
} from "lucide-react";

interface AlunoSaaS {
  id: string;
  nome_completo: string;
  email: string;
  telefone?: string;
  role: string;
  numero_matricula?: string;
  status_pagamento: string;
  progresso_medio?: number;
  media_geral?: number;
  criado_em?: string;
}

const SQL_MIGRACAO_COMPLETA = `-- ============================================================================
-- TEOLOGIA ACESSÍVEL • SCHEMA COMPLETO SUPABASE POSTGRESQL 15
-- Inclui: Profiles, Matrículas, Histórico, Provas, Artigos e Caderno de Anotações
-- ============================================================================

create table if not exists public.profiles (
  id text primary key,
  email text unique not null,
  nome_completo text,
  telefone text,
  role text default 'aluno',
  status_conta text default 'ativo',
  criado_em timestamptz default now(),
  atualizado_em timestamptz default now()
);

create table if not exists public.matriculas (
  id uuid primary key default gen_random_uuid(),
  user_id text references public.profiles(id) on delete cascade,
  numero_matricula text unique not null,
  curso_nome text default 'Teologia Acessível - Formação Livre Ministerial',
  status_pagamento text default 'pendente',
  valor_centavos integer default 17988,
  metodo_pagamento text default 'PIX',
  transacao_id text,
  data_confirmacao timestamptz,
  criado_em timestamptz default now(),
  atualizado_em timestamptz default now()
);

create table if not exists public.artigos (
  id uuid primary key default gen_random_uuid(),
  titulo text not null,
  subtitulo text,
  categoria text default 'Teologia Sistemática',
  autor text default 'Corpo Docente Teologia Acessível',
  data_publicacao text,
  tempo_leitura text default '8 min',
  conteudo text not null,
  criado_em timestamptz default now()
);

create table if not exists public.anotacoes_disciplina (
  id uuid primary key default gen_random_uuid(),
  user_id text not null,
  disciplina_id text not null,
  disciplina_titulo text,
  texto text default '',
  tags jsonb default '[]'::jsonb,
  atualizado_em timestamptz default now(),
  unique(user_id, disciplina_id)
);`;

export default function AdminSaaS() {
  const { usuario } = useAuth();
  const [alunos, setAlunos] = useState<AlunoSaaS[]>([]);
  const [busca, setBusca] = useState("");
  const [filtroStatus, setFiltroStatus] = useState<"todos" | "pago" | "pendente" | "equipe">("todos");
  const [mostrarFormNovo, setMostrarFormNovo] = useState(false);
  const [mensagem, setMensagem] = useState("");

  // Form Novo Aluno / Bolsa
  const [nomeNovo, setNomeNovo] = useState("");
  const [emailNovo, setEmailNovo] = useState("");
  const [telefoneNovo, setTelefoneNovo] = useState("");
  const [roleNovo, setRoleNovo] = useState("aluno");
  const [statusNovo, setStatusNovo] = useState("pago");

  // Diagnóstico Supabase
  const [statusNuvem, setStatusNuvem] = useState<{
    online: boolean;
    latenciaMs: number;
    mensagem: string;
    url: string;
  } | null>(null);
  const [testandoNuvem, setTestandoNuvem] = useState(false);
  const [mostrarSql, setMostrarSql] = useState(false);
  const [sqlCopiado, setSqlCopiado] = useState(false);

  const carregarLista = async () => {
    const lista = await listarAlunosSaaS();
    setAlunos(lista as AlunoSaaS[]);
  };

  const verificarNuvem = async () => {
    setTestandoNuvem(true);
    try {
      const res = await testarConexaoSupabase();
      setStatusNuvem(res);
    } finally {
      setTestandoNuvem(false);
    }
  };

  useEffect(() => {
    carregarLista();
    verificarNuvem();
  }, []);

  const notificar = (texto: string) => {
    setMensagem(texto);
    setTimeout(() => setMensagem(""), 3800);
  };

  const handleCadastrarAluno = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nomeNovo.trim() || !emailNovo.trim()) return;

    await salvarAlunoSaaSAdmin({
      nome_completo: nomeNovo,
      email: emailNovo,
      telefone: telefoneNovo,
      role: roleNovo,
      status_pagamento: statusNovo,
    });
    await carregarLista();
    setNomeNovo("");
    setEmailNovo("");
    setTelefoneNovo("");
    setMostrarFormNovo(false);
    notificar(`Aluno/Membro "${nomeNovo}" cadastrado e liberado com sucesso!`);
  };

  const handleAlternarPagamento = async (aluno: AlunoSaaS) => {
    const novoStatus = aluno.status_pagamento === "pago" ? "pendente" : "pago";
    const atualizada = await atualizarAlunoSaaSAdmin(aluno.id, { status_pagamento: novoStatus });
    setAlunos(atualizada as AlunoSaaS[]);
    notificar(
      novoStatus === "pago"
        ? `Acesso e pagamento liberados para ${aluno.nome_completo}!`
        : `Matrícula de ${aluno.nome_completo} marcada como pendente.`
    );
  };

  const handleAlterarRole = async (aluno: AlunoSaaS, novoRole: string) => {
    const atualizada = await atualizarAlunoSaaSAdmin(aluno.id, { role: novoRole });
    setAlunos(atualizada as AlunoSaaS[]);
    notificar(`Perfil de ${aluno.nome_completo} atualizado para "${novoRole}".`);
  };

  const handleExcluir = async (aluno: AlunoSaaS) => {
    if (aluno.email.toLowerCase() === "edukadoshmda@gmail.com") {
      window.alert("A conta principal do Superadmin não pode ser removida.");
      return;
    }
    if (!window.confirm(`Deseja remover o registro de ${aluno.nome_completo}?`)) return;
    const atualizada = await excluirAlunoSaaSAdmin(aluno.id);
    setAlunos(atualizada as AlunoSaaS[]);
    notificar(`Registro de ${aluno.nome_completo} removido.`);
  };

  const copiarSql = () => {
    navigator.clipboard.writeText(SQL_MIGRACAO_COMPLETA);
    setSqlCopiado(true);
    setTimeout(() => setSqlCopiado(false), 2500);
  };

  const estatisticas = useMemo(() => {
    const total = alunos.length;
    const pagos = alunos.filter((a) => a.status_pagamento === "pago").length;
    const pendentes = total - pagos;
    const receitaConfirmada = pagos * 179.88;
    return { total, pagos, pendentes, receitaConfirmada };
  }, [alunos]);

  const alunosFiltrados = useMemo(() => {
    const q = busca.toLowerCase().trim();
    return alunos.filter((a) => {
      const matchStatus =
        filtroStatus === "todos" ||
        (filtroStatus === "pago" && a.status_pagamento === "pago") ||
        (filtroStatus === "pendente" && a.status_pagamento !== "pago") ||
        (filtroStatus === "equipe" && (a.role === "superadmin" || a.role === "professor"));
      const matchBusca =
        !q ||
        (a.nome_completo || "").toLowerCase().includes(q) ||
        (a.email || "").toLowerCase().includes(q) ||
        (a.numero_matricula || "").toLowerCase().includes(q);
      return matchStatus && matchBusca;
    });
  }, [alunos, busca, filtroStatus]);

  return (
    <div>
      <div
        className="pagina-titulo-area"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div>
          <div className="badge-topo-sebitan">
            <Sparkles size={14} /> Central do Superadmin • {usuario?.email}
          </div>
          <h1>
            <ShieldCheck size={28} className="icone-titulo" /> Painel de Administração Geral (SaaS)
          </h1>
          <p className="pagina-sub">
            Gerencie matrículas, libere acessos (PIX / Bolsas), promova docentes e monitore a nuvem Supabase.
          </p>
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button
            type="button"
            className="btn btn-contorno btn-com-icone"
            onClick={() => setMostrarSql((v) => !v)}
          >
            <Database size={17} />
            <span>{mostrarSql ? "Ocultar SQL Supabase" : "SQL do Banco (Nuvem)"}</span>
          </button>
          <button
            type="button"
            className="btn btn-primario btn-com-icone"
            onClick={() => setMostrarFormNovo((v) => !v)}
          >
            <UserPlus size={18} />
            <span>{mostrarFormNovo ? "Fechar Cadastro" : "Cadastrar Aluno / Bolsa"}</span>
          </button>
        </div>
      </div>

      {mensagem && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 18,
            padding: "12px 16px",
            borderRadius: 10,
            background: "#dcfce7",
            color: "#166534",
            border: "1px solid #86efac",
            fontWeight: 600,
          }}
        >
          <CheckCircle2 size={18} />
          <span>{mensagem}</span>
        </div>
      )}

      {/* BARRA DE STATUS DO SUPABASE (ITEM 6) */}
      <div
        className="card"
        style={{
          marginBottom: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
          borderLeft: statusNuvem?.online ? "4px solid #16a34a" : "4px solid #f59e0b",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Database size={22} color={statusNuvem?.online ? "#16a34a" : "#d97706"} />
          <div>
            <strong style={{ color: "#0f2a43", fontSize: "0.95rem" }}>
              Status do Banco Supabase:{" "}
              {statusNuvem?.online ? "Conectado (Online)" : "Modo Local Resiliente Ativo"}
            </strong>
            <div style={{ fontSize: "0.82rem", color: "#64748b" }}>
              {statusNuvem?.mensagem || "Verificando conectividade..."}
            </div>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-contorno btn-com-icone"
          style={{ fontSize: "0.84rem", padding: "7px 14px" }}
          onClick={verificarNuvem}
          disabled={testandoNuvem}
        >
          <RefreshCw size={15} />
          <span>{testandoNuvem ? "Testando..." : "Testar Reconexão"}</span>
        </button>
      </div>

      {/* MODAL / BLOCO SQL SUPABASE */}
      {mostrarSql && (
        <div className="card" style={{ marginBottom: 22, background: "#0f172a", color: "#f8fafc" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10, flexWrap: "wrap", gap: 10 }}>
            <div>
              <strong style={{ color: "#f4b400" }}>Script SQL de Criação das Tabelas (Supabase SQL Editor)</strong>
              <p style={{ margin: "2px 0 0", fontSize: "0.82rem", color: "#94a3b8" }}>
                Quando seu projeto Supabase estiver ativo, cole este script no SQL Editor para criar todas as tabelas.
              </p>
            </div>
            <button type="button" className="btn btn-primario btn-com-icone" onClick={copiarSql}>
              {sqlCopiado ? <Check size={16} /> : <Copy size={16} />}
              <span>{sqlCopiado ? "SQL Copiado!" : "Copiar Script SQL"}</span>
            </button>
          </div>
          <pre
            style={{
              margin: 0,
              padding: 14,
              borderRadius: 10,
              background: "#1e293b",
              color: "#e2e8f0",
              fontSize: "0.8rem",
              overflowX: "auto",
              maxHeight: 280,
            }}
          >
            {SQL_MIGRACAO_COMPLETA}
          </pre>
        </div>
      )}

      {/* CARDS DE RESUMO FINANCEIRO & ACADÊMICO */}
      <div className="grade" style={{ marginBottom: 22 }}>
        <div className="card" style={{ borderTop: "4px solid #1e3a8a" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "0.85rem", color: "#64748b", fontWeight: 600 }}>Total de Alunos & Membros</span>
            <Users size={20} color="#1e3a8a" />
          </div>
          <div style={{ fontSize: "2rem", fontWeight: 800, color: "#0f2a43", marginTop: 6 }}>
            {estatisticas.total}
          </div>
          <small style={{ color: "#64748b" }}>Cadastros ativos na plataforma</small>
        </div>

        <div className="card" style={{ borderTop: "4px solid #16a34a" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "0.85rem", color: "#64748b", fontWeight: 600 }}>Matrículas Liberadas / Pagas</span>
            <CheckCircle2 size={20} color="#16a34a" />
          </div>
          <div style={{ fontSize: "2rem", fontWeight: 800, color: "#15803d", marginTop: 6 }}>
            {estatisticas.pagos}
          </div>
          <small style={{ color: "#64748b" }}>Com acesso total às 30 disciplinas</small>
        </div>

        <div className="card" style={{ borderTop: "4px solid #f59e0b" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "0.85rem", color: "#64748b", fontWeight: 600 }}>Aguardando Liberação</span>
            <Clock size={20} color="#d97706" />
          </div>
          <div style={{ fontSize: "2rem", fontWeight: 800, color: "#b45309", marginTop: 6 }}>
            {estatisticas.pendentes}
          </div>
          <small style={{ color: "#64748b" }}>Podem ser liberados manualmente abaixo</small>
        </div>

        <div className="card" style={{ borderTop: "4px solid #0f2a43" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "0.85rem", color: "#64748b", fontWeight: 600 }}>Volume de Matrículas Ativas</span>
            <DollarSign size={20} color="#0f2a43" />
          </div>
          <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#0f2a43", marginTop: 6 }}>
            R$ {estatisticas.receitaConfirmada.toFixed(2).replace(".", ",")}
          </div>
          <small style={{ color: "#64748b" }}>Baseado no plano integral (12x R$ 14,99)</small>
        </div>
      </div>

      {/* FORMULÁRIO DE NOVO ALUNO / BOLSA */}
      {mostrarFormNovo && (
        <form onSubmit={handleCadastrarAluno} className="card" style={{ marginBottom: 22, border: "1px solid #cbd5e1" }}>
          <h3 style={{ marginTop: 0, marginBottom: 14, color: "#0f2a43" }}>
            Cadastrar Novo Aluno, Bolsista ou Professor
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 12, marginBottom: 14 }}>
            <div>
              <label style={{ fontWeight: 600, display: "block", marginBottom: 4 }}>Nome Completo *</label>
              <input
                type="text"
                required
                value={nomeNovo}
                onChange={(e) => setNomeNovo(e.target.value)}
                placeholder="Ex: Pr. Carlos Eduardo"
                style={{ width: "100%", padding: "9px 12px", borderRadius: 8, border: "1px solid #cbd5e1" }}
              />
            </div>
            <div>
              <label style={{ fontWeight: 600, display: "block", marginBottom: 4 }}>E-mail de Acesso *</label>
              <input
                type="email"
                required
                value={emailNovo}
                onChange={(e) => setEmailNovo(e.target.value)}
                placeholder="aluno@email.com"
                style={{ width: "100%", padding: "9px 12px", borderRadius: 8, border: "1px solid #cbd5e1" }}
              />
            </div>
            <div>
              <label style={{ fontWeight: 600, display: "block", marginBottom: 4 }}>WhatsApp / Telefone</label>
              <input
                type="text"
                value={telefoneNovo}
                onChange={(e) => setTelefoneNovo(e.target.value)}
                placeholder="(91) 99999-9999"
                style={{ width: "100%", padding: "9px 12px", borderRadius: 8, border: "1px solid #cbd5e1" }}
              />
            </div>
            <div>
              <label style={{ fontWeight: 600, display: "block", marginBottom: 4 }}>Nível de Permissão</label>
              <select
                value={roleNovo}
                onChange={(e) => setRoleNovo(e.target.value)}
                style={{ width: "100%", padding: "9px 12px", borderRadius: 8, border: "1px solid #cbd5e1", background: "#fff" }}
              >
                <option value="aluno">Aluno</option>
                <option value="professor">Professor / Docente</option>
                <option value="superadmin">Superadmin</option>
              </select>
            </div>
            <div>
              <label style={{ fontWeight: 600, display: "block", marginBottom: 4 }}>Status Financeiro</label>
              <select
                value={statusNovo}
                onChange={(e) => setStatusNovo(e.target.value)}
                style={{ width: "100%", padding: "9px 12px", borderRadius: 8, border: "1px solid #cbd5e1", background: "#fff" }}
              >
                <option value="pago">Liberado / Pago / Bolsista</option>
                <option value="pendente">Pendente de Pagamento</option>
              </select>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
            <button type="button" className="btn btn-contorno" onClick={() => setMostrarFormNovo(false)}>
              Cancelar
            </button>
            <button type="submit" className="btn btn-primario">
              Salvar e Liberar Matrícula
            </button>
          </div>
        </form>
      )}

      {/* FILTROS E LISTA DE ALUNOS */}
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
            marginBottom: 18,
          }}
        >
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {[
              { id: "todos", label: `Todos (${alunos.length})` },
              { id: "pago", label: `Liberados (${estatisticas.pagos})` },
              { id: "pendente", label: `Pendentes (${estatisticas.pendentes})` },
              { id: "equipe", label: "Docentes & Admins" },
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                className={`btn ${filtroStatus === f.id ? "btn-primario" : "btn-contorno"}`}
                style={{ fontSize: "0.82rem", padding: "6px 14px" }}
                onClick={() => setFiltroStatus(f.id as typeof filtroStatus)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="pesquisa-disciplinas-box" style={{ minWidth: 260, flex: "1 1 260px", maxWidth: 380 }}>
            <Search size={16} className="icone-pesquisa" />
            <input
              type="text"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar por nome, e-mail ou matrícula..."
              className="input-pesquisa-disciplinas"
            />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {alunosFiltrados.map((a) => {
            const isPago = a.status_pagamento === "pago";
            return (
              <div
                key={a.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 14,
                  padding: "14px 16px",
                  borderRadius: 12,
                  border: "1px solid #e2e8f0",
                  background: isPago ? "#ffffff" : "#fffbeb",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 240 }}>
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: "50%",
                      background: "#0f2a43",
                      color: "#f4b400",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      fontSize: "1.05rem",
                      flexShrink: 0,
                    }}
                  >
                    {(a.nome_completo || "A").charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      <strong style={{ color: "#0f2a43", fontSize: "1rem" }}>{a.nome_completo}</strong>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          padding: "2px 8px",
                          borderRadius: 999,
                          background: isPago ? "#dcfce7" : "#fef3c7",
                          color: isPago ? "#166534" : "#b45309",
                        }}
                      >
                        {isPago ? "Acesso Liberado" : "Pagamento Pendente"}
                      </span>
                    </div>
                    <div style={{ fontSize: "0.84rem", color: "#64748b", marginTop: 2 }}>
                      {a.email} • Matrícula: <strong>{a.numero_matricula || "SEB-2026"}</strong>
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  <select
                    aria-label="Cargo do usuário"
                    value={a.role || "aluno"}
                    onChange={(e) => handleAlterarRole(a, e.target.value)}
                    style={{
                      padding: "6px 10px",
                      borderRadius: 8,
                      border: "1px solid #cbd5e1",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      background: "#f8fafc",
                    }}
                  >
                    <option value="aluno">Cargo: Aluno</option>
                    <option value="professor">Cargo: Professor</option>
                    <option value="superadmin">Cargo: Superadmin</option>
                  </select>

                  <button
                    type="button"
                    className={`btn btn-com-icone ${isPago ? "btn-contorno" : "btn-primario"}`}
                    style={{ padding: "6px 12px", fontSize: "0.82rem" }}
                    onClick={() => handleAlternarPagamento(a)}
                  >
                    {isPago ? <Lock size={14} /> : <Unlock size={14} />}
                    <span>{isPago ? "Pausar Acesso" : "Liberar Acesso (PIX/Bolsa)"}</span>
                  </button>

                  <Link
                    to={`/verificar?codigo=${encodeURIComponent(a.numero_matricula || a.email)}`}
                    className="btn btn-contorno btn-com-icone"
                    style={{ padding: "6px 12px", fontSize: "0.82rem" }}
                    title="Verificar Diploma deste aluno"
                  >
                    <Award size={14} />
                    <span>Certificado</span>
                  </Link>

                  {a.email.toLowerCase() !== "edukadoshmda@gmail.com" && (
                    <button
                      type="button"
                      className="btn btn-contorno"
                      style={{ padding: "6px 10px", color: "#dc2626", borderColor: "#fca5a5" }}
                      onClick={() => handleExcluir(a)}
                      title="Excluir registro"
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
