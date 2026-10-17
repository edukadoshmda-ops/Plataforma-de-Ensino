import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { obterHistoricoEscolar, isSupabaseConfigured } from "../../services/supabaseClient";
import { Printer, FileBadge, Award, GraduationCap, CheckCircle2 } from "lucide-react";
import DiplomaFaculdade from "../DiplomaFaculdade";
import CredencialTeologo from "../CredencialTeologo";
import { imprimirDocumento } from "../../services/impressaoService";
import type { HistoricoItem, Disciplina, Usuario } from "../../types";

interface HistoricoEscolarProps {
  historicoEscolar: HistoricoItem[];
  setHistoricoEscolar: (historico: HistoricoItem[]) => void;
  usuario: Usuario | null;
  _matricula: unknown;
  assinaturas: Record<string, string> | null;
  pagamentoConfirmado: boolean;
  alunoLogado: { nome: string; email: string; turma: string };
  _provasDisciplinas: Disciplina[];
  onIniciarProva: (disciplina: Disciplina) => void;
}

export default function HistoricoEscolar({
  historicoEscolar,
  setHistoricoEscolar,
  usuario,
  _matricula,
  assinaturas,
  pagamentoConfirmado,
  alunoLogado,
  _provasDisciplinas,
  onIniciarProva,
}: HistoricoEscolarProps) {
  const { matricula: matriculaAuth } = useAuth();
  const [docAtivo, setDocAtivo] = useState<"todos" | "historico" | "diploma" | "credencial">("todos");

  const disciplinasConcluidas = historicoEscolar.filter((d) => d.nota !== null);
  const totalHorasCursadas = disciplinasConcluidas.reduce((acc, d) => acc + d.cargaHoraria, 0);
  const totalHorasCurso = historicoEscolar.reduce((acc, d) => acc + d.cargaHoraria, 0);
  const mediaHistorico =
    disciplinasConcluidas.length > 0
      ? Number(
          (
            disciplinasConcluidas.reduce((acc, d) => acc + (d.nota || 0), 0) /
            disciplinasConcluidas.length
          ).toFixed(1)
        )
      : 0;

  const matriculaAluno = matriculaAuth?.matricula || `SEB-2026-${String(usuario?.id || 101).padStart(4, "0")}`;
  const dadosCertificado = matriculaAuth
    ? {
        nome: matriculaAuth.nomeCompleto,
        telefone: matriculaAuth.telefone,
        email: matriculaAuth.email,
        dataNascimento: matriculaAuth.dataNascimento,
        matricula: matriculaAuth.matricula,
      }
    : {
        nome: alunoLogado.nome,
        telefone: "-",
        email: alunoLogado.email,
        dataNascimento: "-",
        matricula: matriculaAluno,
      };

  useEffect(() => {
    if (usuario?.id && isSupabaseConfigured()) {
      obterHistoricoEscolar(usuario.id).then((dados) => {
        if (dados && dados.length > 0) {
          setHistoricoEscolar(dados);
        }
      });
    }
  }, [usuario?.id, setHistoricoEscolar]);

  return (
    <section className="secao-historico">
      <div className="historico-acoes-topo no-print">
        <div>
          <h2>Documentos Acadêmicos Oficiais</h2>
          <p className="texto-sub">
            Emissão individual e separada para Histórico Escolar, Diploma Oficial e Credencial Estudantil.
          </p>
        </div>
        <div className="botoes-historico-topo" style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
          <button
            type="button"
            className="btn btn-primario btn-sm btn-com-icone"
            onClick={() => imprimirDocumento("historico")}
            title="Imprimir somente o Histórico Escolar em folha A4"
          >
            <Printer size={15} />
            <span>Imprimir Histórico</span>
          </button>
          <button
            type="button"
            className="btn btn-primario btn-sm btn-com-icone"
            onClick={() => imprimirDocumento("diploma")}
            title="Imprimir somente o Diploma em folha A4 Paisagem"
          >
            <GraduationCap size={15} />
            <span>Imprimir Diploma</span>
          </button>
          <button
            type="button"
            className="btn btn-primario btn-sm btn-com-icone"
            onClick={() => imprimirDocumento("credencial")}
            title="Imprimir somente a Carteirinha / Credencial (Frente e Verso)"
          >
            <Award size={15} />
            <span>Imprimir Carteirinha</span>
          </button>
        </div>
      </div>

      {/* SELETOR DE VISUALIZAÇÃO NA TELA */}
      <div
        className="no-print"
        style={{
          display: "flex",
          gap: 8,
          flexWrap: "wrap",
          marginBottom: 20,
          padding: "8px 12px",
          background: "#f1f5f9",
          borderRadius: 12,
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#475569", marginRight: 4 }}>
          Visualizar na tela:
        </span>
        <button
          type="button"
          onClick={() => setDocAtivo("todos")}
          className={`btn btn-sm ${docAtivo === "todos" ? "btn-primario" : "btn-contorno"}`}
          style={{ padding: "5px 12px", fontSize: "0.82rem" }}
        >
          Todos os Documentos
        </button>
        <button
          type="button"
          onClick={() => setDocAtivo("historico")}
          className={`btn btn-sm ${docAtivo === "historico" ? "btn-primario" : "btn-contorno"}`}
          style={{ padding: "5px 12px", fontSize: "0.82rem" }}
        >
          📄 Somente Histórico
        </button>
        <button
          type="button"
          onClick={() => setDocAtivo("diploma")}
          className={`btn btn-sm ${docAtivo === "diploma" ? "btn-primario" : "btn-contorno"}`}
          style={{ padding: "5px 12px", fontSize: "0.82rem" }}
        >
          🎓 Somente Diploma
        </button>
        <button
          type="button"
          onClick={() => setDocAtivo("credencial")}
          className={`btn btn-sm ${docAtivo === "credencial" ? "btn-primario" : "btn-contorno"}`}
          style={{ padding: "5px 12px", fontSize: "0.82rem" }}
        >
          🪪 Somente Carteirinha
        </button>
      </div>

      <div className={`bloco-documento-historico ${docAtivo !== "todos" && docAtivo !== "historico" ? "oculto-na-tela" : ""}`}>
        <div className="documento-historico-folha">
        <div className="documento-cabecalho">
          <div className="documento-logo-emblema">
            <img src="/logo-teologia.png" alt="Teologia Acessível" className="documento-logo-img" />
          </div>
          <div className="documento-instituicao-dados">
            <h3>TEOLOGIA ACESSÍVEL – PLATAFORMA DE TEOLOGIA BÍBLICA</h3>
            <h4>TEOLOGIA ACESSÍVEL – DEPARTAMENTO DE EDUCAÇÃO TEOLÓGICA</h4>
            <p>Registro de Entidade de Ensino Religioso e Formação Ministerial Livre</p>
            <div className="documento-titulo-faixa">HISTÓRICO ESCOLAR OFICIAL DO ALUNO</div>
          </div>
        </div>

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
            <span className="d-valor">
              {dadosCertificado.dataNascimento && dadosCertificado.dataNascimento !== "-"
                ? new Date(dadosCertificado.dataNascimento + "T00:00:00").toLocaleDateString("pt-BR")
                : "-"}
            </span>
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
            <span className="d-valor text-sucesso font-bold">
              {pagamentoConfirmado ? "Regular / Cursando" : "Matrícula pendente de pagamento"}
            </span>
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
                    <td>Prova (20 Questões)</td>
                    <td>
                      {item.nota !== null ? (
                        <strong className={isAprovado ? "text-sucesso" : "text-perigo"}>{item.nota.toFixed(1)}</strong>
                      ) : (
                        <span className="texto-sub">—</span>
                      )}
                    </td>
                    <td>{item.frequencia}</td>
                    <td>
                      {isAprovado && <span className="badge-status-sm status-concluído">Aprovado</span>}
                      {isRecuperacao && <span className="badge-status-sm status-recuperação">Recuperação</span>}
                      {isPendente && <span className="badge-status-sm status-pendente">A Cursar</span>}
                    </td>
                    <td>{item.dataConclusao}</td>
                    <td className="no-print">
                      <button
                        type="button"
                        className="btn btn-contorno btn-sm btn-com-icone"
                        onClick={() => {
                          const matchProva = _provasDisciplinas.find((p) => p.id === item.id);
                          if (matchProva) onIniciarProva(matchProva);
                        }}
                      >
                        <FileBadge size={14} />
                        <span>{item.nota !== null ? "Refazer" : "Fazer Prova"}</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* BLOCO DE FECHAMENTO (QUADRO RESUMO + ASSINATURAS + RODAPÉ) - NUNCA CORTA AO MEIO */}
        <div className="documento-fechamento-bloco">
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
              <small className="texto-sub">Registro Geral Teologia Acessível</small>
            </div>
          </div>

          <div className="documento-assinaturas-area">
            <div className="assinatura-bloco">
              <img
                src={assinaturas?.coordenador || "/assinatura-coordenador.png"}
                alt="Assinatura Coordenador"
                className="assinatura-img"
              />
              <div className="linha-assinatura"></div>
              <strong>Prof. Me. Coordenador Pedagógico</strong>
              <span>Coordenação de Educação Teológica</span>
            </div>

            <div className="assinatura-bloco">
              <div className="carimbo-digital-box">
                <img src="/logo-teologia.png" alt="Teologia Acessível" className="carimbo-digital-logo-img" />
                <span>TEOLOGIA ACESSÍVEL AUTÊNTICO</span>
                <small>Verificado Digitalmente</small>
              </div>
            </div>

            <div className="assinatura-bloco">
              <img
                src={assinaturas?.secretaria || "/assinatura-secretaria.png"}
                alt="Assinatura Secretária"
                className="assinatura-img"
              />
              <div className="linha-assinatura"></div>
              <strong>Rosilene Alves da Silva</strong>
              <span>Secretaria Geral de Registros Acadêmicos</span>
            </div>
          </div>

          <div className="documento-rodape-legal">
            Este histórico escolar tem validade acadêmica interna nos termos dos estatutos educacionais da Teologia
            Acessível. Documento assinado eletronicamente com chave pública institucional.
          </div>
        </div>
        </div>
      </div>

      <div
        id="secao-certificado"
        className={`bloco-documento-diploma ${docAtivo !== "todos" && docAtivo !== "diploma" ? "oculto-na-tela" : ""}`}
        style={{ marginTop: 32 }}
      >
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

      <div
        className={`bloco-documento-credencial ${docAtivo !== "todos" && docAtivo !== "credencial" ? "oculto-na-tela" : ""}`}
        style={{ marginTop: 32 }}
      >
        <CredencialTeologo
          nome={String(dadosCertificado.nome || usuario?.nome || "Aluno Teologia Acessível")}
          email={String(dadosCertificado.email || usuario?.email || "")}
          matricula={String(dadosCertificado.matricula || matriculaAluno)}
          telefone={String(dadosCertificado.telefone || "-")}
          dataNascimento={String(dadosCertificado.dataNascimento || "-")}
          mediaGeral={mediaHistorico || 9.5}
          role={usuario?.role}
        />
      </div>
    </section>
  );
}