import { useState } from "react";
import {
  Layers,
  ChevronDown,
  ChevronUp,
  Lock,
  Unlock,
  CheckCircle2,
  BookOpen,
  Headphones,
  Video,
  PlayCircle,
  Clock,
} from "lucide-react";
import { getProgressoDisciplina, marcarProgresso, getNotasDisciplina, getTentativasHoje } from "../../services/progressoEstudoService";
import { GRADE_CURRICULAR, MODULOS_SEBITAN } from "../../data/gradeCurricular";
import type { Disciplina, Modulo, ProgressoDisciplina, NotasDisciplina } from "../../types";

interface GradeCurricularProps {
  _provasDisciplinas: Disciplina[];
  onIniciarProva: (disciplina: Disciplina, tipo: "p1" | "p2") => void;
  onLiberarTodasEtapas?: (discId: string) => void;
  setProgressoTick: (tick: number) => void;
}

export default function GradeCurricular({
  _provasDisciplinas,
  onIniciarProva,
  onLiberarTodasEtapas,
  setProgressoTick,
}: GradeCurricularProps) {
  const [modulosAbertos, setModulosAbertos] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
  });

  const toggleModulo = (modId: number) => {
    setModulosAbertos((prev) => ({ ...prev, [modId]: !prev[modId] }));
  };

  const alternarEtapaEstudo = (discId: string, tipo: "pdf" | "audio" | "video") => {
    const atual = getProgressoDisciplina(discId);
    marcarProgresso(discId, tipo, !atual[tipo]);
    setProgressoTick((t) => t + 1);
  };

  const liberarTodasEtapas = (discId: string) => {
    marcarProgresso(discId, "pdf", true);
    marcarProgresso(discId, "audio", true);
    marcarProgresso(discId, "video", true);
    setProgressoTick((t) => t + 1);
    onLiberarTodasEtapas?.(discId);
  };

  return (
    <section className="secao-testes no-print">
      <div className="secao-header">
        <div>
          <span className="badge-destaque-interno">
            <Layers size={14} className="icone-inline" /> Grade Curricular Coordenada & Sistema Avaliativo
          </span>
          <h2>Provas Oficiais das 30 Disciplinas</h2>
          <p className="texto-sub">
            Cada disciplina possui <strong>2 Provas Oficiais de 20 questões</strong> (Prova 1: Teórica • Prova 2: Exegética & Prática).
            <br />
            <strong>Regra Pedagógica:</strong> A avaliação é liberada após você concluir a <strong>leitura do PDF, áudio da aula e videoaula</strong>.
            Você pode repetir a prova até tirar a média 7,0 (limite de <strong>2 tentativas por dia</strong>).
          </p>
        </div>
      </div>

      <div className="modulos-container-academico">
        {MODULOS_SEBITAN.map((modulo: Modulo) => {
          const disciplinasDoModulo = GRADE_CURRICULAR.filter((g) => g.moduloId === modulo.id);
          const aberto = modulosAbertos[modulo.id] !== false;

          return (
            <div key={modulo.id} className="modulo-bloco-secao">
              <div className="modulo-bloco-cabecalho" onClick={() => toggleModulo(modulo.id)}>
                <div className="modulo-cabecalho-info">
                  <span className="modulo-badge-ciclo" style={{ backgroundColor: modulo.cor }}>
                    <Layers size={13} /> {modulo.badge}
                  </span>
                  <h3 className="modulo-titulo-texto">{modulo.nome}</h3>
                  <p className="modulo-sub-desc">{modulo.descricao}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: "0.78rem", color: "#64748b", fontWeight: 700 }}>
                    {disciplinasDoModulo.length} Disciplinas
                  </span>
                  {aberto ? <ChevronUp size={20} color="#64748b" /> : <ChevronDown size={20} color="#64748b" />}
                </div>
              </div>

              {aberto && (
                <div className="modulo-grade-disciplinas">
                  {disciplinasDoModulo.map((disc: Disciplina) => {
                    const progresso = getProgressoDisciplina(disc.id);
                    const notas = getNotasDisciplina(disc.id);
                    const tentativasP1Hoje = getTentativasHoje(disc.id, "p1");
                    const tentativasP2Hoje = getTentativasHoje(disc.id, "p2");

                    const p1Aprovada = notas.p1?.nota !== undefined && notas.p1.nota >= 7.0;
                    const p2Aprovada = notas.p2?.nota !== undefined && notas.p2.nota >= 7.0;

                    return (
                      <div key={disc.id} className="card-disciplina-completa">
                        <div className="disciplina-topo-linha">
                          <div className="disciplina-badges-grupo">
                            <span className="badge-ordem-numero">#{String(disc.ordem).padStart(2, "0")}</span>
                            <span className="badge-codigo-disc">{disc.codigo}</span>
                            <span className="badge-carga-disc">{disc.cargaHoraria}h</span>
                          </div>

                          <span className={`status-liberacao-pill ${progresso.liberada ? "liberada" : "bloqueada"}`}>
                            {progresso.liberada ? (
                              <>
                                <Unlock size={12} /> Liberada
                              </>
                            ) : (
                              <>
                                <Lock size={12} /> Pré-requisito
                              </>
                            )}
                          </span>
                        </div>

                        <div>
                          <h4 className="disciplina-titulo-h3">{disc.titulo}</h4>
                          <p className="disciplina-subtitulo-p">{disc.subtitulo}</p>
                        </div>

                        <div className="trava-pedagogica-box">
                          <div className="trava-box-topo">
                            <span>Etapas de Estudo Obrigatórias:</span>
                            {!progresso.liberada && (
                              <button
                                className="btn btn-sm"
                                style={{ fontSize: "0.68rem", padding: "1px 6px", background: "#e2e8f0", border: "none", borderRadius: 4, cursor: "pointer" }}
                                onClick={() => liberarTodasEtapas(disc.id)}
                                title="Marcar estudo como completo"
                              >
                                Liberar Tudo
                              </button>
                            )}
                          </div>

                          <div className="checklist-etapas-linha">
                            <div
                              className={`item-checklist-passo ${progresso.pdf ? "concluido" : "pendente"}`}
                              onClick={() => alternarEtapaEstudo(disc.id, "pdf")}
                              title="Clique para alternar leitura do PDF"
                            >
                              <div className="passo-icone-status">
                                {progresso.pdf ? <CheckCircle2 size={16} /> : <BookOpen size={16} />}
                              </div>
                              <span className="passo-rotulo-texto">PDF Apostila</span>
                            </div>

                            <div
                              className={`item-checklist-passo ${progresso.audio ? "concluido" : "pendente"}`}
                              onClick={() => alternarEtapaEstudo(disc.id, "audio")}
                              title="Clique para alternar audição do áudio"
                            >
                              <div className="passo-icone-status">
                                {progresso.audio ? <CheckCircle2 size={16} /> : <Headphones size={16} />}
                              </div>
                              <span className="passo-rotulo-texto">Áudio Aula</span>
                            </div>

                            <div
                              className={`item-checklist-passo ${progresso.video ? "concluido" : "pendente"}`}
                              onClick={() => alternarEtapaEstudo(disc.id, "video")}
                              title="Clique para alternar visualização do vídeo"
                            >
                              <div className="passo-icone-status">
                                {progresso.video ? <CheckCircle2 size={16} /> : <Video size={16} />}
                              </div>
                              <span className="passo-rotulo-texto">Videoaula</span>
                            </div>
                          </div>
                        </div>

                        <div className="duas-provas-container">
                          <div className="card-sub-prova">
                            <div className="card-sub-prova-topo">
                              <span className="sub-prova-tag">PROVA 1</span>
                              <span className="sub-prova-questoes">20 Questões</span>
                            </div>

                            <div className="sub-prova-nota-box">
                              <span>Nota:</span>
                              <strong style={{ color: p1Aprovada ? "#16a34a" : "#0f172a" }}>
                                {notas.p1?.nota !== undefined ? notas.p1.nota.toFixed(1) : "Pendente"}
                              </strong>
                            </div>

                            <div className={`sub-prova-tentativas-aviso ${tentativasP1Hoje.length >= 2 && !p1Aprovada ? "limite" : ""}`}>
                              <Clock size={11} />
                              <span>Hoje: {tentativasP1Hoje.length}/2 tentativas</span>
                            </div>

                            <button
                              type="button"
                              className={`btn-iniciar-sub-prova ${
                                !progresso.liberada
                                  ? "bloqueada"
                                  : p1Aprovada
                                  ? "aprovada"
                                  : "liberada"
                              }`}
                              onClick={() => onIniciarProva(disc, "p1")}
                            >
                              {!progresso.liberada ? (
                                <>
                                  <Lock size={13} /> Bloqueada
                                </>
                              ) : p1Aprovada ? (
                                <>
                                  <CheckCircle2 size={13} /> Aprovado (P1)
                                </>
                              ) : (
                                <>
                                  <PlayCircle size={13} /> Fazer P1
                                </>
                              )}
                            </button>
                          </div>

                          <div className="card-sub-prova">
                            <div className="card-sub-prova-topo">
                              <span className="sub-prova-tag" style={{ background: "#7c3aed" }}>PROVA 2</span>
                              <span className="sub-prova-questoes">20 Questões</span>
                            </div>

                            <div className="sub-prova-nota-box">
                              <span>Nota:</span>
                              <strong style={{ color: p2Aprovada ? "#16a34a" : "#0f172a" }}>
                                {notas.p2?.nota !== undefined ? notas.p2.nota.toFixed(1) : "Pendente"}
                              </strong>
                            </div>

                            <div className={`sub-prova-tentativas-aviso ${tentativasP2Hoje.length >= 2 && !p2Aprovada ? "limite" : ""}`}>
                              <Clock size={11} />
                              <span>Hoje: {tentativasP2Hoje.length}/2 tentativas</span>
                            </div>

                            <button
                              type="button"
                              className={`btn-iniciar-sub-prova ${
                                !progresso.liberada
                                  ? "bloqueada"
                                  : p2Aprovada
                                  ? "aprovada"
                                  : "liberada"
                              }`}
                              onClick={() => onIniciarProva(disc, "p2")}
                            >
                              {!progresso.liberada ? (
                                <>
                                  <Lock size={13} /> Bloqueada
                                </>
                              ) : p2Aprovada ? (
                                <>
                                  <CheckCircle2 size={13} /> Aprovado (P2)
                                </>
                              ) : (
                                <>
                                  <PlayCircle size={13} /> Fazer P2
                                </>
                              )}
                            </button>
                          </div>
                        </div>

                        <div className="media-disciplina-rodape">
                          <span>Média da Disciplina:</span>
                          <span className={`media-nota-destaque ${notas.mediaFinal && notas.mediaFinal >= 7.0 ? "aprovado" : ""}`}>
                            {notas.mediaFinal !== undefined && notas.mediaFinal !== null
                              ? `${notas.mediaFinal.toFixed(1)} (${notas.situacaoFinal || "Em Curso"})`
                              : "Aguardando Provas"}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}