import { useState, useEffect } from "react";
import { alunosAvaliacoesIniciais } from "../data/content";
import { provasDisciplinas } from "../data/provasData";
import { GRADE_CURRICULAR } from "../data/gradeCurricular";
import {
  getProgressoDisciplina,
  marcarProgresso,
  validarPermissaoProva,
  registrarResultadoProva,
  getTentativasHoje,
  getNotasDisciplina,
} from "../services/progressoEstudoService";
import { useAuth } from "../context/AuthContext";
import {
  obterHistoricoEscolar,
  salvarResultadoProva,
  listarAlunosSaaS,
} from "../services/supabaseClient";
import {
  FileCheck2,
  GraduationCap,
  School,
  Award,
  ScrollText,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import {
  ProvaExecutor,
  HistoricoEscolar,
  PainelAluno,
  PainelProfessor,
  GradeCurricular,
  ModalBloqueio,
} from "../components/testes";

export default function Testes() {
  const { usuario, matricula, pagamentoConfirmado, assinaturas } = useAuth();
  const podeGerenciarAvaliacoes = usuario?.role === "superadmin" || usuario?.role === "professor";
  const [abaAtiva, setAbaAtiva] = useState(() => {
    const qs = new URLSearchParams(window.location.search);
    return qs.get("tab") === "historico" ? "historico" : "testes";
  });

  const [historicoEscolar, setHistoricoEscolar] = useState(() => {
    const salvo = localStorage.getItem("teologia_historico_escolar");
    const base = GRADE_CURRICULAR.map((p) => {
      const notas = getNotasDisciplina(p.id);
      return {
        id: p.id,
        ordem: p.ordem,
        codigo: p.codigo,
        disciplina: p.titulo,
        modulo: p.modulo,
        cargaHoraria: p.cargaHoraria || 50,
        nota: notas.mediaFinal !== undefined ? notas.mediaFinal : null,
        acertos: "-",
        situacao: notas.situacaoFinal || "A Cursar",
        dataConclusao: "-",
        frequencia: "100%",
      };
    });

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

  const [alunos, setAlunos] = useState(() => {
    const salvo = localStorage.getItem("teologia_avaliacoes_alunos");
    return salvo ? JSON.parse(salvo) : alunosAvaliacoesIniciais;
  });

  const [provaAtiva, setProvaAtiva] = useState(null);
  const [tipoProvaAtiva, setTipoProvaAtiva] = useState("p1");
  const [disciplinaAtiva, setDisciplinaAtiva] = useState(null);
  const [modalBloqueio, setModalBloqueio] = useState(null);
  const [mensagemSucesso, setMensagemSucesso] = useState("");
  const [progressoTick, setProgressoTick] = useState(0);
  const [resultadoProva, setResultadoProva] = useState(null);
  const [mostrarGabarito, setMostrarGabarito] = useState(false);

  useEffect(() => {
    const onAtualizar = () => setProgressoTick((t) => t + 1);
    window.addEventListener("sebitan_progresso_atualizado", onAtualizar);
    window.addEventListener("sebitan_avaliacao_atualizada", onAtualizar);
    return () => {
      window.removeEventListener("sebitan_progresso_atualizado", onAtualizar);
      window.removeEventListener("sebitan_avaliacao_atualizada", onAtualizar);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("teologia_historico_escolar", JSON.stringify(historicoEscolar));
  }, [historicoEscolar]);

  useEffect(() => {
    localStorage.setItem("teologia_avaliacoes_alunos", JSON.stringify(alunos));
  }, [alunos]);

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
          setAlunos((prev) => {
            const emailsExistentes = new Set(prev.map((p) => p.email.toLowerCase()));
            const novos = lista
              .filter((l) => !emailsExistentes.has(l.email.toLowerCase()))
              .map((l, i) => ({
                id: 500 + i,
                nome: l.nome_completo || l.email,
                email: l.email,
                turma: "Turma Geral - Teologia Acessível",
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

  const alunoLogado = alunos.find(
    (a) => a.email.toLowerCase() === (usuario?.email || "").toLowerCase()
  ) || {
    id: 101,
    nome: usuario?.nome || "Aluno Teologia Acessível",
    email: usuario?.email || "aluno@teologiaacessivel.com.br",
    turma: "Turma Alfa - 2026",
    progresso: 60,
    media: 9.0,
    avaliacoes: [],
  };

  const matriculaAluno = matricula?.matricula || `SEB-2026-${String(usuario?.id || 101).padStart(4, "0")}`;

  const disciplinasConcluidas = historicoEscolar.filter((d) => d.nota !== null);
  const totalHorasCursadas = disciplinasConcluidas.reduce((acc, d) => acc + d.cargaHoraria, 0);
  const _totalHorasCurso = historicoEscolar.reduce((acc, d) => acc + d.cargaHoraria, 0);
  const mediaHistorico =
    disciplinasConcluidas.length > 0
      ? Number(
          (
            disciplinasConcluidas.reduce((acc, d) => acc + (d.nota || 0), 0) /
            disciplinasConcluidas.length
          ).toFixed(1)
        )
      : 0;

  const liberarTodasEtapas = (discId: string) => {
    marcarProgresso(discId, "pdf", true);
    marcarProgresso(discId, "audio", true);
    marcarProgresso(discId, "video", true);
  };

  const iniciarProva = (disciplina: { id: string }, tipoProva = "p1") => {
    const validacao = validarPermissaoProva(disciplina.id, tipoProva);

    if (!validacao.permitido) {
      setModalBloqueio({
        titulo: validacao.tituloBloqueio,
        mensagem: validacao.mensagem,
        bloqueio: validacao.bloqueio,
        disciplina,
        tipoProva,
        tentativasHoje: validacao.tentativasHoje,
      });
      return;
    }

    const discCompleta = provasDisciplinas.find((p) => p.id === disciplina.id) || disciplina;
    const provaSelecionada = tipoProva === "p2" ? discCompleta.prova2 : discCompleta.prova1;

    setDisciplinaAtiva(discCompleta);
    setTipoProvaAtiva(tipoProva);
    setProvaAtiva(provaSelecionada);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFinalizarProva = (resultado) => {
    const discResultado = registrarResultadoProva(disciplinaAtiva.id, tipoProvaAtiva, {
      nota: resultado.nota,
      acertos: resultado.acertos,
      total: resultado.total,
      data: resultado.data,
    });

    getTentativasHoje(disciplinaAtiva.id, tipoProvaAtiva);

    setHistoricoEscolar((prev) =>
      prev.map((d) => {
        if (d.id === disciplinaAtiva.id || d.codigo === disciplinaAtiva.codigo) {
          const novaNota = discResultado?.mediaFinal ?? resultado.nota;
          const novaSituacao = discResultado?.situacaoFinal ?? resultado.situacao;
          return {
            ...d,
            nota: novaNota,
            acertos: `${resultado.acertos}/${resultado.total}`,
            situacao: novaSituacao,
            dataConclusao: resultado.data,
            frequencia: "100%",
          };
        }
        return d;
      })
    );

    if (usuario?.id) {
      salvarResultadoProva(usuario.id, {
        disciplinaId: disciplinaAtiva.id,
        tituloDisciplina: `${disciplinaAtiva.titulo} (${tipoProvaAtiva.toUpperCase()})`,
        modulo: disciplinaAtiva.modulo,
        codigo: disciplinaAtiva.codigo,
        cargaHoraria: disciplinaAtiva.cargaHoraria || 50,
        nota: resultado.nota,
        acertos: resultado.acertos,
        totalQuestoes: resultado.total,
        situacao: resultado.situacao,
        respostas: Object.entries(resultado.gabarito || []).map(([qId, resp]) => ({
          questaoId: qId,
          respostaEscolhida: resp.respostaDada,
        })),
      });
    }

    setAlunos((prevAlunos) =>
      prevAlunos.map((a) => {
        if (a.email.toLowerCase() === (usuario?.email || "").toLowerCase()) {
          const outrasAvs = (a.avaliacoes || []).filter(
            (av) => av.testeTitulo !== provaAtiva.titulo
          );
          const novaAv = {
            testeId: provaAtiva.id,
            testeTitulo: provaAtiva.titulo,
            nota: resultado.nota,
            acertos: `${resultado.acertos}/${provaAtiva.questoes.length}`,
            status: "Concluído",
            data: resultado.data,
            feedback:
              resultado.nota >= 9.0
                ? "Desempenho de excelência acadêmica na prova oficial. Parabéns!"
                : resultado.nota >= 7.0
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
              : resultado.nota;

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
      `Prova finalizada com Nota ${resultado.nota.toFixed(1)}! Seu Histórico Escolar foi preenchido com sucesso.`
    );
    setTimeout(() => setMensagemSucesso(""), 4500);
    setProgressoTick((t) => t + 1);
  };

  const handleRefazerProva = (prova) => {
    setProvaAtiva(null);
    setResultadoProva(null);
    setMostrarGabarito(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Re-iniciar a mesma prova
    if (disciplinaAtiva) {
      const discCompleta = provasDisciplinas.find((p) => p.id === disciplinaAtiva.id) || disciplinaAtiva;
      const provaSelecionada = tipoProvaAtiva === "p2" ? discCompleta.prova2 : discCompleta.prova1;
      setProvaAtiva(provaSelecionada);
    }
  };

  const handleVerHistorico = () => {
    setAbaAtiva("historico");
  };

  const handleLiberarTudo = (discId: string) => {
    liberarTodasEtapas(discId);
  };

  return (
    <div className="testes-container">
      <section className="hero-testes no-print">
        <div className="hero-testes-topo-marca">
          <img src="/logo-teologia.png" alt="Teologia Acessível" className="hero-testes-logo-img" />
          <div className="hero-badge">
            <Award size={15} className="icone-inline" /> Teologia Acessível • Plataforma de Teologia Bíblica
          </div>
        </div>
        <h1>Ambiente de Provas & Histórico Escolar Oficial</h1>
        <p>
          Provas avaliativas de 10 questões (5 de Certo ou Errado e 5 de Múltipla Escolha - Nível Médio),
          cálculo imediato de notas e preenchimento automático do Histórico Escolar Acadêmico.
        </p>
      </section>

      <section className="provas-resumo no-print" aria-label="Resumo acadêmico">
        <div className="provas-resumo-item">
          <span className="provas-resumo-valor">{disciplinasConcluidas.length}</span>
          <span className="provas-resumo-label">disciplinas avaliadas</span>
        </div>
        <div className="provas-resumo-item">
          <span className="provas-resumo-valor">{mediaHistorico ? mediaHistorico.toFixed(1) : "--"}</span>
          <span className="provas-resumo-label">média do histórico</span>
        </div>
        <div className="provas-resumo-item">
          <span className="provas-resumo-valor">{totalHorasCursadas}h</span>
          <span className="provas-resumo-label">carga cursada</span>
        </div>
        <div className={`provas-resumo-status ${disciplinasConcluidas.length === historicoEscolar.length && mediaHistorico >= 7.0 && pagamentoConfirmado ? "is-completo" : ""}`}>
          <ShieldCheck size={19} />
          <div>
            <strong>{disciplinasConcluidas.length === historicoEscolar.length && mediaHistorico >= 7.0 && pagamentoConfirmado ? "Certificação pronta" : "Certificação em andamento"}</strong>
            <span>{disciplinasConcluidas.length}/{historicoEscolar.length} disciplinas concluídas</span>
          </div>
        </div>
      </section>

      {mensagemSucesso && (
        <div className="alerta-sucesso no-print">
          <CheckCircle2 size={18} className="icone-inline" />
          <span>{mensagemSucesso}</span>
        </div>
      )}

      <ModalBloqueio
        modalBloqueio={modalBloqueio}
        onClose={() => setModalBloqueio(null)}
        onLiberarTudo={handleLiberarTudo}
      />

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

        {podeGerenciarAvaliacoes && (
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
        )}
      </div>

      {provaAtiva && (
        <ProvaExecutor
          provaAtiva={provaAtiva}
          disciplinaAtiva={disciplinaAtiva}
          tipoProvaAtiva={tipoProvaAtiva}
          onFinalizar={handleFinalizarProva}
          onFechar={() => setProvaAtiva(null)}
          onRefazer={handleRefazerProva}
          _onMostrarGabarito={() => {}}
          _mostrarGabarito={mostrarGabarito}
        />
      )}

      {abaAtiva === "testes" && !provaAtiva && (
        <GradeCurricular
          _provasDisciplinas={provasDisciplinas}
          onIniciarProva={iniciarProva}
          onLiberarTodasEtapas={handleLiberarTudo}
          setProgressoTick={setProgressoTick}
        />
      )}

      {abaAtiva === "historico" && (
        <HistoricoEscolar
          historicoEscolar={historicoEscolar}
          setHistoricoEscolar={setHistoricoEscolar}
          usuario={usuario}
          _matricula={matricula}
          assinaturas={assinaturas}
          pagamentoConfirmado={pagamentoConfirmado}
          alunoLogado={alunoLogado}
          _provasDisciplinas={provasDisciplinas}
          onIniciarProva={iniciarProva}
        />
      )}

      {abaAtiva === "aluno" && (
        <PainelAluno
          alunoLogado={alunoLogado}
          disciplinasConcluidas={disciplinasConcluidas}
          historicoEscolar={historicoEscolar}
          mediaHistorico={mediaHistorico}
          matriculaAluno={matriculaAluno}
          onVerHistorico={handleVerHistorico}
        />
      )}

      {abaAtiva === "professor" && podeGerenciarAvaliacoes && (
        <PainelProfessor
          alunos={alunos}
          setAlunos={setAlunos}
          _podeGerenciarAvaliacoes={podeGerenciarAvaliacoes}
        />
      )}
    </div>
  );
}