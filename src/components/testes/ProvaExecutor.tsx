import { useState, useEffect } from "react";
import {
  CheckCircle2,
  X,
  AlertCircle,
  BookOpen,
  RotateCcw,
  Check,
  ClipboardList,
  Target,
} from "lucide-react";
import type { Questao, Prova, Disciplina, ResultadoProva } from "../../types";

interface ProvaExecutorProps {
  provaAtiva: Prova | null;
  disciplinaAtiva: Disciplina | null;
  tipoProvaAtiva: "p1" | "p2";
  onFinalizar: (resultado: ResultadoProva) => void;
  onFechar: () => void;
  onRefazer: (prova: Prova) => void;
  _onMostrarGabarito: () => void;
  _mostrarGabarito: boolean;
}

export default function ProvaExecutor({
  provaAtiva,
  disciplinaAtiva,
  tipoProvaAtiva,
  onFinalizar,
  onFechar,
  onRefazer,
  _onMostrarGabarito,
  _mostrarGabarito,
}: ProvaExecutorProps) {
  const [respostasUsuario, setRespostasUsuario] = useState<Record<number, string | number>>({});
  const [resultadoProva, setResultadoProva] = useState<ResultadoProva | null>(null);
  const [mostrarGabaritoLocal, setMostrarGabaritoLocal] = useState(false);

  const marcarResposta = (questaoId: number, valor: string | number) => {
    setRespostasUsuario((prev) => ({
      ...prev,
      [questaoId]: valor,
    }));
  };

  const handleFinalizar = () => {
    if (!provaAtiva || !disciplinaAtiva) return;

    let totalAcertos = 0;
    const gabarito = provaAtiva.questoes.map((q: Questao) => {
      const respUsuario = respostasUsuario[q.id];
      let acertou = false;

      if (q.tipo === "certo_errado") {
        acertou = respUsuario === q.respostaCorreta;
      } else {
        acertou = Number(respUsuario) === Number(q.respostaCorreta);
      }

      if (acertou) totalAcertos += 1;

      return {
        ...q,
        respostaDada: respUsuario,
        acertou,
      };
    });

    const totalQuestoes = provaAtiva.questoes.length;
    const notaCalculada = Number(((totalAcertos / totalQuestoes) * 10).toFixed(1));
    const percentual = Math.round((totalAcertos / totalQuestoes) * 100);
    const dataAtual = new Date().toLocaleDateString("pt-BR");
    const situacaoAvaliacao = notaCalculada >= 7.0 ? "Aprovado" : "Recuperação";

    const resultado: ResultadoProva = {
      disciplinaId: disciplinaAtiva.id,
      disciplinaTitulo: disciplinaAtiva.titulo,
      codigo: disciplinaAtiva.codigo,
      tipoProva,
      tituloProva: provaAtiva.titulo,
      nota: notaCalculada,
      acertos: totalAcertos,
      total: totalQuestoes,
      percentual,
      data: dataAtual,
      situacao: situacaoAvaliacao,
      gabarito,
    };

    setResultadoProva(resultado);
    onFinalizar(resultado);
  };

  const key = `${provaAtiva?.id}-${disciplinaAtiva?.id}-${tipoProvaAtiva}`;

  useEffect(() => {
    setRespostasUsuario({});
    setResultadoProva(null);
    setMostrarGabaritoLocal(false);
  }, [key]);

  const questoesCE = provaAtiva?.questoes.filter((q: Questao) => q.tipo === "certo_errado") || [];
  const questoesME = provaAtiva?.questoes.filter((q: Questao) => q.tipo === "multipla_escolha") || [];

  if (!provaAtiva) return null;

  return (
    <section className="card executor-prova-card no-print">
      <div className="executor-header">
        <div className="executor-titulo-area">
          <span className="modulo-tag">{provaAtiva.codigo}</span>
          <h2>{provaAtiva.titulo}</h2>
          <p className="texto-sub">
            {disciplinaAtiva?.modulo || provaAtiva.modulo} • Carga Horária: {disciplinaAtiva?.cargaHoraria || 50}h • <strong>20 Questões Avaliativas</strong>
          </p>
        </div>
        <button
          className="btn btn-contorno btn-sm btn-com-icone"
          onClick={onFechar}
          title="Sair da prova sem enviar"
        >
          <X size={16} />
          <span>Fechar</span>
        </button>
      </div>

      {!resultadoProva ? (
        <div className="executor-corpo">
          <div className="prova-instrucoes-banner">
            <div className="instrucao-item">
              <strong><ClipboardList size={16} aria-hidden="true" /> Estrutura da Prova:</strong> 20 Questões (Questões 1 a 10: <em>Certo ou Errado</em>; Questões 11 a 20: <em>Múltipla Escolha</em>).
            </div>
            <div className="instrucao-item">
              <strong><Target size={16} aria-hidden="true" /> Critério de Avaliação:</strong> Cada questão vale 0,5 ponto (Total: 10,0). Média mínima para aprovação: <strong>7,0</strong> (mínimo de 14 acertos).
            </div>
            <div className="instrucao-item">
              <strong><RotateCcw size={16} aria-hidden="true" /> Limite Diário de Repetição:</strong> É permitido refazer a prova até alcançar a média, respeitando o limite de <strong>2 tentativas por dia</strong>.
            </div>
          </div>

          <div className="progresso-respostas-barra">
            <span>
              Questões Respondidas: <strong>{Object.keys(respostasUsuario).length} / {provaAtiva.questoes.length}</strong>
            </span>
            <div className="barra-fundo">
              <div
                className="barra-preenchimento"
                style={{
                  width: `${(Object.keys(respostasUsuario).length / provaAtiva.questoes.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>

          <div className="lista-questoes-prova">
            <div className="secao-questoes-bloco">
              <div className="bloco-titulo-destaque">
                <span className="bloco-numero">PARTE 1</span>
                <h3>Questões 1 a 10: Marcar Certo ou Errado</h3>
                <p>Leia atentamente cada afirmativa baseada na apostila oficial e marque Certo ou Errado.</p>
              </div>

              {questoesCE.map((q: Questao, idx: number) => {
                const respondida = respostasUsuario[q.id] !== undefined;
                return (
                  <div key={q.id} className={`questao-card ${respondida ? "questao-marcada" : ""}`}>
                    <div className="questao-topo">
                      <span className="questao-badge">Questão {idx + 1} de {provaAtiva.questoes.length}</span>
                      <span className="questao-tipo-tag">Certo ou Errado</span>
                    </div>
                    <p className="questao-enunciado">{q.enunciado}</p>

                    <div className="botoes-certo-errado">
                      <button
                        type="button"
                        className={`btn-opcao-ce btn-certo ${respostasUsuario[q.id] === "Certo" ? "opcao-ce-selecionada" : ""}`}
                        onClick={() => marcarResposta(q.id, "Certo")}
                      >
                        <Check size={18} />
                        <span>Certo</span>
                      </button>
                      <button
                        type="button"
                        className={`btn-opcao-ce btn-errado ${respostasUsuario[q.id] === "Errado" ? "opcao-ce-selecionada" : ""}`}
                        onClick={() => marcarResposta(q.id, "Errado")}
                      >
                        <X size={18} />
                        <span>Errado</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="secao-questoes-bloco">
              <div className="bloco-titulo-destaque">
                <span className="bloco-numero">PARTE 2</span>
                <h3>Questões 11 a 20: Responder / Múltipla Escolha</h3>
                <p>Selecione a alternativa correta que melhor responde ao questionamento acadêmico.</p>
              </div>

              {questoesME.map((q: Questao, idx: number) => {
                const respondida = respostasUsuario[q.id] !== undefined;
                return (
                  <div key={q.id} className={`questao-card ${respondida ? "questao-marcada" : ""}`}>
                    <div className="questao-topo">
                      <span className="questao-badge">Questão {idx + 11} de {provaAtiva.questoes.length}</span>
                      <span className="questao-tipo-tag">Múltipla Escolha</span>
                    </div>
                    <p className="questao-enunciado">{q.enunciado}</p>

                    <div className="opcoes-multipla-escolha">
                      {(q.opcoes || []).map((opcao: string, oIdx: number) => {
                        const letras = ["A", "B", "C", "D"];
                        const selecionada = respostasUsuario[q.id] === oIdx;
                        return (
                          <label key={oIdx} className={`opcao-item ${selecionada ? "opcao-item-selecionada" : ""}`}>
                            <input
                              type="radio"
                              name={`questao_${q.id}`}
                              checked={selecionada}
                              onChange={() => marcarResposta(q.id, oIdx)}
                            />
                            <span className="opcao-letra">{letras[oIdx]}</span>
                            <span className="opcao-texto">{opcao}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="executor-rodape">
            <div className="executor-aviso-pendencias">
              {Object.keys(respostasUsuario).length < provaAtiva.questoes.length ? (
                <span>
                  <AlertCircle size={16} className="icone-inline" /> Atenção: você respondeu{" "}
                  <strong>{Object.keys(respostasUsuario).length}</strong> de {provaAtiva.questoes.length} questões.
                </span>
              ) : (
                <span>
                  <CheckCircle2 size={16} className="icone-inline text-sucesso" /> Todas as 20 questões foram respondidas! Pronto para entregar.
                </span>
              )}
            </div>

            <div className="executor-botoes-acao">
              <button type="button" className="btn btn-contorno" onClick={onFechar}>
                Cancelar
              </button>
              <button type="button" className="btn btn-primario btn-com-icone btn-destaque-entregar" onClick={handleFinalizar}>
                <CheckCircle2 size={18} />
                <span>Finalizar e Entregar Prova (20 Questões)</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="resultado-prova-area">
          <div className="resultado-card-destaque">
            <div className="resultado-badge-topo">
              <CheckCircle2 size={20} className="icone-inline" />
              <span>Resultado Oficial da Avaliação</span>
            </div>

            <div className="resultado-nota-box">
              <div className="nota-circular-valor">
                <span className="nota-grande">{resultadoProva.nota.toFixed(1)}</span>
                <span className="nota-maxima">/ 10.0</span>
              </div>
              <div className="resultado-info-texto">
                <h3>
                  {resultadoProva.nota >= 9.0
                    ? "Excelente Aproveitamento! 🏆"
                    : resultadoProva.nota >= 7.0
                    ? "Parabéns! Aluno Aprovado! 🎓"
                    : "Necessita Recuperação ⚠️"}
                </h3>
                <p>
                  Você acertou <strong>{resultadoProva.acertos}</strong> de{" "}
                  <strong>{resultadoProva.total} questões</strong> ({resultadoProva.percentual}% de aproveitamento).
                </p>
                <div className="alerta-historico-preenchido">
                  <CheckCircle2 size={17} className="icone-inline text-sucesso" />
                  <span>
                    <strong>Histórico Escolar Preenchido:</strong> A nota de{" "}
                    <strong>{resultadoProva.nota.toFixed(1)}</strong> na disciplina{" "}
                    <strong>{resultadoProva.disciplinaTitulo}</strong> foi registrada no seu histórico acadêmico.
                  </span>
                </div>
              </div>
            </div>

            <div className="resultado-botoes-acao">
              <button
                className="btn btn-primario btn-com-icone"
                onClick={() => onRefazer(provaAtiva)}
              >
                <RotateCcw size={16} />
                <span>Refazer Esta Prova</span>
              </button>
              <button
                className="btn btn-secundario btn-com-icone"
                onClick={() => setMostrarGabaritoLocal(!mostrarGabaritoLocal)}
              >
                <BookOpen size={16} />
                <span>{mostrarGabaritoLocal ? "Ocultar Gabarito" : "Ver Gabarito Comentado"}</span>
              </button>
            </div>

            {mostrarGabaritoLocal && (
              <div className="gabarito-comentado-secao">
                <h3>Gabarito Comentado com Fundamentação nas Apostilas</h3>
                <div className="lista-gabarito-itens">
                  {resultadoProva.gabarito.map((q, i) => (
                    <div
                      key={q.id}
                      className={`gabarito-item-card ${q.acertou ? "gabarito-acertou" : "gabarito-errou"}`}
                    >
                      <div className="gabarito-item-topo">
                        <span className="gabarito-num">
                          Questão {i + 1} ({q.tipo === "certo_errado" ? "Certo ou Errado" : "Múltipla Escolha"})
                        </span>
                        <span className={`badge-status-sm ${q.acertou ? "status-concluído" : "status-recuperação"}`}>
                          {q.acertou ? "✓ Você Acertou" : "✗ Você Errou"}
                        </span>
                      </div>
                      <p className="gabarito-enunciado">{q.enunciado}</p>

                      <div className="gabarito-respostas-comparacao">
                        <div>
                          <strong>Sua Resposta:</strong>{" "}
                          <span>
                            {q.tipo === "certo_errado"
                              ? q.respostaDada || "Não respondida"
                              : q.respostaDada !== undefined
                              ? `${["A", "B", "C", "D"][Number(q.respostaDada)]} ) ${q.opcoes?.[Number(q.respostaDada)]}`
                              : "Não respondida"}
                          </span>
                        </div>
                        <div>
                          <strong>Resposta Correta:</strong>{" "}
                          <span className="text-sucesso">
                            {q.tipo === "certo_errado"
                              ? q.respostaCorreta
                              : `${["A", "B", "C", "D"][Number(q.respostaCorreta)]} ) ${q.opcoes?.[Number(q.respostaCorreta)]}`}
                          </span>
                        </div>
                      </div>

                      <div className="gabarito-explicacao">
                        <strong>Justificativa da Apostila:</strong> {q.explicacao}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}