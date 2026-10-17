// src/components/DiplomaFaculdade.jsx
// Design Profissional de Diploma de Ensino Superior / Faculdade Teológica (SEBITAN)
// Formato A4 Paisagem (Landscape) com Moldura Clássica, Selo 3D e Autenticação Digital

import { useState } from "react";
import { Printer, ShieldCheck, Check, Copy, Award, QrCode, ExternalLink } from "lucide-react";
import { imprimirDocumento } from "../services/impressaoService";

export default function DiplomaFaculdade({
  dadosAluno,
  totalHoras = 1800,
  mediaGeral = 9.5,
  disciplinasConcluidas = 30,
  totalDisciplinas = 30,
  pagamentoConfirmado = true,
  assinaturas = {},
}) {
  const [copiado, setCopiado] = useState(false);

  // Formatação segura de datas e dados
  const dataHoje = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const formatarDataNascimento = (valor?: string) => {
    if (!valor || valor === "-") return "18 de agosto de 1966";
    if (valor.includes("/")) {
      const partes = valor.split("/");
      if (partes.length === 3) {
        const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
        const mesIdx = parseInt(partes[1], 10) - 1;
        if (meses[mesIdx]) {
          return `${parseInt(partes[0], 10)} de ${meses[mesIdx]} de ${partes[2]}`;
        }
      }
      return valor;
    }
    if (valor.includes("-")) {
      const d = new Date(valor + "T00:00:00");
      if (!isNaN(d.getTime())) {
        return d.toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" });
      }
    }
    return valor;
  };

  const dataNascimentoFormatada = formatarDataNascimento(dadosAluno?.dataNascimento);

  const matriculaOficial = (dadosAluno?.matricula || "TA-SUPERADMIN").replace(/^SEB-/i, "TA-");
  const codigoAutenticacao = `TA-DIP-${matriculaOficial.replace(/^TA-/i, "").replace(/^SEB-/i, "")}-BR`;

  const copiarAutenticacao = () => {
    navigator.clipboard.writeText(codigoAutenticacao);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  const imprimirDiploma = () => {
    imprimirDocumento("diploma");
  };

  return (
    <div className="diploma-wrapper-geral bloco-documento-diploma">
      {/* BARRA DE AÇÕES DO DIPLOMA (NÃO APARECE NA IMPRESSÃO) */}
      <div className="diploma-toolbar no-print">
        <div className="diploma-toolbar-info">
          <Award size={20} color="var(--amarelo)" />
          <div>
            <strong>Diploma Oficial — Teologia Acessível</strong>
            <span>Padrão Faculdade Teológica de Ensino Superior • Formato A4 Paisagem</span>
          </div>
        </div>
        <div className="diploma-toolbar-botoes">
          <button
            type="button"
            className="btn btn-contorno btn-sm btn-com-icone"
            onClick={copiarAutenticacao}
            title="Copiar código de autenticidade para validação"
          >
            {copiado ? <Check size={14} color="#16a34a" /> : <Copy size={14} />}
            <span>{copiado ? "Código Copiado!" : "Copiar Chave Digital"}</span>
          </button>
          <button
            type="button"
            className="btn btn-primario btn-com-icone"
            onClick={imprimirDiploma}
            title="Imprimir Diploma em A4 Paisagem ou Salvar em PDF"
          >
            <Printer size={16} />
            <span>Imprimir Diploma Oficial (PDF)</span>
          </button>
        </div>
      </div>

      {/* DOCUMENTO DO DIPLOMA (A4 PAISAGEM / ESTILO FACULDADE) */}
      <div className="diploma-folha-a4-paisagem" id="documento-diploma">
        {/* MOLDURA ORNAMENTAL EXTERNA */}
        <div className="diploma-borda-externa">
          {/* MOLDURA ORNAMENTAL INTERNA */}
          <div className="diploma-borda-interna">
            {/* CANTONEIRAS CLÁSSICAS EM SVG NOS 4 CANTOS */}
            <div className="diploma-cantoneira topo-esquerda">
              <svg viewBox="0 0 40 40" width="40" height="40">
                <path d="M0 0 L40 0 C25 5 15 15 10 30 L10 10 L30 10 C20 12 12 20 10 40 L0 40 Z" fill="#b8860b" />
              </svg>
            </div>
            <div className="diploma-cantoneira topo-direita">
              <svg viewBox="0 0 40 40" width="40" height="40">
                <path d="M40 0 L0 0 C15 5 25 15 30 30 L30 10 L10 10 C20 12 28 20 30 40 L40 40 Z" fill="#b8860b" />
              </svg>
            </div>
            <div className="diploma-cantoneira base-esquerda">
              <svg viewBox="0 0 40 40" width="40" height="40">
                <path d="M0 40 L40 40 C25 35 15 25 10 10 L10 30 L30 30 C20 28 12 20 10 0 L0 0 Z" fill="#b8860b" />
              </svg>
            </div>
            <div className="diploma-cantoneira base-direita">
              <svg viewBox="0 0 40 40" width="40" height="40">
                <path d="M40 40 L0 40 C15 35 25 25 30 10 L30 30 L10 30 C20 28 28 20 30 0 L40 0 Z" fill="#b8860b" />
              </svg>
            </div>

            {/* MARCA D'ÁGUA HERÁLDICA DE FUNDO (TRANSLÚCIDA) */}
            <div className="diploma-marca-dagua-fundo" aria-hidden="true">
              <img src="/logo-teologia.png" alt="" />
            </div>

            {/* CONTEÚDO DO DIPLOMA */}
            <div className="diploma-conteudo-relativo">
              {/* CABEÇALHO DA FACULDADE */}
              <header className="diploma-cabecalho-faculdade">
                <div className="diploma-emblema-brasao">
                  <img src="/logo-teologia.png" alt="Teologia Acessível" className="diploma-brasao-img" />
                </div>
                <div className="diploma-titulos-instituicao">
                  <span className="diploma-republica">REPÚBLICA FEDERATIVA DO BRASIL • ESTADO DO PARÁ</span>
                  <h1 className="diploma-nome-faculdade">TEOLOGIA ACESSÍVEL</h1>
                  <h2 className="diploma-departamento">FACULDADE DE ENSINO TEOLÓGICO SUPERIOR & MINISTÉRIO PASTORAL</h2>
                  <p className="diploma-credenciamento">
                    Instituição de Formação Teológica e Eclesiástica Livre • Registrada sob os Atos Regimentais e Estatutos Canônicos
                  </p>
                </div>
                <div className="diploma-emblema-brasao">
                  <img src="/logo-teologia.png" alt="Teologia Acessível" className="diploma-brasao-img" />
                </div>
              </header>

              {/* FAIXA DO TÍTULO DO DIPLOMA */}
              <div className="diploma-faixa-titulo-wrap">
                <div className="diploma-linha-dourada-fina"></div>
                <div className="diploma-titulo-principal">
                  <span>D I P L O M A</span>
                </div>
                <div className="diploma-subtitulo-curso">
                  BACHARELADO LIVRE EM TEOLOGIA & MINISTÉRIO PASTORAL
                </div>
                <div className="diploma-linha-dourada-fina"></div>
              </div>

              {/* TEXTO CERIMONIAL DE CONCESSÃO DE GRAU */}
              <div className="diploma-corpo-texto">
                <p className="diploma-intro-concessao">
                  A Coordenação Acadêmica e a Diretoria Geral da <strong>Teologia Acessível</strong>, no uso de suas prerrogativas educacionais e eclesiásticas, conferem o presente diploma a:
                </p>

                {/* NOME DO ALUNO EM DESTAQUE MONUMENTAL */}
                <div className="diploma-nome-aluno-destaque">
                  <h3>{dadosAluno?.nome || "Luiz Eduardo Santos da Silva"}</h3>
                  <div className="diploma-friso-nome"></div>
                </div>

                {/* DETALHAMENTO DO ALUNO E CARGA HORÁRIA */}
                <p className="diploma-texto-outorga">
                  nascido(a) em <strong>{dataNascimentoFormatada}</strong>, registrado(a) sob a Matrícula <strong>{matriculaOficial}</strong>, havendo cumprido com louvor e fidelidade doutrinária todas as exigências acadêmicas do curso de <strong>Bacharelado Livre em Teologia Bíblica e Prática Pastoral</strong>, perfazendo a carga horária integral de <strong>{Number(totalHoras).toLocaleString("pt-BR")} Horas</strong> com Coeficiente de Rendimento de <strong>{mediaGeral > 0 ? mediaGeral.toFixed(1).replace(".", ",") : "9,8"}</strong>, pelo que se lhe confere o presente Diploma, outorgando-lhe as prerrogativas de ensino, liderança e ministério da Palavra de Deus.
                </p>

                <p className="diploma-local-data">
                  Ananindeua – Pará, {dataHoje}.
                </p>
              </div>

              {/* RODAPÉ DO DIPLOMA: REGISTRO CARTORIAL + ASSINATURAS + SELO OURO 3D */}
              <footer className="diploma-rodape-solene">
                {/* 1. ASSINATURA DO COORDENADOR */}
                <div className="diploma-assinatura-col">
                  <div className="diploma-espaco-rubrica">
                    <img
                      src={assinaturas?.coordenador || "/assinatura-coordenador.png"}
                      alt="Assinatura Coordenador"
                      className="diploma-assinatura-fac-img"
                    />
                  </div>
                  <div className="diploma-linha-assinar"></div>
                  <strong>Prof. Me. Coordenador Pedagógico</strong>
                  <span>Coordenação & Direção Geral</span>
                </div>

                {/* 2. SELO DOURADO 3D METÁLICO (GOLD EMBOSSED SEAL) */}
                <div className="diploma-selo-ouro-col">
                  <div className="diploma-selo-medalhao-3d">
                    <div className="diploma-selo-dentado"></div>
                    <div className="diploma-selo-centro">
                      <img src="/logo-teologia.png" alt="Chancela" className="diploma-selo-logo" />
                      <span className="diploma-selo-texto-circular">CHANCELA OFICIAL</span>
                      <strong className="diploma-selo-ano">TEOLOGIA ACESSÍVEL</strong>
                      <small className="diploma-selo-sub">AUTÊNTICO</small>
                    </div>
                    {/* Fitas heráldicas de seda sob o medalhão */}
                    <div className="diploma-fita-ouro fita-esq"></div>
                    <div className="diploma-fita-ouro fita-dir"></div>
                  </div>
                </div>

                {/* 3. ASSINATURA DA SECRETARIA GERAL */}
                <div className="diploma-assinatura-col">
                  <div className="diploma-espaco-rubrica">
                    <img
                      src={assinaturas?.secretaria || "/assinatura-secretaria.png"}
                      alt="Assinatura Secretaria"
                      className="diploma-assinatura-fac-img"
                    />
                  </div>
                  <div className="diploma-linha-assinar"></div>
                  <strong>Rosilene Alves da Silva</strong>
                  <span>Secretaria Geral de Registros</span>
                </div>
              </footer>

              {/* TABELA DE REGISTRO NOTARIAL NO RODAPÉ */}
              <div className="diploma-notarial-registro" style={{ justifyContent: "center", textAlign: "center" }}>
                <div className="notarial-bloco" style={{ justifyContent: "center", textAlign: "center" }}>
                  <span>Livro de Registro: <strong>L-04</strong></span>
                  <span>Folha: <strong>88</strong></span>
                  <span>Registro Geral nº: <strong>{matriculaOficial}</strong></span>
                </div>
                <div className="notarial-bloco qr-bloco" style={{ justifyContent: "center", textAlign: "center" }}>
                  <QrCode size={18} color="#0f2a43" />
                  <span>Código de Autenticação Digital: <strong>{codigoAutenticacao}</strong></span>
                </div>
                <div className="notarial-bloco" style={{ justifyContent: "center", textAlign: "center" }}>
                  <ShieldCheck size={14} color="#16a34a" />
                  <span>Validação Criptográfica: <strong>Certificado Verificado</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
