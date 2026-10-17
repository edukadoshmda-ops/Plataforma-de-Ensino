import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";
import {
  Compass,
  BookOpen,
  Headphones,
  ScrollText,
  Video,
  GraduationCap,
  LogOut,
  User,
  Menu,
  X,
  ClipboardList,
  Phone,
  Sparkles,
  BookMarked,
  ShieldCheck,
} from "lucide-react";
import TutorWidget from "./TutorWidget";

const links = [
  { to: "/", label: "Início", icone: Compass },
  { to: "/matricula", label: "Matrícula", icone: ClipboardList },
  { to: "/playbooks", label: "Playbooks", icone: BookOpen },
  { to: "/audiobooks", label: "Audiobooks", icone: Headphones },
  { to: "/artigos", label: "Artigos", icone: ScrollText },
  { to: "/videos", label: "Vídeos", icone: Video },
  { to: "/dicionario", label: "Dicionário & Bíblia", icone: BookMarked },
  { to: "/testes", label: "Testes", icone: GraduationCap },
  { to: "/verificar", label: "Validar Diploma", icone: ShieldCheck },
  { to: "/admin", label: "Superadmin SaaS", icone: Sparkles, apenasAdmin: true },
  { tipo: "tutor" },
];

export default function Layout() {
  const { usuario, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuAberto, setMenuAberto] = useState(false);
  const [tutorAberto, setTutorAberto] = useState(false);

  const sair = () => {
    logout();
    navigate("/login");
  };

  const getNomeExibicao = (nome) => {
    if (!nome) return "Aluno";
    const p = nome.trim().split(/\s+/);
    if (p.length <= 2) return nome;
    return `${p[0]} ${p[p.length - 1]}`;
  };

  useEffect(() => { setMenuAberto(false); }, [location.pathname]);
  useEffect(() => {
    const onEsc = (e) => { if (e.key === "Escape") setMenuAberto(false); };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  return (
    <div className="app-layout">
      <aside className={`sidebar ${menuAberto ? "sidebar-aberta" : ""}`} aria-label="Navegação principal">
        <div className="sidebar-header">
          <Link to="/" className="logo-sidebar" onClick={() => setMenuAberto(false)}>
            <img src="/logo-teologia.png" alt="Teologia Acessível" className="logo-img-sidebar" />
          </Link>
          <button className="btn-fechar-menu" onClick={() => setMenuAberto(false)} aria-label="Fechar menu">
            <X size={20} />
          </button>
        </div>

        <nav className="sidebar-nav">
          {links.map((l) => {
            if (l.tipo === "tutor") {
              const ativo = location.pathname === "/tutor";
              return (
                <button
                  type="button"
                  key="tutor-pill"
                  className={`sidebar-tutor-pill ${ativo ? "ativo" : ""}`}
                  onClick={() => {
                    setTutorAberto((prev) => !prev);
                    setMenuAberto(false);
                  }}
                  title="Tirar dúvidas com o Tutor Especialista"
                >
                  <div className="fab-avatar-wrap">
                    <img src="/logo-teologia.png" alt="Teologia Acessível" className="fab-logo" />
                    <span className="fab-pulse-ring"></span>
                  </div>
                  <div className="fab-textos">
                    <span className="fab-titulo">Tutor IA</span>
                    <span className="fab-sub">Tire dúvidas</span>
                  </div>
                </button>
              );
            }

            if (l.apenasAdmin && usuario?.role !== "superadmin" && usuario?.role !== "professor") {
              return null;
            }
            const Icone = l.icone;
            const ativo = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={ativo ? "ativo" : ""}
                onClick={() => setMenuAberto(false)}
              >
                <Icone size={18} strokeWidth={2} className="nav-icone" />
                <span>{l.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          {usuario && (
            <div className="sidebar-usuario-area">
              <div className="sidebar-usuario-info" title={usuario.nome}>
                <span className="sidebar-usuario-avatar"><User size={16} /></span>
                <span className="sidebar-usuario-nome">{getNomeExibicao(usuario.nome)}</span>
              </div>
              <button className="btn btn-contorno btn-sair-sidebar" onClick={sair} title="Encerrar sessão">
                <LogOut size={15} />
                <span>Sair</span>
              </button>
            </div>
          )}
          <div className="sidebar-rodape-mini">
            <strong>Teologia Acessível</strong>
            <span>Plataforma de Teologia Bíblica</span>
            <a href="https://wa.me/5591993837093" target="_blank" rel="noreferrer" className="sidebar-whatsapp-link" title="Falar no WhatsApp">
              <Phone size={12} /> 91 99383-7093
            </a>
          </div>
        </div>
      </aside>

      {menuAberto && <div className="sidebar-overlay" onClick={() => setMenuAberto(false)} aria-hidden="true" />}

      <div className="main-wrapper">
        <header className="mobile-topbar">
          <button className="hamburger" onClick={() => setMenuAberto(true)} aria-label="Abrir menu" aria-expanded={menuAberto ? "true" : "false"}>
            <Menu size={22} />
          </button>
          <Link to="/" className="logo-mobile" onClick={() => setMenuAberto(false)}>
            <img src="/logo-teologia.png" alt="Teologia Acessível" className="logo-img-mobile" />
            <div className="logo-textos-mobile">
              <span className="logo-sigla-mobile">Teologia Acessível</span>
            </div>
          </Link>
          <div className="mobile-topbar-acoes">
            {usuario && (
              <span className="mobile-usuario-nome" title={usuario.nome}>
                <User size={14} /> {getNomeExibicao(usuario.nome)}
              </span>
            )}
            <button className="btn-sair-mobile" onClick={sair} title="Sair"><LogOut size={18} /></button>
          </div>
        </header>

        <main className="conteudo">
          <Outlet />
        </main>

        <footer className="rodape">
          <div className="rodape-conteudo-institucional">
            <img src="/logo-teologia.png" alt="Teologia Acessível" className="logo-img-rodape" />
            <div className="rodape-textos">
              <strong>Teologia Acessível – Plataforma de Teologia Bíblica</strong>
              <p className="rodape-sub">Teologia Acessível para Todos — Plataforma de Ensino Teológico Livre e Ministério Pastoral.</p>
              <a href="https://wa.me/5591993837093" target="_blank" rel="noreferrer" className="rodape-whatsapp-link" title="Falar no WhatsApp">
                <Phone size={13} /> WhatsApp: 91 99383-7093
              </a>
            </div>
          </div>
        </footer>
      </div>

      <TutorWidget
        aberto={tutorAberto}
        setAberto={setTutorAberto}
        showFab={false}
      />
    </div>
  );
}
