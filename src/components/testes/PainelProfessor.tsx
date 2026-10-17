import { useState, FormEvent } from "react";
import { FileEdit, Save, X, CheckCircle2 } from "lucide-react";
import type { AvaliacaoAluno } from "../../types";

interface PainelProfessorProps {
  alunos: AvaliacaoAluno[];
  setAlunos: (alunos: AvaliacaoAluno[]) => void;
  _podeGerenciarAvaliacoes: boolean;
}

interface AvaliacaoItem {
  testeId: string;
  testeTitulo: string;
  nota: number | null;
  status: string;
  feedback: string;
  data: string;
}

export default function PainelProfessor({
  alunos,
  setAlunos,
  _podeGerenciarAvaliacoes,
}: PainelProfessorProps) {
  const [alunoSelecionado, setAlunoSelecionado] = useState<AvaliacaoAluno | null>(null);
  const [testeEditando, setTesteEditando] = useState<AvaliacaoItem | null>(null);
  const [novaNota, setNovaNota] = useState("");
  const [novoFeedback, setNovoFeedback] = useState("");
  const [novoStatus, setNovoStatus] = useState("Concluído");
  const [mensagemSucesso, setMensagemSucesso] = useState("");

  const salvarAvaliacaoTutor = (e: FormEvent) => {
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
            .filter((n): n is number => typeof n === "number" && !isNaN(n));
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

  const abrirEdicaoTeste = (aluno: AvaliacaoAluno, avaliacao: AvaliacaoItem) => {
    setAlunoSelecionado(aluno);
    setTesteEditando(avaliacao);
    setNovaNota(avaliacao.nota !== null ? String(avaliacao.nota) : "");
    setNovoFeedback(avaliacao.feedback || "");
    setNovoStatus(avaliacao.status || "Concluído");
  };

  return (
    <section className="secao-professor no-print">
      <div className="secao-header">
        <div>
          <h2>Gestão Pedagógica & Avaliação de Alunos</h2>
          <p className="texto-sub">
            Acompanhe o rendimento individual, lance notas e escreva feedbacks para cada aluno.
          </p>
        </div>
      </div>

      {mensagemSucesso && (
        <div className="alerta-sucesso no-print">
          <CheckCircle2 size={18} className="icone-inline" />
          <span>{mensagemSucesso}</span>
        </div>
      )}

      <div className="grade-alunos-gestao">
        {alunos.map((aluno) => (
          <div key={aluno.id} className="card card-aluno-gestao">
            <div className="gestao-aluno-topo">
              <div className="aluno-avatar-menor">{aluno.nome.charAt(0).toUpperCase()}</div>
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
                      className={`badge-status-sm status-${av.status.toLowerCase().replace(/\s+/g, "-")}`}
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
                  rows={4}
                  value={novoFeedback}
                  onChange={(e) => setNovoFeedback(e.target.value)}
                  placeholder="Escreva orientações acadêmicas, pontos fortes e recomendações teológicas para o aluno..."
                  className="campo-textarea"
                ></textarea>
              </div>

              <div className="modal-botoes">
                <button type="button" className="btn btn-contorno btn-com-icone" onClick={() => setTesteEditando(null)}>
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
  );
}