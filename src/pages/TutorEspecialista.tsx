// src/pages/TutorEspecialista.jsx
import { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  Send,
  BookOpen,
  HelpCircle,
  RotateCcw,
  CheckCircle2,
  Copy,
  Check,
  Settings,
  X,
  ExternalLink,
  GraduationCap,
  ScrollText,
  KeyRound,
  MessageSquare
} from "lucide-react";
import {
  responderPerguntaSebitan,
  obterModulosEDisciplinas,
  SUGESTOES_PERGUNTAS
} from "../services/sebitanAgentService.js";
import { useAuth } from "../context/AuthContext";
import { carregarProgressoGeral } from "../services/progressoEstudoService.js";

export default function TutorEspecialista() {
  const { usuario, matricula } = useAuth();
  const [mensagens, setMensagens] = useState(() => {
    try {
      const salvo = localStorage.getItem("sebitan_tutor_mensagens");
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
        id: "intro",
        remetente: "tutor",
        texto: `Graça e Paz! Sou o **Tutor Especialista da Teologia Acessível**.
        
Estou conectado a **todo o compêndio acadêmico da plataforma**:
- 📚 **30 Apostilas com Texto Integral** (+250.000 palavras)
- 📝 **300 Questões Avaliativas Oficiais** com gabarito comentado
- 🏛️ **Regulamento Acadêmico, Matrícula e Certificação**

Como posso ajudar seus estudos teológicos ou sua preparação ministerial hoje? Escolha uma pergunta sugerida abaixo ou digite sua dúvida!`,
        fontes: [
          {
            titulo: "Compêndio Geral de Teologia Acessível",
            modulo: "30 Disciplinas Teológicas",
            detalhe: "Acervo Integral & Banco de Provas",
            tipo: "Acervo Oficial"
          }
        ],
        modo: "Compêndio Oficial Ativo",
        data: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      }
    ];
  });

  const [inputTexto, setInputTexto] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [filtroModulo, setFiltroModulo] = useState("todos");
  const [copiadoId, setCopiadoId] = useState(null);
  const [modalConfigAberto, setModalConfigAberto] = useState(false);
  const [apiKeyInput, setApiKeyInput] = useState(() => {
    return localStorage.getItem("sebitan_gemini_api_key") || "";
  });
  const [salvouApiKey, setSalvouApiKey] = useState(false);

  const modulosDisponiveis = obterModulosEDisciplinas();
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const progressoAluno = carregarProgressoGeral();
  const etapasConcluidas = Object.values(progressoAluno).filter((item) => item?.pdf && item?.audio && item?.video).length;
  const disciplinasIniciadas = Object.keys(progressoAluno).length;
  const statusMatricula = matricula?.pagamento === "pago" || matricula?.status_pagamento === "pago" ? "Matrícula ativa" : "Matrícula em andamento";

  useEffect(() => {
    try {
      localStorage.setItem("sebitan_tutor_mensagens", JSON.stringify(mensagens));
    } catch (e) {
      console.error(e);
    }
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [mensagens]);

  const handleEnviar = async (textoParaEnviar = null) => {
    const texto = (textoParaEnviar || inputTexto).trim();
    if (!texto || carregando) return;

    const novaMensagemUsuario = {
      id: Date.now().toString(),
      remetente: "usuario",
      texto,
      data: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMensagens((prev) => [...prev, novaMensagemUsuario]);
    setInputTexto("");
    setCarregando(true);

    try {
      const resposta = await responderPerguntaSebitan(texto, {
        filtroModulo: filtroModulo === "todos" ? null : filtroModulo
      });

      const novaMensagemTutor = {
        id: (Date.now() + 1).toString(),
        remetente: "tutor",
        texto: resposta.texto,
        fontes: resposta.fontes || [],
        modo: resposta.modo,
        avisoIA: resposta.avisoIA,
        data: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };

      setMensagens((prev) => [...prev, novaMensagemTutor]);
    } catch (err) {
      const msgErro = {
        id: (Date.now() + 1).toString(),
        remetente: "tutor",
        texto: `Ocorreu uma falha momentânea ao consultar o compêndio teológico. Por favor, tente novamente ou verifique sua conexão. (${err.message})`,
        fontes: [],
        modo: "Erro",
        data: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };
      setMensagens((prev) => [...prev, msgErro]);
    } finally {
      setCarregando(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const handleLimpar = () => {
    if (window.confirm("Deseja realmente reiniciar a conversa com o Tutor Especialista?")) {
      localStorage.removeItem("sebitan_tutor_mensagens");
      setMensagens([
        {
          id: "intro-reset",
          remetente: "tutor",
          texto: `Paz do Senhor! Conversa reiniciada. Em qual disciplina ou assunto da **Teologia Acessível** você quer focar agora?`,
          fontes: [],
          modo: "Compêndio Oficial Ativo",
          data: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        }
      ]);
    }
  };

  const copiarTexto = (id, texto) => {
    navigator.clipboard.writeText(texto);
    setCopiadoId(id);
    setTimeout(() => setCopiadoId(null), 2000);
  };

  const salvarApiKey = () => {
    if (apiKeyInput.trim()) {
      localStorage.setItem("sebitan_gemini_api_key", apiKeyInput.trim());
    } else {
      localStorage.removeItem("sebitan_gemini_api_key");
    }
    setSalvouApiKey(true);
    setTimeout(() => {
      setSalvouApiKey(false);
      setModalConfigAberto(false);
    }, 1200);
  };

  return (
    <div className="tutor-container">
      {/* Topo do Agente */}
      <div className="tutor-header">
        <div className="tutor-header-info">
          <div className="tutor-avatar-grande">
            <img src="/logo-teologia.png" alt="Teologia Acessível" />
            <span className="tutor-status-dot" title="Especialista Ativo"></span>
          </div>
          <div>
            <div className="tutor-titulo-badge">
              <h1>Tutor Especialista</h1>
              <span className="badge-ia">Compêndio Oficial 100% Ativo</span>
            </div>
            <p className="tutor-subtitulo">
              Assistente Teológico Acadêmico com busca em 30 apostilas integrais e 300 questões oficiais.
            </p>
          </div>
        </div>

        <div className="tutor-acoes-topo">
          <button
            className="btn btn-secundario btn-sm"
            onClick={() => setModalConfigAberto(true)}
            title="Configurações de IA (Opcional)"
          >
            <KeyRound size={16} />
            <span>IA Avançada</span>
          </button>
          <button
            className="btn btn-contorno btn-sm"
            onClick={handleLimpar}
            title="Limpar histórico de conversa"
          >
            <RotateCcw size={16} />
            <span>Reiniciar</span>
          </button>
        </div>
      </div>

      {/* Barra de Filtro de Módulo */}
      <div className="tutor-filtros-bar">
        <div className="tutor-filtro-label">
          <BookOpen size={16} />
          <span>Filtrar por Módulo:</span>
        </div>
        <select
          value={filtroModulo}
          onChange={(e) => setFiltroModulo(e.target.value)}
          className="tutor-select-modulo"
        >
          <option value="todos">Todos os 30 Módulos do Seminário</option>
          {modulosDisponiveis.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      <div className="tutor-contexto-aluno" aria-label="Resumo acadêmico do aluno">
        <div className="tutor-contexto-identidade">
          <GraduationCap size={18} />
          <div>
            <strong>{usuario?.nome?.split(" ")[0] || "Aluno"}, este é o seu espaço de estudo</strong>
            <span>{statusMatricula} · use o filtro para concentrar a revisão em uma disciplina.</span>
          </div>
        </div>
        <div className="tutor-contexto-metricas">
          <span><strong>{etapasConcluidas}</strong> etapas completas</span>
          <span><strong>{disciplinasIniciadas}</strong> disciplinas iniciadas</span>
        </div>
      </div>

      {/* Área Central de Mensagens */}
      <div className="tutor-chat-box">
        {mensagens.map((msg) => (
          <div
            key={msg.id}
            className={`tutor-mensagem-row ${
              msg.remetente === "usuario" ? "msg-usuario-row" : "msg-tutor-row"
            }`}
          >
            {msg.remetente === "tutor" && (
              <div className="tutor-msg-avatar">
                <img src="/logo-teologia.png" alt="Teologia Acessível" />
              </div>
            )}

            <div className="tutor-msg-corpo">
              <div className="tutor-msg-topo">
                <strong>{msg.remetente === "usuario" ? "Você (Aluno)" : "Tutor Especialista"}</strong>
                <span className="tutor-msg-hora">{msg.data}</span>
                {msg.remetente === "tutor" && (
                  <button
                    className="btn-copiar-msg"
                    onClick={() => copiarTexto(msg.id, msg.texto)}
                    title="Copiar texto"
                  >
                    {copiadoId === msg.id ? <Check size={14} color="#16a34a" /> : <Copy size={14} />}
                  </button>
                )}
              </div>

              <div className="tutor-msg-texto">
                {msg.texto.split("\n").map((linha, idx) => {
                  if (linha.startsWith("### ")) {
                    return <h3 key={idx} className="tutor-msg-h3">{linha.replace("### ", "")}</h3>;
                  }
                  if (linha.startsWith("#### ")) {
                    return <h4 key={idx} className="tutor-msg-h4">{linha.replace("#### ", "")}</h4>;
                  }
                  if (linha.startsWith("> *\"") || linha.startsWith("> ")) {
                    return (
                      <blockquote key={idx} className="tutor-msg-quote">
                        {linha.replace(/^>\s*\**"?/, "").replace(/"?\**$/, "")}
                      </blockquote>
                    );
                  }
                  if (linha.startsWith("- ")) {
                    return <li key={idx} className="tutor-msg-li">{linha.replace("- ", "")}</li>;
                  }
                  if (linha.trim() === "---") {
                    return <hr key={idx} className="tutor-msg-divisor" />;
                  }
                  if (!linha.trim()) {
                    return <div key={idx} style={{ height: "8px" }} />;
                  }
                  return <p key={idx}>{linha}</p>;
                })}
              </div>

              {msg.avisoIA && (
                <div className="tutor-aviso-ia">
                  <small>{msg.avisoIA}</small>
                </div>
              )}

              {/* Fontes citadas do compêndio */}
              {msg.fontes && msg.fontes.length > 0 && (
                <div className="tutor-fontes-container">
                  <span className="tutor-fontes-titulo">
                    <CheckCircle2 size={13} color="#16a34a" /> Fontes Oficiais Citadas:
                  </span>
                  <div className="tutor-fontes-grid">
                    {msg.fontes.map((f, fIdx) => (
                      <div key={fIdx} className="tutor-fonte-card">
                        <div className="tutor-fonte-tipo">{f.tipo}</div>
                        <div className="tutor-fonte-nome">{f.titulo}</div>
                        {f.modulo && <div className="tutor-fonte-modulo">{f.modulo}</div>}
                        {f.detalhe && <div className="tutor-fonte-detalhe">{f.detalhe}</div>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {msg.modo && (
                <div className="tutor-modo-tag">
                  <small>Modo: {msg.modo}</small>
                </div>
              )}
            </div>
          </div>
        ))}

        {carregando && (
          <div className="tutor-mensagem-row msg-tutor-row">
            <div className="tutor-msg-avatar">
              <img src="/logo-teologia.png" alt="Teologia Acessível" />
            </div>
            <div className="tutor-msg-corpo carregando-balao">
              <Sparkles className="spin-icone" size={18} />
              <span>Consultando o compêndio das 30 apostilas e banco de questões...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Sugestões Rápidas de Perguntas */}
      <div className="tutor-sugestoes-wrapper">
        <span className="tutor-sugestoes-rotulo">
          <HelpCircle size={14} /> Sugestões Acadêmicas & Provas:
        </span>
        <div className="tutor-sugestoes-lista">
          {SUGESTOES_PERGUNTAS.map((sug, i) => (
            <button
              key={i}
              className="tutor-chip-sugestao"
              onClick={() => handleEnviar(sug.pergunta)}
              disabled={carregando}
            >
              <span className="chip-cat">{sug.categoria}:</span> {sug.pergunta}
            </button>
          ))}
        </div>
      </div>

      {/* Input de Envio */}
      <form
        className="tutor-input-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleEnviar();
        }}
      >
        <input
          ref={inputRef}
          type="text"
          value={inputTexto}
          onChange={(e) => setInputTexto(e.target.value)}
          placeholder="Faça qualquer pergunta teológica, exegética ou sobre as provas..."
          className="tutor-input-texto"
          disabled={carregando}
        />
        <button
          type="submit"
          className="btn btn-primario btn-enviar-tutor"
          disabled={carregando || !inputTexto.trim()}
          title="Enviar pergunta"
        >
          <Send size={18} />
          <span>Enviar</span>
        </button>
      </form>

      {/* Modal de Configuração Opcional de Chave Gemini */}
      {modalConfigAberto && (
        <div className="modal-overlay" onClick={() => setModalConfigAberto(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <KeyRound size={20} color="var(--azul-700)" />
                <h2>Configuração de IA Avançada (Opcional)</h2>
              </div>
              <button
                className="btn-fechar-modal"
                onClick={() => setModalConfigAberto(false)}
              >
                <X size={20} />
              </button>
            </div>
            <div className="modal-corpo">
              <p>
                O Tutor Especialista já opera nativamente de forma <strong>100% autônoma e gratuita</strong> usando o compêndio local indexado no app.
              </p>
              <p style={{ marginTop: "10px" }}>
                Se você desejar respostas geradas por IA avançada em linguagem livre alimentada com o contexto da Teologia Acessível (RAG), você pode colar sua chave gratuita do <strong>Google Gemini</strong> abaixo:
              </p>
              <div className="input-group" style={{ marginTop: "15px" }}>
                <label>Chave de API do Google Gemini (Opcional):</label>
                <input
                  type="password"
                  value={apiKeyInput}
                  onChange={(e) => setApiKeyInput(e.target.value)}
                  placeholder="AIzaSy..."
                  className="campo-texto"
                />
                <small style={{ color: "#64748b", marginTop: "4px", display: "block" }}>
                  A chave fica salva com total segurança apenas no seu navegador (`localStorage`).
                </small>
              </div>

              {salvouApiKey && (
                <div className="alerta-sucesso" style={{ marginTop: "12px" }}>
                  <Check size={16} /> Chave atualizada com sucesso!
                </div>
              )}
            </div>
            <div className="modal-rodape">
              <button
                className="btn btn-contorno"
                onClick={() => setModalConfigAberto(false)}
              >
                Fechar
              </button>
              <button className="btn btn-primario" onClick={salvarApiKey}>
                Salvar Configurações
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
