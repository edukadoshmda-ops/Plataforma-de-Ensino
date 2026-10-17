import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Church, User, Mail, Lock, UserPlus, AlertCircle, ArrowLeft } from "lucide-react";

export default function Cadastro() {
  const { cadastrar, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  const enviar = async (e) => {
    e.preventDefault();
    if (senha !== confirmar) {
      setErro("As senhas não coincidem.");
      return;
    }
    if (senha.length < 6) {
      setErro("A senha deve ter no mínimo 6 caracteres.");
      return;
    }
    setErro("");
    setCarregando(true);
    try {
      await cadastrar(nome.trim(), email.trim(), senha);
      await login(email.trim(), senha);
      navigate(`/matricula${location.search || ""}`);
    } catch (err) {
      setErro(err.message || "Erro ao realizar cadastro.");
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="auth-fundo">
      <Link to="/apresentacao" className="auth-voltar" aria-label="Voltar para a apresentação">
        <ArrowLeft size={20} />
        <span>Voltar</span>
      </Link>
      <form className="card auth-card" onSubmit={enviar}>
        <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: -6 }}>
          <Link
            to="/apresentacao"
            className="btn-card-voltar"
            title="Voltar para o início"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              color: "#475569",
              fontSize: "0.85rem",
              fontWeight: 600,
              textDecoration: "none",
              padding: "6px 12px",
              borderRadius: 8,
              background: "#f1f5f9",
              border: "1px solid #e2e8f0",
              transition: "background 0.15s ease",
            }}
          >
            <ArrowLeft size={16} />
            <span>Voltar</span>
          </Link>
        </div>
        <div className="auth-header">
          <div className="auth-emblema">
            <img src="/logo-teologia.png" alt="Teologia Acessível" className="logo-img-auth" />
          </div>
          <h1 className="auth-titulo">Teologia Acessível</h1>
          <p className="auth-sub">Plataforma de Teologia Bíblica • Matrícula Acadêmica</p>
        </div>

        {erro && (
          <p role="alert" className="alerta">
            <AlertCircle size={16} className="icone-inline" /> {erro}
          </p>
        )}

        <div className="form-grupo-campo">
          <label htmlFor="nome">
            <User size={14} className="icone-inline" /> Nome Completo do Aluno
          </label>
          <input
            id="nome"
            type="text"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome completo"
          />
        </div>

        <div className="form-grupo-campo">
          <label htmlFor="email">
            <Mail size={14} className="icone-inline" /> E-mail Institucional ou Pessoal
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="voce@email.com"
          />
        </div>

        <div className="form-grupo-campo">
          <label htmlFor="senha">
            <Lock size={14} className="icone-inline" /> Senha (mínimo 6 caracteres)
          </label>
          <input
            id="senha"
            type="password"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Mínimo de 6 caracteres"
          />
        </div>

        <div className="form-grupo-campo">
          <label htmlFor="confirmar">
            <Lock size={14} className="icone-inline" /> Confirmar Senha
          </label>
          <input
            id="confirmar"
            type="password"
            required
            value={confirmar}
            onChange={(e) => setConfirmar(e.target.value)}
            placeholder="Repita a senha"
          />
        </div>

        <button type="submit" className="btn btn-primario btn-largo btn-com-icone" disabled={carregando}>
          <UserPlus size={18} />
          <span>{carregando ? "Conectando..." : "Concluir Matrícula Gratuita"}</span>
        </button>

        <p className="auth-rodape">
          Já possui cadastro? <Link to="/login">Acessar com sua conta</Link>
        </p>
      </form>
    </div>
  );
}
