// src/components/TutorWidget.jsx
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Maximize2,
  RotateCcw,
  CheckCircle2,
  BookOpen
} from "lucide-react";
import { responderPerguntaSebitan } from "../services/sebitanAgentService.js";

export default function TutorWidget({
  aberto: abertoProp,
  setAberto: setAbertoProp,
  showFab = false,
}) {
  const [abertoInterno, setAbertoInterno] = useState(false);
  const aberto = abertoProp !== undefined ? abertoProp : abertoInterno;
  const setAberto = setAbertoProp !== undefined ? setAbertoProp : setAbertoInterno;
  const [mensagens, setMensagens] = useState(() => {
    try {
      const salvo = localStorage.getItem("sebitan_widget_mensagens");
      if (salvo) {
        const parsed = JSON.parse(salvo);
        if (Array.isArray(parsed)) {
          const limpas = parsed.filter(
            (m) => !m?.texto?.includes("Cannot read properties of undefined")
          );
          if (limpas.length > 0) return limpas;
        }
      }
    } catch (e) {
      console.error(e);
    }
    return [
      {
        id: "1",
        remetente: "tutor",
        texto: "Olá, Aluno! Sou o Tutor Especialista da Teologia Acessível. Tem alguma dúvida rápida sobre alguma disciplina ou questão de prova?",
        data: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      }
    ];
  });
  const [inputTexto, setInputTexto] = useState("");
  const [carregando, setCarregando] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    try {
      localStorage.setItem("sebitan_widget_mensagens", JSON.stringify(mensagens));
    } catch (e) {
      console.error(e);
    }
    if (aberto) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [mensagens, aberto]);

  const handleEnviar = async (e) => {
    e?.preventDefault();
    const texto = inputTexto.trim();
    if (!texto || carregando) return;

    const novaUsuario = {
      id: Date.now().toString(),
      remetente: "usuario",
      texto,
      data: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMensagens((prev) => [...prev, novaUsuario]);
    setInputTexto("");
    setCarregando(true);

    try {
      const resposta = await responderPerguntaSebitan(texto);
      const novaTutor = {
        id: (Date.now() + 1).toString(),
        remetente: "tutor",
        texto: resposta.texto,
        fontes: resposta.fontes || [],
        data: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };
      setMensagens((prev) => [...prev, novaTutor]);
    } catch (err) {
      const erroMsg = {
        id: (Date.now() + 1).toString(),
        remetente: "tutor",
        texto: `Falha na consulta: ${err.message}`,
        data: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };
      setMensagens((prev) => [...prev, erroMsg]);
    } finally {
      setCarregando(false);
    }
  };

  const handleLimpar = () => {
    localStorage.removeItem("sebitan_widget_mensagens");
    setMensagens([
      {
        id: "reset",
        remetente: "tutor",
        texto: "Conversa reiniciada. Pode fazer sua pergunta teológica ou acadêmica!",
        data: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      }
    ]);
  };

  if (!aberto && !showFab) return null;

  return (
    <div className="tutor-widget-root">
      {!aberto && showFab && (
        <button
          className="tutor-widget-fab"
          onClick={() => setAberto(true)}
          title="Tirar dúvidas com o Tutor Especialista"
          aria-label="Abrir Tutor Especialista"
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
      )}

      {aberto && (
        <div className="tutor-widget-panel" role="dialog" aria-label="Chat com Tutor Especialista">
          <div className="widget-header">
            <div className="widget-header-brand">
              <img src="/logo-teologia.png" alt="Teologia Acessível" className="widget-avatar" />
              <div>
                <strong className="widget-title">Tutor Especialista</strong>
                <span className="widget-status">Compêndio Ativo</span>
              </div>
            </div>
            <div className="widget-header-actions">
              <Link
                to="/tutor"
                onClick={() => setAberto(false)}
                className="widget-icon-btn"
                title="Abrir tela cheia do Tutor"
              >
                <Maximize2 size={16} />
              </Link>
              <button
                className="widget-icon-btn"
                onClick={handleLimpar}
                title="Limpar conversa"
              >
                <RotateCcw size={15} />
              </button>
              <button
                className="widget-icon-btn"
                onClick={() => setAberto(false)}
                title="Fechar assistente"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          <div className="widget-body">
            {mensagens.map((m) => (
              <div
                key={m.id}
                className={`widget-bubble-wrap ${
                  m.remetente === "usuario" ? "wrap-usuario" : "wrap-tutor"
                }`}
              >
                <div
                  className={`widget-bubble ${
                    m.remetente === "usuario" ? "bubble-usuario" : "bubble-tutor"
                  }`}
                >
                  <p className="widget-bubble-text">{m.texto}</p>
                  {m.fontes && m.fontes.length > 0 && (
                    <div className="widget-fontes-pill">
                      <BookOpen size={11} />
                      <span>{m.fontes[0].titulo}</span>
                    </div>
                  )}
                  <span className="widget-bubble-time">{m.data}</span>
                </div>
              </div>
            ))}

            {carregando && (
              <div className="widget-bubble-wrap wrap-tutor">
                <div className="widget-bubble bubble-tutor carregando-widget">
                  <Sparkles size={14} className="spin-icone" />
                  <span>Consultando compêndio...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="widget-footer" onSubmit={handleEnviar}>
            <input
              type="text"
              value={inputTexto}
              onChange={(e) => setInputTexto(e.target.value)}
              placeholder="Digite sua dúvida aqui..."
              className="widget-input"
              disabled={carregando}
            />
            <button
              type="submit"
              className="widget-send-btn"
              disabled={carregando || !inputTexto.trim()}
              title="Enviar"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
