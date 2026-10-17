import { ScrollText, Award, CheckCircle2, TrendingUp } from "lucide-react";
import type { Usuario, HistoricoItem, AvaliacaoAluno } from "../../types";

interface PainelAlunoProps {
  alunoLogado: AvaliacaoAluno;
  disciplinasConcluidas: HistoricoItem[];
  historicoEscolar: HistoricoItem[];
  mediaHistorico: number;
  matriculaAluno: string;
  onVerHistorico: () => void;
}

export default function PainelAluno({
  alunoLogado,
  disciplinasConcluidas,
  historicoEscolar,
  mediaHistorico,
  matriculaAluno,
  onVerHistorico,
}: PainelAlunoProps) {
  return (
    <section className="secao-aluno no-print">
      <div className="card painel-aluno-header">
        <div className="aluno-info-principal">
          <div className="aluno-avatar">{alunoLogado.nome.charAt(0).toUpperCase()}</div>
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
        <button className="btn btn-contorno btn-sm btn-com-icone" onClick={onVerHistorico}>
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
                  className={`badge-status status-${av.status.toLowerCase().replace(/\s+/g, "-")}`}
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
                <Award size={16} className="icone-inline" /> Parecer Pedagógico do Docente:
              </strong>
              <p>{av.feedback || "Aguardando avaliação do tutor."}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}