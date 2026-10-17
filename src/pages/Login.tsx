import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Mail, Lock, LogIn, AlertCircle, ArrowLeft } from "lucide-react";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  const enviar = async (e) => {
    e.preventDefault();
    setErro("");
    setCarregando(true);
    try {
      await login(email.trim(), senha);
      navigate("/", { replace: true });
    } catch (err) {
      setErro(err.message || "E-mail ou senha incorretos.");
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
      <form className="card auth-card login-card" onSubmit={enviar}>
        <div className="auth-header">
          <div className="auth-emblema">
            <img src="/logo-teologia.png" alt="Teologia Acessível" className="logo-img-auth" />
          </div>
          <h1 className="auth-titulo">Teologia Acessível</h1>
          <p className="auth-sub">Plataforma de Teologia Bíblica</p>
        </div>

        {erro && (
          <p role="alert" className="alerta">
            <AlertCircle size={16} className="icone-inline" /> {erro}
          </p>
        )}

        <div className="form-grupo-campo">
          <label htmlFor="email">
            <Mail size={14} className="icone-inline" /> E-mail Acadêmico
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
            <Lock size={14} className="icone-inline" /> Senha de Acesso
          </label>
          <input
            id="senha"
            type="password"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Sua senha"
          />
        </div>

        <button type="submit" className="btn btn-primario btn-largo btn-com-icone" disabled={carregando}>
          <LogIn size={18} />
          <span>{carregando ? "Autenticando..." : "Acessar Plataforma"}</span>
        </button>

        <p className="auth-rodape">
          Não tem matrícula? <Link to="/cadastro">Cadastre-se gratuitamente</Link>
        </p>
      </form>
    </div>
  );
}
