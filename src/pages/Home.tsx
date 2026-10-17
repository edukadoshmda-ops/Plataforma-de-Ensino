import { Link } from "react-router-dom";
import {
  BookOpen,
  Headphones,
  ScrollText,
  Video,
  GraduationCap,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  BookMarked,
  Trophy,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { carregarProgressoGeral } from "../services/progressoEstudoService";

const trilhas = [
  {
    to: "/playbooks",
    icone: BookOpen,
    cor: "azul",
    titulo: "Playbooks & PDFs",
    descricao:
      "Material visual e acadêmico em PDF com visualizador integrado para leitura avançada.",
  },
  {
    to: "/audiobooks",
    icone: Headphones,
    cor: "roxo",
    titulo: "Audiobooks Teológicos",
    descricao:
      "Ouça tratados, comentários e lições expositivas com fidelidade teológica.",
  },
  {
    to: "/artigos",
    icone: ScrollText,
    cor: "verde",
    titulo: "Artigos & Ensaios",
    descricao:
      "Estudos exegéticos e reflexões doutrinárias com rigor e clareza acadêmica.",
  },
  {
    to: "/videos",
    icone: Video,
    cor: "vermelho",
    titulo: "Videoaulas & Exposições",
    descricao: "Aulas sistemáticas gravadas com ambiente de estudo multimídia.",
  },
  {
    to: "/dicionario",
    icone: BookMarked,
    cor: "azul",
    titulo: "Dicionário & Bíblia de Estudo",
    descricao:
      "Léxico teológico em Grego e Hebraico e passagens bíblicas comentadas com exegese.",
  },
  {
    to: "/testes",
    icone: GraduationCap,
    cor: "dourado",
    titulo: "Testes & Avaliações",
    descricao:
      "Questionários formativos, ambiente do aluno, histórico escolar, diploma e credencial.",
  },
  {
    to: "/verificar",
    icone: CheckCircle2,
    cor: "verde",
    titulo: "Validador de Diploma",
    descricao:
      "Verificação pública de autenticidade de diplomas, certificados e credenciais ministeriais.",
  },
];

export default function Home() {
  const { usuario, matricula, pagamentoConfirmado } = useAuth();
  const progresso = carregarProgressoGeral();
  const totalDisciplinas = Object.keys(progresso).length || 30;
  const concluidas = Object.values(progresso).filter((item) => item && item.pdf && item.audio && item.video).length;
  const percentual = totalDisciplinas ? Math.min(100, Math.round((concluidas / totalDisciplinas) * 100)) : 0;

  const avaliacoes = JSON.parse(localStorage.getItem("teologia_avaliacoes_p1_p2_v2") || "{}");
  const provasConcluidas = Object.values(avaliacoes).filter((disc) => disc && ((disc.p1 && disc.p1.nota !== null && disc.p1.nota !== undefined) || (disc.p2 && disc.p2.nota !== null && disc.p2.nota !== undefined))).length;
  const notas = Object.values(avaliacoes)
    .map((disc) => disc?.mediaFinal)
    .filter((valor) => typeof valor === "number" && !Number.isNaN(valor));
  const mediaGeral = notas.length ? Number((notas.reduce((soma, valor) => soma + valor, 0) / notas.length).toFixed(1)) : 0;
  const certificadoLiberado = pagamentoConfirmado && percentual >= 80;

  return (
    <div>
      <section className="hero">
        <div className="hero-logo-destaque">
          <img src="/logo-teologia.png" alt="Teologia Acessível" className="hero-logo-img" />
        </div>
        <div className="hero-selo">
          <Sparkles size={16} /> Teologia Acessível • Plataforma de Teologia Bíblica
        </div>
        <h1>Teologia Acessível para Todos</h1>
        <p>
          Olá, {usuario?.nome?.split(" ")[0] || "Aluno"}. A sua formação teológica está em andamento com materiais, provas, audiobooks e apoio do tutor especialista.
        </p>
      </section>

      <section className="grade" style={{ marginTop: 12 }}>
        <div className="card trilha trilha-azul" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div className="trilha-icone-wrapper">
            <TrendingUp size={26} strokeWidth={2} className="trilha-icone-svg" />
          </div>
          <h2>Progresso do curso</h2>
          <div className="progress-bar" style={{ height: 12, borderRadius: 999, background: "rgba(255,255,255,0.16)", overflow: "hidden" }}>
            <div style={{ width: `${percentual}%`, height: "100%", background: "#f4b400", borderRadius: 999 }} />
          </div>
          <p style={{ margin: 0, fontWeight: 700 }}>{percentual}% concluído</p>
          <p style={{ margin: 0, opacity: 0.9 }}>{concluidas} de {totalDisciplinas} etapas concluídas</p>
        </div>

        <div className="card trilha trilha-verde" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div className="trilha-icone-wrapper">
            <BookMarked size={26} strokeWidth={2} className="trilha-icone-svg" />
          </div>
          <h2>Matrícula</h2>
          <p style={{ margin: 0, fontWeight: 700 }}>{matricula?.matricula || "TA-EM-ANDAMENTO"}</p>
          <p style={{ margin: 0, opacity: 0.9 }}>{matricula?.pagamento === "pago" || matricula?.status_pagamento === "pago" ? "Pagamento confirmado" : "Pagamento pendente"}</p>
        </div>

        <div className="card trilha trilha-roxo" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div className="trilha-icone-wrapper">
            <Trophy size={26} strokeWidth={2} className="trilha-icone-svg" />
          </div>
          <h2>Próximo passo</h2>
          <p style={{ margin: 0, fontWeight: 700 }}>{certificadoLiberado ? "Certificado em análise" : "Continuar estudos"}</p>
          <p style={{ margin: 0, opacity: 0.9 }}>
            {certificadoLiberado
              ? "Você já está pronto para a emissão do diploma oficial."
              : "Acesse uma apostila, ouça a explicação e avance para a prova."}
          </p>
        </div>
      </section>

      <section className="grade" style={{ marginTop: 18 }}>
        <div className="card" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <GraduationCap size={22} color="#0f2a43" />
            <h2 style={{ margin: 0 }}>Painel de provas</h2>
          </div>
          <p style={{ margin: 0, fontWeight: 700 }}>{provasConcluidas} avaliações concluídas</p>
          <p style={{ margin: 0, opacity: 0.9 }}>Média geral atual: {mediaGeral ? `${mediaGeral.toFixed(1)} pts` : "em andamento"}</p>
          <Link to="/testes" className="trilha-link" style={{ marginTop: 6 }}>
            Ver provas e histórico <ArrowRight size={16} />
          </Link>
        </div>

        <div className="card" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <CheckCircle2 size={22} color="#0f2a43" />
            <h2 style={{ margin: 0 }}>Certificado</h2>
          </div>
          <p style={{ margin: 0, fontWeight: 700 }}>{certificadoLiberado ? "Liberado" : "Em preparação"}</p>
          <p style={{ margin: 0, opacity: 0.9 }}>
            {certificadoLiberado
              ? "Seu diploma e histórico escolar já podem ser emitidos."
              : "Complete as avaliações e mantenha o percentual acima de 80% para liberar a certificação."}
          </p>
        </div>
      </section>

      <section className="grade" style={{ marginTop: 18 }}>
        {trilhas.map((t) => {
          const Icone = t.icone;
          return (
            <Link key={t.to} to={t.to} className={`card trilha trilha-${t.cor}`}>
              <div className="trilha-icone-wrapper">
                <Icone size={26} strokeWidth={2} className="trilha-icone-svg" />
              </div>
              <h2>{t.titulo}</h2>
              <p>{t.descricao}</p>
              <span className="trilha-link">
                Acessar conteúdo <ArrowRight size={16} />
              </span>
            </Link>
          );
        })}
      </section>

      <section className="card" style={{ marginTop: 24, padding: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
          <CheckCircle2 size={22} color="#0f2a43" />
          <h2 style={{ margin: 0 }}>Checklist da jornada</h2>
        </div>
        <ul style={{ marginLeft: 20, color: "#334155", lineHeight: 1.9 }}>
          <li>Completar matrícula e pagamento</li>
          <li>Estudar os playbooks da disciplina atual</li>
          <li>Ouvir o audiobook e assistir à videoaula</li>
          <li>Enviar a avaliação final</li>
          <li>Receber o certificado da Teologia Acessível</li>
        </ul>
      </section>
    </div>
  );
}
