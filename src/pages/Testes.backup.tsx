import { useState, useEffect } from "react";
import { alunosAvaliacoesIniciais } from "../data/content";
import { provasDisciplinas } from "../data/provasData";
import { useAuth } from "../context/AuthContext";
import {
  obterHistoricoEscolar,
  salvarResultadoProva,
  listarAlunosSaaS,
  isSupabaseConfigured,
} from "../services/supabaseClient.js";
import DiplomaFaculdade from "../components/DiplomaFaculdade.jsx";
import {
  FileCheck2,
  GraduationCap,
  School,
  Award,
  X,
  Sparkles,
  FileQuestion,
  Clock,
  BarChart3,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  MessageSquareQuote,
  FileEdit,
  Save,
  PlayCircle,
  ScrollText,
  Printer,
  RotateCcw,
  Check,
  Building2,
  ShieldCheck,
  BookOpen,
  FileBadge,
  User2,
} from "lucide-react";

export default function Testes() {
  const { usuario, matricula, pagamentoConfirmado } = useAuth();
  // "testes" | "historico" | "aluno" | "professor"
  const [abaAtiva, setAbaAtiva] = useState(() => {
    const qs = new URLSearchParams(window.location.search);
    return qs.get("tab") === "historico" ? "historico" : "testes";
  });

  // Histórico Escolar Oficial das Disciplinas SEBITAN
  const [historicoEscolar, setHistoricoEscolar] = useState(() => {
    const salvo = localStorage.getItem("teologia_historico_escolar");
    const base = provasDisciplinas.map((p) => ({
      id: p.id,
      codigo: p.codigo,
      disciplina: p.titulo,
      modulo: p.modulo,
      cargaHoraria: p.cargaHoraria,
      nota: null,
      acertos: "-",
      situacao: "A Cursar",
      dataConclusao: "-",
      frequencia: "100%",
    }));

    if (salvo) {
      try {
        const parsed = JSON.parse(salvo);
        return base.map((b) => {
          const match = parsed.find((p) => p.id === b.id || p.codigo === b.codigo);
          return match ? { ...b, ...match } : b;
        });
      } catch (e) {
        console.error(e);
      }
    }
    return base;
  });

  // Alunos e avaliações do painel tutor
  const [alunos, setAlunos] = useState(() => {
    const salvo = localStorage.getItem("teologia_avaliacoes_alunos");
    return salvo ? JSON.parse(salvo) : alunosAvaliacoesIniciais;
  });

  // Estado do Executor Interativo de Provas
  const [provaAtiva, setProvaAtiva] = useState(null); // objeto da disciplina aberta
  const [respostasUsuario, setRespostasUsuario] = useState({}); // { [questaoId]: valor }
  const [resultadoProva, setResultadoProva] = useState(null); // { nota, acertos, percentual, gabarito }
  const [mostrarGabarito, setMostrarGabarito] = useState(false);

  // Modal / Edição de Nota pelo Tutor
  const [alunoSelecionado, setAlunoSelecionado] = useState(null);
  const [testeEditando, setTesteEditando] = useState(null);
  const [novaNota, setNovaNota] = useState("");
  const [novoFeedback, setNovoFeedback] = useState("");
  const [novoStatus, setNovoStatus] = useState("Concluído");

  const [mensagemSucesso, setMensagemSucesso] = useState("");

  useEffect(() => {
    localStorage.setItem("teologia_historico_escolar", JSON.stringify(historicoEscolar));
  }, [historicoEscolar]);

  useEffect(() => {
    localStorage.setItem("teologia_avaliacoes_alunos", JSON.stringify(alunos));
  }, [alunos]);

  // Sincronização em Nuvem via Supabase (SaaS)
  useEffect(() => {
    if (usuario?.id) {
      obterHistoricoEscolar(usuario.id).then((dados) => {
        if (dados && dados.length > 0) {
          setHistoricoEscolar(dados);
        }
      });
    }
  }, [usuario?.id]);

  useEffect(() => {
    if (abaAtiva === "professor") {
      listarAlunosSaaS().then((lista) => {
        if (lista && lista.length > 0) {
          // Atualiza lista se houver dados de perfis
          setAlunos((prev) => {
            const emailsExistentes = new Set(prev.map((p) => p.email.toLowerCase()));
            const novos = lista
              .filter((l) => !emailsExistentes.has(l.email.toLowerCase()))
              .map((l, i) => ({
                id: 500 + i,
                nome: l.nome_completo || l.email,
                email: l.email,
                turma: "Turma Geral - SEBITAN",
                progresso: l.progresso_medio || 20,
                media: l.media_geral || 7.5,
                avaliacoes: [],
              }));
            return [...novos, ...prev];
          });
        }
      });
    }
  }, [abaAtiva]);

  // Aluno logado atual
  const alunoLogado = alunos.find(
    (a) => a.email.toLowerCase() === (usuario?.email || "").toLowerCase()
  ) || {
    id: 101,
    nome: usuario?.nome || "Aluno SEBITAN",
    email: usuario?.email || "aluno@sebitan.com.br",
    turma: "Turma Alfa - 2026",
    progresso: 60,
    media: 9.0,
    avaliacoes: [],
  };

  // Matrícula e dados do certificado - vêm da matrícula oficial (nome completo, telefone, email, data nascimento)
  const { assinaturas } = useAuth();
  const matriculaAluno = matricula?.matricula || `SEB-2026-${String(usuario?.id || 101).padStart(4, "0")}`;
  const dadosCertificado = matricula ? {
    nome: matricula.nomeCompleto,
    telefone: matricula.telefone,
    email: matricula.email,
    dataNascimento: matricula.dataNascimento,
    matricula: matricula.matricula,
  } : {
    nome: alunoLogado.nome,
    telefone: "-",
    email: alunoLogado.email,
    dataNascimento: "-",
    matricula: matriculaAluno,
  };

  // Métricas do Histórico Escolar
  const disciplinasConcluidas = historicoEscolar.filter((d) => d.nota !== null);
  const totalHorasCursadas = disciplinasConcluidas.reduce((acc, d) => acc + d.cargaHoraria, 0);
  const totalHorasCurso = historicoEscolar.reduce((acc, d) => acc + d.cargaHoraria, 0);
  const mediaHistorico =
    disciplinasConcluidas.length > 0
      ? Number(
          (
            disciplinasConcluidas.reduce((acc, d) => acc + d.nota, 0) /
            disciplinasConcluidas.length
          ).toFixed(1)
        )
      : 0;

  // Iniciar Prova
  const iniciarProva = (disciplina) => {
    setProvaAtiva(disciplina);
    setRespostasUsuario({});
    setResultadoProva(null);
    setMostrarGabarito(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Selecionar resposta
  const marcarResposta = (questaoId, valor) => {
    setRespostasUsuario((prev) => ({
      ...prev,
      [questaoId]: valor,
    }));
  };

  // Submeter Prova e Preencher Histórico Escolar
  const finalizarProva = () => {
    if (!provaAtiva) return;

    let totalAcertos = 0;
    const gabarito = provaAtiva.questoes.map((q) => {
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

    const notaCalculada = Number(((totalAcertos / provaAtiva.questoes.length) * 10).toFixed(1));
    const percentual = Math.round((totalAcertos / provaAtiva.questoes.length) * 100);
    const dataAtual = new Date().toLocaleDateString("pt-BR");
    const situacaoFinal = notaCalculada >= 7.0 ? "Aprovado" : "Recuperação";

    const resultado = {
      disciplinaId: provaAtiva.id,
      disciplinaTitulo: provaAtiva.titulo,
      codigo: provaAtiva.codigo,
      nota: notaCalculada,
      acertos: totalAcertos,
      total: provaAtiva.questoes.length,
      percentual,
      data: dataAtual,
      situacao: situacaoFinal,
      gabarito,
    };

    setResultadoProva(resultado);

    // 1. Atualizar e Preencher o Histórico Escolar
    setHistoricoEscolar((prev) =>
      prev.map((d) => {
        if (d.id === provaAtiva.id || d.codigo === provaAtiva.codigo) {
          return {
            ...d,
            nota: notaCalculada,
            acertos: `${totalAcertos}/${provaAtiva.questoes.length}`,
            situacao: situacaoFinal,
            dataConclusao: dataAtual,
            frequencia: "100%",
          };
        }
        return d;
      })
    );

    // Salva no Supabase (Nuvem SaaS)
    if (usuario?.id) {
      salvarResultadoProva(usuario.id, {
        disciplinaId: provaAtiva.id,
        tituloDisciplina: provaAtiva.titulo,
        modulo: provaAtiva.modulo,
        codigo: provaAtiva.codigo,
        cargaHoraria: provaAtiva.cargaHoraria,
        nota: notaCalculada,
        acertos: totalAcertos,
        totalQuestoes: provaAtiva.questoes.length,
        situacao: situacaoFinal,
        respostas: Object.entries(respostasUsuario).map(([qId, resp]) => ({
          questaoId: qId,
          respostaEscolhida: resp,
        })),
      });
    }

    // 2. Atualizar no painel do aluno e do professor
    setAlunos((prevAlunos) =>
      prevAlunos.map((a) => {
        if (a.email.toLowerCase() === (usuario?.email || "").toLowerCase()) {
          const outrasAvs = (a.avaliacoes || []).filter(
            (av) => av.testeTitulo !== provaAtiva.titulo
          );
          const novaAv = {
            testeId: provaAtiva.id,
            testeTitulo: provaAtiva.titulo,
            nota: notaCalculada,
            acertos: `${totalAcertos}/${provaAtiva.questoes.length}`,
            status: "Concluído",
            data: dataAtual,
            feedback:
              notaCalculada >= 9.0
                ? "Desempenho de excelência acadêmica na prova oficial do SEBITAN. Parabéns!"
                : notaCalculada >= 7.0
                ? "Aluno aprovado na prova oficial com bom domínio dos conceitos da apostila."
                : "Nota abaixo da média mínima 7.0. Recomendamos revisar o material e refazer a avaliação.",
          };
          const listaAtualizada = [novaAv, ...outrasAvs];
          const notasValidas = listaAtualizada
            .map((av) => av.nota)
            .filter((n) => typeof n === "number");
          const mediaAtualizada =
            notasValidas.length > 0
              ? Number((notasValidas.reduce((a, b) => a + b, 0) / notasValidas.length).toFixed(1))
              : notaCalculada;

          return {
            ...a,
            media: mediaAtualizada,
            avaliacoes: listaAtualizada,
          };
        }
        return a;
      })
    );

    setMensagemSucesso(
      `Prova finalizada com Nota ${notaCalculada.toFixed(1)}! Seu Histórico Escolar foi preenchido com sucesso.`
    );
    setTimeout(() => setMensagemSucesso(""), 4500);
  };

  // Edição pelo Tutor
  const salvarAvaliacaoTutor = (e) => {
    e.preventDefault();
    if (!alunoSelecionado || !testeEditando) return;

    setAlunos((prevAlunos) =>
      prevAlunos.map((a) => {
        if (a.id === alunoSelecionado.id) {
          const novasAvaliacoes = a.avaliacoes.map((av) => {
            if (av.testeId === testeEditando.testeId) {
              return {
                ...av,
                nota: novaNota !== "" ? parseFloat(novaNota) : null,
                status: novoStatus,
                feedback: novoFeedback,
                data: new Date().toLocaleDateString("pt-BR"),
              };
            }
            return av;
          });

          const notasValidas = novasAvaliacoes
            .map((av) => av.nota)
            .filter((n) => typeof n === "number" && !isNaN(n));
          const novaMedia =
            notasValidas.length > 0
              ? Number(
                  (
                    notasValidas.reduce((acc, curr) => acc + curr, 0) /
                    notasValidas.length
                  ).toFixed(1)
                )
              : 0;

          return {
            ...a,
            media: novaMedia,
            avaliacoes: novasAvaliacoes,
          };
        }
        return a;
      })
    );

    setTesteEditando(null);
    setMensagemSucesso("Avaliação atualizada com sucesso!");
    setTimeout(() => setMensagemSucesso(""), 3500);
  };

  const abrirEdicaoTeste = (aluno, avaliacao) => {
    setAlunoSelecionado(aluno);
    setTesteEditando(avaliacao);
    setNovaNota(avaliacao.nota !== null ? String(avaliacao.nota) : "");
    setNovoFeedback(avaliacao.feedback || "");
    setNovoStatus(avaliacao.status || "Concluído");
  };

  return (
    <div className="testes-container">
      {/* Cabeçalho */}
      <section className="hero-testes no-print">
        <div className="hero-testes-topo-marca">
          <img src="/logo-sebitan.png" alt="SEBITAN" className="hero-testes-logo-img" />
          <div className="hero-badge">
            <Award size={15} className="icone-inline" /> SEBITAN • Seminário Bíblico e Teológico de Ananindeua
          </div>
        </div>
        <h1>Ambiente de Provas & Histórico Escolar Oficial</h1>
        <p>
          Provas avaliativas de 10 questões (5 de Certo ou Errado e 5 de Múltipla Escolha - Nível Médio),
          cálculo imediato de notas e preenchimento automático do Histórico Escolar Acadêmico.
        </p>
      </section>

      {mensagemSucesso && (
        <div className="alerta-sucesso no-print">
          <CheckCircle2 size={18} className="icone-inline" />
          <span>{mensagemSucesso}</span>
        </div>
      )}

      {/* Navegação de Abas */}
      <div className="testes-abas no-print">
        <button
          className={`btn-aba ${abaAtiva === "testes" ? "btn-aba-ativo" : ""}`}
          onClick={() => {
            setAbaAtiva("testes");
            setProvaAtiva(null);
          }}
        >
          <FileCheck2 size={18} className="aba-icone" />
          <span>Provas & Avaliações</span>
        </button>

        <button
          className={`btn-aba ${abaAtiva === "historico" ? "btn-aba-ativo" : ""}`}
          onClick={() => {
            setAbaAtiva("historico");
            setProvaAtiva(null);
          }}
        >
          <ScrollText size={18} className="aba-icone" />
          <span>📜 Histórico Escolar Oficial</span>
        </button>

        <button
          className={`btn-aba ${abaAtiva === "aluno" ? "btn-aba-ativo" : ""}`}
          onClick={() => {
            setAbaAtiva("aluno");
            setProvaAtiva(null);
          }}
        >
          <GraduationCap size={18} className="aba-icone" />
          <span>Meu Desempenho ({alunoLogado.nome.split(" ")[0]})</span>
        </button>

        <button
          className={`btn-aba ${abaAtiva === "professor" ? "btn-aba-ativo" : ""}`}
          onClick={() => {
            setAbaAtiva("professor");
            setProvaAtiva(null);
          }}
        >
          <School size={18} className="aba-icone" />
          <span>Painel do Docente / Gestão</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* EXECUTOR INTERATIVO DE PROVAS (10 QUESTÕES: 5 C/E + 5 MÚLTIPLA ESCOLHA) */}
      {/* ========================================================================= */}
      {provaAtiva && (
        <section className="card executor-prova-card no-print">
          <div className="executor-header">
            <div className="executor-titulo-area">
              <span className="modulo-tag">{provaAtiva.codigo}</span>
              <h2>{provaAtiva.titulo}</h2>
              <p className="texto-sub">
                {provaAtiva.modulo} • Carga Horária: {provaAtiva.cargaHoraria}h • Dificuldade: <strong>Nível Médio</strong>
              </p>
            </div>
            <button
              className="btn btn-contorno btn-sm btn-com-icone"
              onClick={() => setProvaAtiva(null)}
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
                  <strong>📋 Estrutura da Prova:</strong> 10 Questões (Questões 1 a 5: <em>Certo ou Errado</em>; Questões 6 a 10: <em>Múltipla Escolha</em>).
                </div>
                <div className="instrucao-item">
                  <strong>🎯 Critério de Avaliação:</strong> Cada questão vale 1,0 ponto (Total: 10,0). Média mínima para aprovação: <strong>7,0</strong>.
                </div>
                <div className="instrucao-item">
                  <strong>📜 Histórico Escolar:</strong> Ao concluir, sua nota será calculada e lançada automaticamente no seu Histórico Acadêmico.
                </div>
              </div>

              <div className="progresso-respostas-barra">
                <span>
                  Questões Respondidas: <strong>{Object.keys(respostasUsuario).length} / 10</strong>
                </span>
                <div className="barra-fundo">
                  <div
                    className="barra-preenchimento"
                    style={{
                      width: `${(Object.keys(respostasUsuario).length / 10) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              {/* LISTA DAS 10 QUESTÕES */}
              <div className="lista-questoes-prova">
                {/* PARTE 1: CERTO OU ERRADO (1 A 5) */}
                <div className="secao-questoes-bloco">
                  <div className="bloco-titulo-destaque">
                    <span className="bloco-numero">PARTE 1</span>
                    <h3>Questões 1 a 5: Marcar Certo ou Errado</h3>
                    <p>Leia atentamente cada afirmativa baseada na apostila oficial e marque Certo ou Errado.</p>
                  </div>

                  {provaAtiva.questoes.slice(0, 5).map((q, idx) => {
                    const respondida = respostasUsuario[q.id] !== undefined;
                    return (
                      <div key={q.id} className={`questao-card ${respondida ? "questao-marcada" : ""}`}>
                        <div className="questao-topo">
                          <span className="questao-badge">Questão {idx + 1} de 10</span>
                          <span className="questao-tipo-tag">Certo ou Errado</span>
                        </div>
                        <p className="questao-enunciado">{q.enunciado}</p>

                        <div className="botoes-certo-errado">
                          <button
                            type="button"
                            className={`btn-opcao-ce btn-certo ${
                              respostasUsuario[q.id] === "Certo" ? "opcao-ce-selecionada" : ""
                            }`}
                            onClick={() => marcarResposta(q.id, "Certo")}
                          >
                            <Check size={18} />
                            <span>Certo</span>
                          </button>
                          <button
                            type="button"
                            className={`btn-opcao-ce btn-errado ${
                              respostasUsuario[q.id] === "Errado" ? "opcao-ce-selecionada" : ""
                            }`}
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

                {/* PARTE 2: MÚLTIPLA ESCOLHA (6 A 10) */}
                <div className="secao-questoes-bloco">
                  <div className="bloco-titulo-destaque">
                    <span className="bloco-numero">PARTE 2</span>
                    <h3>Questões 6 a 10: Responder / Múltipla Escolha (Nível Médio)</h3>
                    <p>Selecione a alternativa correta que melhor responde ao questionamento acadêmico.</p>
                  </div>

                  {provaAtiva.questoes.slice(5, 10).map((q, idx) => {
                    const respondida = respostasUsuario[q.id] !== undefined;
                    return (
                      <div key={q.id} className={`questao-card ${respondida ? "questao-marcada" : ""}`}>
                        <div className="questao-topo">
                          <span className="questao-badge">Questão {idx + 6} de 10</span>
                          <span className="questao-tipo-tag">Múltipla Escolha</span>
                        </div>
                        <p className="questao-enunciado">{q.enunciado}</p>

                        <div className="opcoes-multipla-escolha">
                          {q.opcoes.map((opcao, oIdx) => {
                            const letras = ["A", "B", "C", "D"];
                            const selecionada = respostasUsuario[q.id] === oIdx;
                            return (
                              <label
                                key={oIdx}
                                className={`opcao-item ${selecionada ? "opcao-item-selecionada" : ""}`}
                              >
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

              {/* RODAPÉ DO EXECUTOR */}
              <div className="executor-rodape">
                <div className="executor-aviso-pendencias">
                  {Object.keys(respostasUsuario).length < 10 ? (
                    <span>
                      <AlertCircle size={16} className="icone-inline" /> Atenção: você respondeu{" "}
                      <strong>{Object.keys(respostasUsuario).length}</strong> de 10 questões. Pode enviar mesmo assim ou revisar.
                    </span>
                  ) : (
                    <span>
                      <CheckCircle2 size={16} className="icone-inline text-sucesso" /> Todas as 10 questões foram respondidas! Pronto para entregar.
                    </span>
                  )}
                </div>

                <div className="executor-botoes-acao">
                  <button
                    type="button"
                    className="btn btn-contorno"
                    onClick={() => setProvaAtiva(null)}
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    className="btn btn-primario btn-com-icone btn-destaque-entregar"
                    onClick={finalizarProva}
                  >
                    <CheckCircle2 size={18} />
                    <span>Finalizar e Entregar Prova</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* ========================================================= */
            /* TELA DE NOTA DO ALUNO E GABARITO COMENTADO */
            /* ========================================================= */
            <div className="resultado-prova-area">
              <div className="resultado-card-destaque">
                <div className="resultado-badge-topo">
                  <Award size={20} className="icone-inline" />
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
                    onClick={() => {
                      setAbaAtiva("historico");
                      setProvaAtiva(null);
                    }}
                  >
                    <ScrollText size={16} />
                    <span>Ver Meu Histórico Escolar Oficial</span>
                  </button>
                  <button
                    className="btn btn-contorno btn-com-icone"
                    onClick={() => iniciarProva(provaAtiva)}
                  >
                    <RotateCcw size={16} />
                    <span>Refazer Esta Prova</span>
                  </button>
                  <button
                    className="btn btn-secundario btn-com-icone"
                    onClick={() => setMostrarGabarito(!mostrarGabarito)}
                  >
                    <BookOpen size={16} />
                    <span>{mostrarGabarito ? "Ocultar Gabarito" : "Ver Gabarito Comentado"}</span>
                  </button>
                </div>
              </div>

              {/* GABARITO COMENTADO */}
              {mostrarGabarito && (
                <div className="gabarito-comentado-secao">
                  <h3>Gabarito Comentado com Fundamentação nas Apostilas SEBITAN</h3>
                  <div className="lista-gabarito-itens">
                    {resultadoProva.gabarito.map((q, i) => (
                      <div
                        key={q.id}
                        className={`gabarito-item-card ${
                          q.acertou ? "gabarito-acertou" : "gabarito-errou"
                        }`}
                      >
                        <div className="gabarito-item-topo">
                          <span className="gabarito-num">Questão {i + 1} ({q.tipo === "certo_errado" ? "Certo ou Errado" : "Múltipla Escolha"})</span>
                          <span
                            className={`badge-status-sm ${
                              q.acertou ? "status-concluído" : "status-recuperação"
                            }`}
                          >
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
                                ? `${["A", "B", "C", "D"][q.respostaDada]}) ${q.opcoes[q.respostaDada]}`
                                : "Não respondida"}
                            </span>
                          </div>
                          <div>
                            <strong>Resposta Correta:</strong>{" "}
                            <span className="text-sucesso">
                              {q.tipo === "certo_errado"
                                ? q.respostaCorreta
                                : `${["A", "B", "C", "D"][q.respostaCorreta]}) ${q.opcoes[q.respostaCorreta]}`}
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
          )}
        </section>
      )}

      {/* ========================================================================= */}
      {/* ABA 1: PROVAS DISPONÍVEIS & QUESTIONÁRIOS */}
      {/* ========================================================================= */}
      {abaAtiva === "testes" && !provaAtiva && (
        <section className="secao-testes no-print">
          {/* SEÇÃO PRINCIPAL: AS 5 PROVAS OFICIAIS SEBITAN */}
          <div className="secao-header">
            <div>
              <span className="badge-destaque-interno">
                <Sparkles size={14} className="icone-inline" /> Formato Oficial Solicitado
              </span>
              <h2>Provas Oficiais das Disciplinas SEBITAN</h2>
              <p className="texto-sub">
                Cada prova contém <strong>10 questões de nível médio</strong> (5 de Certo ou Errado + 5 de Múltipla Escolha).
                Ao concluir, a nota é calculada na hora e alimenta seu <strong>Histórico Escolar Oficial</strong>.
              </p>
            </div>
          </div>

          <div className="grade-provas-oficiais">
            {provasDisciplinas.map((disciplina) => {
              const historicoItem = historicoEscolar.find((h) => h.id === disciplina.id);
              const jaConcluida = historicoItem && historicoItem.nota !== null;

              return (
                <div key={disciplina.id} className="card card-prova-oficial">
                  <div className="prova-topo-info">
                    <span className="codigo-tag">{disciplina.codigo}</span>
                    <span className="carga-tag">{disciplina.cargaHoraria} Horas</span>
                    {jaConcluida ? (
                      <span className="badge-status status-concluído">
                        Nota: {historicoItem.nota.toFixed(1)} ({historicoItem.situacao})
                      </span>
                    ) : (
                      <span className="badge-status status-pendente">A Cursar</span>
                    )}
                  </div>

                  <h3>{disciplina.titulo}</h3>
                  <div className="prova-modulo-texto">{disciplina.modulo}</div>
                  <p className="teste-descricao">{disciplina.descricao}</p>

                  <div className="prova-metadados">
                    <span>
                      <FileQuestion size={15} className="icone-inline" /> 10 Questões (5 C/E + 5 Múltipla Escolha)
                    </span>
                    <span>
                      <Clock size={15} className="icone-inline" /> {disciplina.duracaoMinutos} Minutos
                    </span>
                    <span>
                      <ShieldCheck size={15} className="icone-inline" /> Nível Médio
                    </span>
                  </div>

                  <div className="teste-acoes">
                    <button
                      type="button"
                      className="btn btn-primario btn-com-icone btn-iniciar-prova"
                      onClick={() => iniciarProva(disciplina)}
                    >
                      <PlayCircle size={16} />
                      <span>{jaConcluida ? "Refazer Prova Oficial" : "Iniciar Prova Online (10 Questões)"}</span>
                    </button>
                    {jaConcluida && (
                      <button
                        type="button"
                        className="btn btn-contorno btn-sm btn-com-icone"
                        onClick={() => setAbaAtiva("historico")}
                        title="Ver lançamento no histórico"
                      >
                        <ScrollText size={15} />
                        <span>Histórico</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* ABA 2: HISTÓRICO ESCOLAR OFICIAL DO ALUNO (DOCUMENTO FORMAL SEBITAN)      */}
      {/* ========================================================================= */}
      {abaAtiva === "historico" && (
        <section className="secao-historico">
          <div className="historico-acoes-topo no-print">
            <div>
              <h2>Histórico Escolar Oficial & Rendimento Acadêmico</h2>
              <p className="texto-sub">
                Documento de certificação curricular expedido pela Secretaria de Registro Acadêmico do SEBITAN.
              </p>
            </div>
            <div className="botoes-historico-topo" style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button
                type="button"
                className="btn btn-primario btn-com-icone"
                onClick={() => window.print()}
              >
                <Printer size={16} />
                <span>Imprimir Histórico Escolar (PDF)</span>
              </button>
              <button
                type="button"
                className="btn btn-contorno btn-com-icone"
                onClick={() => { const el = document.getElementById("secao-certificado"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
              >
                <FileBadge size={16} />
                <span>Ver Certificado</span>
              </button>
            </div>
          </div>

          {/* DOCUMENTO FORMAL IMPRESSÍVEL DO HISTÓRICO ESCOLAR */}
          <div className="documento-historico-folha">
            {/* CABEÇALHO INSTITUCIONAL */}
            <div className="documento-cabecalho">
              <div className="documento-logo-emblema">
                <img src="/logo-sebitan.png" alt="SEBITAN" className="documento-logo-img" />
              </div>
              <div className="documento-instituicao-dados">
                <h3>SEBITAN – Seminário Bíblico e Teológico DE ANANINDEUA</h3>
                <h4>TEOLOGIA ACESSÍVEL – DEPARTAMENTO DE EDUCAÇÃO TEOLÓGICA</h4>
                <p>Registro de Entidade de Ensino Religioso e Formação Ministerial Livre</p>
                <div className="documento-titulo-faixa">
                  HISTÓRICO ESCOLAR OFICIAL DO ALUNO
                </div>
              </div>
            </div>

            {/* DADOS DO ALUNO E DO CURSO - dados vêm da matrícula oficial */}
            <div className="documento-dados-grid">
              <div className="d-campo">
                <span className="d-rotulo">Nome do Aluno:</span>
                <span className="d-valor d-valor-destaque">{dadosCertificado.nome}</span>
              </div>
              <div className="d-campo">
                <span className="d-rotulo">Registro de Matrícula:</span>
                <span className="d-valor">{dadosCertificado.matricula}</span>
              </div>
              <div className="d-campo">
                <span className="d-rotulo">E-mail:</span>
                <span className="d-valor">{dadosCertificado.email}</span>
              </div>
              <div className="d-campo">
                <span className="d-rotulo">Telefone:</span>
                <span className="d-valor">{dadosCertificado.telefone}</span>
              </div>
              <div className="d-campo">
                <span className="d-rotulo">Data de Nasc.:</span>
                <span className="d-valor">{dadosCertificado.dataNascimento && dadosCertificado.dataNascimento !== "-" ? new Date(dadosCertificado.dataNascimento+"T00:00:00").toLocaleDateString("pt-BR") : "-"}</span>
              </div>
              <div className="d-campo">
                <span className="d-rotulo">Curso:</span>
                <span className="d-valor">Bacharelado Livre em Teologia & Ministério Pastoral</span>
              </div>
              <div className="d-campo">
                <span className="d-rotulo">Turma / Período:</span>
                <span className="d-valor">{alunoLogado.turma} • 2026</span>
              </div>
              <div className="d-campo">
                <span className="d-rotulo">Pagamento:</span>
                <span className="d-valor">{pagamentoConfirmado ? "Confirmado - 10x R$ 14,90" : "Pendente"}</span>
              </div>
              <div className="d-campo">
                <span className="d-rotulo">Situação Cadastral:</span>
                <span className="d-valor text-sucesso font-bold">{pagamentoConfirmado ? "Regular / Cursando" : "Matrícula pendente de pagamento"}</span>
              </div>
              <div className="d-campo">
                <span className="d-rotulo">Data de Emissão:</span>
                <span className="d-valor">{new Date().toLocaleDateString("pt-BR")}</span>
              </div>
              <div className="d-campo">
                <span className="d-rotulo">Autenticação Digital:</span>
                <span className="d-valor font-mono">SEB-DOC-2026-9A8C</span>
              </div>
            </div>

            {/* TABELA DE DISCIPLINAS E NOTAS */}
            <div className="tabela-historico-wrapper">
              <table className="tabela-historico">
                <thead>
                  <tr>
                    <th>Código</th>
                    <th>Disciplina / Matéria</th>
                    <th>C.H.</th>
                    <th>Avaliação Oficial</th>
                    <th>Nota Final</th>
                    <th>Freq.</th>
                    <th>Situação</th>
                    <th>Data</th>
                    <th className="no-print">Ação</th>
                  </tr>
                </thead>
                <tbody>
                  {historicoEscolar.map((item) => {
                    const isAprovado = item.nota !== null && item.nota >= 7.0;
                    const isRecuperacao = item.nota !== null && item.nota < 7.0;
                    const isPendente = item.nota === null;

                    return (
                      <tr key={item.id}>
                        <td className="font-mono font-bold">{item.codigo}</td>
                        <td className="col-disciplina">
                          <strong>{item.disciplina}</strong>
                          <small className="d-block texto-sub">{item.modulo}</small>
                        </td>
                        <td>{item.cargaHoraria}h</td>
                        <td>Prova (10 Questões)</td>
                        <td>
                          {item.nota !== null ? (
                            <strong className={isAprovado ? "text-sucesso" : "text-perigo"}>
                              {item.nota.toFixed(1)}
                            </strong>
                          ) : (
                            <span className="texto-sub">—</span>
                          )}
                        </td>
                        <td>{item.frequencia}</td>
                        <td>
                          {isAprovado && (
                            <span className="badge-status-sm status-concluído">Aprovado</span>
                          )}
                          {isRecuperacao && (
                            <span className="badge-status-sm status-recuperação">Recuperação</span>
                          )}
                          {isPendente && (
                            <span className="badge-status-sm status-pendente">A Cursar</span>
                          )}
                        </td>
                        <td>{item.dataConclusao}</td>
                        <td className="no-print">
                          <button
                            type="button"
                            className="btn btn-contorno btn-sm btn-com-icone"
                            onClick={() => {
                              const matchProva = provasDisciplinas.find((p) => p.id === item.id);
                              if (matchProva) iniciarProva(matchProva);
                            }}
                          >
                            <PlayCircle size={14} />
                            <span>{item.nota !== null ? "Refazer" : "Fazer Prova"}</span>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* QUADRO DE RESUMO DE RENDIMENTO ACADÊMICO */}
            <div className="documento-resumo-quadro">
              <div className="resumo-item">
                <span className="resumo-titulo">Carga Horária Cumprida</span>
                <span className="resumo-valor">
                  {totalHorasCursadas} / {totalHorasCurso} Horas
                </span>
                <small className="texto-sub">
                  ({Math.round((totalHorasCursadas / (totalHorasCurso || 1)) * 100)}% do currículo básico)
                </small>
              </div>

              <div className="resumo-item">
                <span className="resumo-titulo">Coeficiente de Rendimento (CR)</span>
                <span className="resumo-valor resumo-valor-ouro">
                  {mediaHistorico > 0 ? mediaHistorico.toFixed(1) : "—"}
                </span>
                <small className="texto-sub">Média ponderada das avaliações</small>
              </div>

              <div className="resumo-item">
                <span className="resumo-titulo">Disciplinas Concluídas</span>
                <span className="resumo-valor">
                  {disciplinasConcluidas.length} de {historicoEscolar.length}
                </span>
                <small className="texto-sub">
                  {disciplinasConcluidas.length === historicoEscolar.length
                    ? "Todas as matérias concluídas"
                    : `${historicoEscolar.length - disciplinasConcluidas.length} matérias pendentes`}
                </small>
              </div>

              <div className="resumo-item">
                <span className="resumo-titulo">Parecer Acadêmico</span>
                <span className="resumo-valor text-sucesso" style={{ fontSize: "1.05rem" }}>
                  {disciplinasConcluidas.length === historicoEscolar.length && mediaHistorico >= 7.0
                    ? "Apto para Diplomação 🎓"
                    : "Em Integralização Curricular"}
                </span>
                <small className="texto-sub">SEBITAN Registro Geral</small>
              </div>
            </div>

            {/* CHANCELA, ASSINATURAS E REGISTRO - com imagens enviadas no formulário */}
            <div className="documento-assinaturas-area">
              <div className="assinatura-bloco">
                {assinaturas?.coordenador && <img src={assinaturas.coordenador} alt="Assinatura Coordenador" className="assinatura-img" />}
                <div className="linha-assinatura"></div>
                <strong>Prof. Me. Coordenador Pedagógico</strong>
                <span>Coordenação de Educação Teológica SEBITAN</span>
              </div>

              <div className="assinatura-bloco">
                <div className="carimbo-digital-box">
                  <img src="/logo-sebitan.png" alt="SEBITAN" className="carimbo-digital-logo-img" />
                  <span>SEBITAN AUTÊNTICO</span>
                  <small>Verificado Digitalmente</small>
                </div>
              </div>

              <div className="assinatura-bloco">
                {assinaturas?.secretaria && <img src={assinaturas.secretaria} alt="Assinatura Secretária" className="assinatura-img" />}
                <div className="linha-assinatura"></div>
                <strong>Secretaria Geral de Registros Acadêmicos</strong>
                <span>Seminário Bíblico e Teológico de Ananindeua</span>
              </div>
            </div>

            <div className="documento-rodape-legal">
              Este histórico escolar tem validade acadêmica interna nos termos dos estatutos educacionais do SEBITAN. Documento assinado eletronicamente com chave pública institucional.
            </div>
          </div>

          {/* DIPLOMA UNIVERSITÁRIO PROFISSIONAL ESTILO FACULDADE DE ENSINO */}
          <div id="secao-certificado" style={{ marginTop: 32 }}>
            <DiplomaFaculdade
              dadosAluno={dadosCertificado}
              totalHoras={totalHorasCurso}
              mediaGeral={mediaHistorico}
              disciplinasConcluidas={disciplinasConcluidas.length}
              totalDisciplinas={historicoEscolar.length}
              pagamentoConfirmado={pagamentoConfirmado}
              assinaturas={assinaturas}
            />
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* ABA 3: MEU AMBIENTE DE AVALIAÇÃO (ALUNO) */}
      {/* ========================================================================= */}
      {abaAtiva === "aluno" && (
        <section className="secao-aluno no-print">
          <div className="card painel-aluno-header">
            <div className="aluno-info-principal">
              <div className="aluno-avatar">
                {alunoLogado.nome.charAt(0).toUpperCase()}
              </div>
              <div>
                <h2>{alunoLogado.nome}</h2>
                <p className="texto-sub">
                  {alunoLogado.email} • {alunoLogado.turma} • Matrícula: {matriculaAluno}
                </p>
              </div>
            </div>

            <div className="metricas-aluno">
              <div className="metrica-item">
                <div className="metrica-cabecalho">
                  <Award size={18} className="metrica-icone metrica-icone-ouro" />
                  <span className="metrica-valor">
                    {mediaHistorico > 0 ? mediaHistorico.toFixed(1) : alunoLogado.media}
                  </span>
                </div>
                <span className="metrica-rotulo">Média do Histórico</span>
              </div>
              <div className="metrica-item">
                <div className="metrica-cabecalho">
                  <CheckCircle2 size={18} className="metrica-icone metrica-icone-verde" />
                  <span className="metrica-valor">
                    {disciplinasConcluidas.length} / {historicoEscolar.length}
                  </span>
                </div>
                <span className="metrica-rotulo">Disciplinas Feitas</span>
              </div>
              <div className="metrica-item">
                <div className="metrica-cabecalho">
                  <TrendingUp size={18} className="metrica-icone metrica-icone-azul" />
                  <span className="metrica-valor">
                    {Math.round((disciplinasConcluidas.length / historicoEscolar.length) * 100)}%
                  </span>
                </div>
                <span className="metrica-rotulo">Progresso do Curso</span>
              </div>
            </div>
          </div>

          <div className="secao-header" style={{ marginTop: "24px" }}>
            <h3>Histórico de Avaliações & Pareceres do Docente</h3>
            <button
              className="btn btn-contorno btn-sm btn-com-icone"
              onClick={() => setAbaAtiva("historico")}
            >
              <ScrollText size={15} />
              <span>Ver Histórico Escolar Completo</span>
            </button>
          </div>

          <div className="lista-avaliacoes-aluno">
            {alunoLogado.avaliacoes.map((av, idx) => (
              <div key={idx} className="card avaliacao-card">
                <div className="avaliacao-header">
                  <div>
                    <h4>{av.testeTitulo}</h4>
                    <small className="texto-sub">Data de Entrega: {av.data}</small>
                  </div>
                  <div className="avaliacao-badge-area">
                    <span
                      className={`badge-status status-${av.status
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {av.status}
                    </span>
                    {av.nota !== null && (
                      <span className="nota-destaque">
                        Nota: <strong>{av.nota.toFixed(1)}</strong>
                      </span>
                    )}
                  </div>
                </div>

                <div className="avaliacao-feedback">
                  <strong>
                    <MessageSquareQuote size={16} className="icone-inline" /> Parecer Pedagógico do Docente:
                  </strong>
                  <p>{av.feedback || "Aguardando avaliação do tutor."}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* ABA 4: PAINEL DO TUTOR / GESTÃO DE ALUNOS */}
      {/* ========================================================================= */}
      {abaAtiva === "professor" && (
        <section className="secao-professor no-print">
          <div className="secao-header">
            <div>
              <h2>Gestão Pedagógica & Avaliação de Alunos</h2>
              <p className="texto-sub">
                Acompanhe o rendimento individual, lance notas e escreva feedbacks para cada aluno.
              </p>
            </div>
          </div>

          <div className="grade-alunos-gestao">
            {alunos.map((aluno) => (
              <div key={aluno.id} className="card card-aluno-gestao">
                <div className="gestao-aluno-topo">
                  <div className="aluno-avatar-menor">
                    {aluno.nome.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h4>{aluno.nome}</h4>
                    <small className="texto-sub">{aluno.email}</small>
                    <div className="turma-tag">{aluno.turma}</div>
                  </div>
                  <div className="gestao-media">
                    <span className="media-numero">{aluno.media}</span>
                    <small>Média</small>
                  </div>
                </div>

                <div className="gestao-testes-lista">
                  <h5>Testes & Avaliações:</h5>
                  {aluno.avaliacoes.map((av, i) => (
                    <div key={i} className="gestao-teste-item">
                      <div className="gestao-teste-info">
                        <strong>{av.testeTitulo}</strong>
                        <span
                          className={`badge-status-sm status-${av.status
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                        >
                          {av.status}
                        </span>
                        {av.nota !== null ? (
                          <span className="gestao-nota">Nota: {av.nota}</span>
                        ) : (
                          <span className="gestao-sem-nota">Sem nota</span>
                        )}
                      </div>
                      <button
                        className="btn btn-contorno btn-sm btn-com-icone"
                        onClick={() => abrirEdicaoTeste(aluno, av)}
                      >
                        <FileEdit size={14} />
                        <span>Avaliar / Lançar Nota</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Modal de Avaliação de Aluno */}
          {testeEditando && alunoSelecionado && (
            <div className="modal-fundo" onClick={() => setTesteEditando(null)}>
              <div className="modal-conteudo" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                  <h3>
                    <FileEdit size={18} className="icone-inline" /> Lançar Avaliação: {alunoSelecionado.nome}
                  </h3>
                  <button
                    className="modal-fechar"
                    onClick={() => setTesteEditando(null)}
                    aria-label="Fechar modal"
                  >
                    <X size={18} />
                  </button>
                </div>
                <p className="texto-sub">
                  Disciplina / Teste: <strong>{testeEditando.testeTitulo}</strong>
                </p>

                <form onSubmit={salvarAvaliacaoTutor} className="modal-form">
                  <div className="form-grupo">
                    <label>Status da Avaliação:</label>
                    <select
                      value={novoStatus}
                      onChange={(e) => setNovoStatus(e.target.value)}
                      className="campo-select"
                    >
                      <option value="Concluído">Concluído / Aprovado</option>
                      <option value="Em Correção">Em Correção / Em Análise</option>
                      <option value="Pendente">Pendente de Entrega</option>
                    </select>
                  </div>

                  <div className="form-grupo">
                    <label>Nota do Aluno (0 a 10):</label>
                    <input
                      type="number"
                      step="0.1"
                      min="0"
                      max="10"
                      value={novaNota}
                      onChange={(e) => setNovaNota(e.target.value)}
                      placeholder="Ex: 9.5"
                    />
                  </div>

                  <div className="form-grupo">
                    <label>Parecer / Feedback Pedagógico:</label>
                    <textarea
                      rows="4"
                      value={novoFeedback}
                      onChange={(e) => setNovoFeedback(e.target.value)}
                      placeholder="Escreva orientações acadêmicas, pontos fortes e recomendações teológicas para o aluno..."
                      className="campo-textarea"
                    ></textarea>
                  </div>

                  <div className="modal-botoes">
                    <button
                      type="button"
                      className="btn btn-contorno btn-com-icone"
                      onClick={() => setTesteEditando(null)}
                    >
                      <X size={16} />
                      <span>Cancelar</span>
                    </button>
                    <button type="submit" className="btn btn-primario btn-com-icone">
                      <Save size={16} />
                      <span>Salvar Avaliação</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
