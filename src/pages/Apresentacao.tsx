import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  GraduationCap,
  Headphones,
  MonitorPlay,
  ShieldCheck,
  Award,
  Sparkles,
  LogIn,
  Check,
  Zap,
  Crown,
  Package,
  Truck,
  CheckCircle2,
  Lock,
  Download,
  Infinity,
} from "lucide-react";
import ModalInstalarApp from "../components/ModalInstalarApp";

export default function Apresentacao() {
  const [modalInstalarAberto, setModalInstalarAberto] = useState(false);

  const handleClicarInstalar = async () => {
    const prompt = typeof window !== "undefined" ? window.__pwaPrompt : null;
    if (prompt && typeof prompt.prompt === "function") {
      try {
        await prompt.prompt();
        const choice = await prompt.userChoice;
        if (choice && choice.outcome === "accepted") {
          window.__pwaPrompt = null;
          return;
        }
      } catch (err) {
        console.error(err);
      }
    }
    setModalInstalarAberto(true);
  };

  return (
    <div className="apresentacao-pagina" style={{ backgroundColor: "#ffffff", minHeight: "100vh", color: "#1e293b", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      
      {/* Header Público */}
      <header className="apresentacao-header">
        <div className="apresentacao-header-container">
          <Link to="/" className="apresentacao-logo-link">
            <img src="/logo-teologia.png" alt="Teologia Acessível" className="apresentacao-logo-img" />
            <div className="apresentacao-logo-textos" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <span className="apresentacao-logo-titulo" style={{ textAlign: "center", width: "100%" }}>
                Teologia Acessível
              </span>
              <span className="apresentacao-logo-sub" style={{ textAlign: "center", width: "100%" }}>
                Plataforma de Teologia Bíblica
              </span>
            </div>
          </Link>
          <div className="apresentacao-header-acoes">
            <button
              onClick={handleClicarInstalar}
              className="apresentacao-btn-instalar"
              title="Instalar Aplicativo Oficial no seu celular ou PC"
            >
              <Download size={15} />
              <span>Instalar App</span>
            </button>
            <Link to="/login" className="btn btn-contorno apresentacao-btn-entrar">
              <LogIn size={15} /> <span>Entrar</span>
            </Link>
            <Link to="/cadastro" className="btn btn-primario apresentacao-btn-comece">
              <Sparkles size={15} /> <span>Comece Agora</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ padding: "90px 20px 80px", textAlign: "center", maxWidth: "960px", margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.35)", color: "#065f46", padding: "6px 18px", borderRadius: "999px", fontSize: "0.88rem", fontWeight: "800", marginBottom: "22px", letterSpacing: "0.02em" }}>
          <Infinity size={17} style={{ color: "#059669" }} />
          <span>ACESSO VITALÍCIO • PAGAMENTO ÚNICO • SEM MENSALIDADES</span>
        </div>

        <h1
          style={{
            fontSize: "clamp(2.2rem, 4.2vw, 3.25rem)",
            fontWeight: "800",
            marginBottom: "24px",
            lineHeight: "1.2",
            letterSpacing: "-0.02em",
            color: "#0f2a43",
            textWrap: "balance",
          }}
        >
          Transforme seu Ministério com o mais completo{" "}
          <span style={{ color: "#1d4ed8" }}>Curso Livre de Teologia Bíblica</span>{" "}
          <span style={{ whiteSpace: "nowrap" }}>on-line</span>
        </h1>
        <p style={{ fontSize: "1.25rem", color: "#475569", marginBottom: "40px", lineHeight: "1.6" }}>
          Estude e aprenda Teologia no conforto da sua casa, no horário que preferir e no seu próprio ritmo com <strong>Acesso Vitalício</strong>. Escolha a disciplina que deseja estudar, organize sua rotina e avance de acordo com os seus objetivos, sem abrir mão da profundidade bíblica e da qualidade do ensino. Tenha acesso a apostilas em PDF, audiobooks, preleções em estúdio e um Tutor IA exclusivo para acompanhar sua jornada. Aprenda onde estiver, pelo computador ou celular, com liberdade total para revisar os conteúdos para sempre: pague uma única vez e tenha acesso perpétuo, sem mensalidades.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
          <Link to="/cadastro" style={{ backgroundColor: "#0f2a43", color: "#ffffff", padding: "18px 36px", fontSize: "1.2rem", borderRadius: "8px", textDecoration: "none", fontWeight: "bold", display: "inline-flex", alignItems: "center", gap: "10px", boxShadow: "0 4px 15px rgba(15, 42, 67, 0.2)" }}>
            Quero me Matricular Hoje
          </Link>
          <button
            onClick={handleClicarInstalar}
            style={{
              backgroundColor: "rgba(244, 180, 0, 0.12)",
              border: "2px solid #f4b400",
              color: "#f4b400",
              padding: "16px 28px",
              fontSize: "1.1rem",
              borderRadius: "8px",
              fontWeight: "700",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(244, 180, 0, 0.15)",
              transition: "all 0.2s ease",
            }}
            title="Instalar Aplicativo Oficial no seu celular ou PC"
          >
            <Download size={20} />
            <span>Instalar Aplicativo</span>
          </button>
        </div>
      </section>

      {/* Tabela de Preços e Planos de Formação */}
      <section className="apresentacao-oferta" aria-labelledby="oferta-titulo">
        <div className="apresentacao-oferta-header">
          <span className="apresentacao-oferta-selo">
            <Zap size={16} /> CONDIÇÃO ESPECIAL DE LANÇAMENTO • ACESSO VITALÍCIO
          </span>
          <h2 id="oferta-titulo">Planos de Formação com Reconhecimento Ministerial e Acesso Vitalício</h2>
          <p>
            Dois formatos completos para atender sua vocação com <strong>Acesso Vitalício garantido</strong>: estude com flexibilidade 100% on-line
            ou viva a solenidade definitiva com o Kit Físico Oficial entregue na sua residência. Pagamento único, sem mensalidades.
          </p>
        </div>

        <div className="apresentacao-planos-grid">
          {/* PLANO 1: DIGITAL COMPLETO */}
          <div className="plano-card">
            <div className="plano-header">
              <span className="plano-selo-tipo">
                <Infinity size={14} style={{ display: "inline-block", verticalAlign: "middle", marginRight: 4 }} />
                Acesso Vitalício 100% Digital
              </span>
              <h3 className="plano-titulo">Formação Digital Completa</h3>
              <p className="plano-subtitulo">
                Ideal para quem deseja estudar com liberdade no celular ou computador com acesso vitalício e emitir os documentos em PDF de alta resolução.
              </p>
            </div>

            <div className="plano-preco-box">
              <span className="plano-preco-de">De R$ 497,00 por apenas</span>
              <div className="plano-parcelamento">
                <small>12x de</small>
                <strong>R$ 14,99</strong>
              </div>
              <p className="plano-a-vista">ou R$ 179,88 à vista via PIX / Boleto</p>
              <div className="plano-vitalicio-badge">
                <Infinity size={14} /> Pagamento Único • Acesso Vitalício
              </div>
            </div>

            <ul className="plano-vantagens-lista">
              <li className="plano-vantagem-item" style={{ background: "#ecfdf5", padding: "8px 12px", borderRadius: 8, border: "1px solid #a7f3d0" }}>
                <Infinity size={18} className="plano-vantagem-destaque-icone" style={{ color: "#059669" }} />
                <span><strong>Acesso Vitalício Ilimitado</strong>: estude para sempre, sem mensalidades e sem prazo para expirar</span>
              </li>
              <li className="plano-vantagem-item">
                <Check size={18} className="plano-vantagem-icone" />
                <span>Acesso irrestrito a todas as <strong>30 disciplinas</strong> teológicas</span>
              </li>
              <li className="plano-vantagem-item">
                <Check size={18} className="plano-vantagem-icone" />
                <span><strong>Biblioteca Digital</strong> com apostilas e +100 obras raras em PDF</span>
              </li>
              <li className="plano-vantagem-item">
                <Check size={18} className="plano-vantagem-icone" />
                <span><strong>Audiobooks</strong> narrados e preleções em estúdio</span>
              </li>
              <li className="plano-vantagem-item">
                <Check size={18} className="plano-vantagem-icone" />
                <span><strong>Tutor IA Teológico 24h</strong> para exegese, línguas originais e dúvidas</span>
              </li>
              <li className="plano-vantagem-item">
                <Check size={18} className="plano-vantagem-icone" />
                <span>Provas modulares com gabarito fundamentado</span>
              </li>
              <li className="plano-vantagem-item">
                <Check size={18} className="plano-vantagem-icone" />
                <span><strong>Diploma & Certificado Digital</strong> em PDF de Alta Resolução</span>
              </li>
              <li className="plano-vantagem-item">
                <Check size={18} className="plano-vantagem-icone" />
                <span><strong>Histórico Escolar Oficial Digital</strong> (1.500 Horas)</span>
              </li>
              <li className="plano-vantagem-item">
                <Check size={18} className="plano-vantagem-icone" />
                <span><strong>Credencial Digital de Teólogo</strong> com foto e QR Code</span>
              </li>
              <li className="plano-vantagem-item">
                <Check size={18} className="plano-vantagem-icone" />
                <span>Validação pública de autenticidade no portal</span>
              </li>
            </ul>

            <Link to="/cadastro?plano=digital" className="plano-btn-cta plano-btn-cta-secundario">
              <span>Matricular no Plano Digital</span>
              <Sparkles size={18} />
            </Link>
          </div>

          {/* PLANO 2: FÍSICO MINISTERIAL (DESTAQUE) */}
          <div className="plano-card plano-card-destaque">
            <div className="plano-badge-topo">
              <Crown size={15} /> Mais Escolhido Pelos Alunos
            </div>

            <div className="plano-header">
              <span className="plano-selo-tipo">
                <Infinity size={14} style={{ display: "inline-block", verticalAlign: "middle", marginRight: 4 }} />
                Acesso Vitalício + Kit Físico de Formatura
              </span>
              <h3 className="plano-titulo">Formação Completa + Kit Físico Ministerial</h3>
              <p className="plano-subtitulo">
                A experiência solene definitiva com acesso vitalício: credencial em cartão PVC rígido e diploma em alta gramatura com selo dourado na sua casa.
              </p>
            </div>

            <div className="plano-preco-box">
              <span className="plano-preco-de">De R$ 890,00 por apenas</span>
              <div className="plano-parcelamento">
                <small>12x de</small>
                <strong>R$ 29,70</strong>
              </div>
              <p className="plano-a-vista">ou R$ 297,00 à vista via PIX / Cartão</p>
              <div className="plano-vitalicio-badge">
                <Infinity size={14} /> Pagamento Único • Acesso Vitalício
              </div>
            </div>

            <ul className="plano-vantagens-lista">
              <li className="plano-vantagem-item" style={{ background: "#fef3c7", padding: "8px 12px", borderRadius: 8, border: "1px solid #fde68a" }}>
                <Infinity size={18} className="plano-vantagem-destaque-icone" style={{ color: "#b45309" }} />
                <span><strong>Acesso Vitalício Ilimitado</strong> + TUDO o que está incluso no Plano Digital</span>
              </li>
              <li className="plano-vantagem-item">
                <Check size={18} className="plano-vantagem-icone" />
                <span><strong>Credencial Oficial em Cartão PVC Rígido</strong> (qualidade de documento com foto, dados ministeriais e QR Code)</span>
              </li>
              <li className="plano-vantagem-item">
                <Check size={18} className="plano-vantagem-icone" />
                <span><strong>Diploma de Bacharel Livre em Papel Alta Gramatura</strong> com <strong>Selo Metalizado em Relevo Dourado</strong> da Reitoria</span>
              </li>
              <li className="plano-vantagem-item">
                <Check size={18} className="plano-vantagem-icone" />
                <span><strong>Histórico Escolar Oficial Impresso e Autenticado</strong> com chancelas da Secretaria Acadêmica</span>
              </li>
              <li className="plano-vantagem-item">
                <Check size={18} className="plano-vantagem-icone" />
                <span><strong>Porta-Credencial Executivo & Cordão Oficial</strong></span>
              </li>
              <li className="plano-vantagem-item">
                <Truck size={18} className="plano-vantagem-destaque-icone" />
                <span><strong>Frete Grátis com Seguro e Código de Rastreio</strong> dos Correios para todo o Brasil</span>
              </li>
              <li className="plano-vantagem-item">
                <Check size={18} className="plano-vantagem-icone" />
                <span>Embalagem protetora reforçada para guarda do acervo</span>
              </li>
            </ul>

            <Link to="/cadastro?plano=fisico" className="plano-btn-cta plano-btn-cta-primario">
              <span>Garantir Formação + Kit Físico Oficial</span>
              <Crown size={18} />
            </Link>
          </div>
        </div>

        {/* Faixa de Garantia e Confiança */}
        <div className="plano-garantia-faixa">
          <div className="plano-garantia-card">
            <Infinity size={32} color="#f4b400" style={{ flexShrink: 0 }} />
            <div>
              <h4>Acesso Vitalício Garantido</h4>
              <p>Pague uma única vez. Seu acesso à plataforma, apostilas e atualizações nunca expira, sem mensalidades.</p>
            </div>
          </div>
          <div className="plano-garantia-card">
            <ShieldCheck size={32} color="#f4b400" style={{ flexShrink: 0 }} />
            <div>
              <h4>Garantia Incondicional de 7 Dias</h4>
              <p>Experimente a plataforma. Se achar que não é para você, devolvemos 100% do seu investimento.</p>
            </div>
          </div>
          <div className="plano-garantia-card">
            <Lock size={32} color="#f4b400" style={{ flexShrink: 0 }} />
            <div>
              <h4>Pagamento Seguro & Criptografado</h4>
              <p>Ambiente seguro processado pela instituição bancária Asaas com liberação imediata via PIX.</p>
            </div>
          </div>
          <div className="plano-garantia-card">
            <CheckCircle2 size={32} color="#f4b400" style={{ flexShrink: 0 }} />
            <div>
              <h4>Amparo Legal Decreto nº 5.154/2004</h4>
              <p>Curso livre com validade eclesiástica e ministerial reconhecida em todo o território nacional.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios (Grid) */}
      <section style={{ backgroundColor: "#f8fafc", padding: "80px 20px", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "2.2rem", marginBottom: "50px", color: "#0f2a43", fontWeight: "bold" }}>Por que escolher a Teologia Acessível?</h2>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            {/* Benefício 1 */}
            <div className="apresentacao-beneficio-card" style={{ backgroundColor: "#ffffff", padding: "40px 30px", borderRadius: "12px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px rgba(0,0,0,0.02)" }}>
              <div className="apresentacao-beneficio-icone" style={{ backgroundColor: "rgba(15, 42, 67, 0.08)", width: "60px", height: "60px", borderRadius: "12px", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "20px" }}>
                <BookOpen size={28} color="#0f2a43" />
              </div>
              <h3 style={{ fontSize: "1.3rem", marginBottom: "12px", color: "#0f2a43", fontWeight: "bold" }}>30 Apostilas Completas</h3>
              <p style={{ color: "#475569", lineHeight: "1.6", margin: 0 }}>Material didático aprofundado, cobrindo todos os campos da teologia. Do básico ao avançado, material 100% integral para leitura digital interativa.</p>
            </div>

            {/* Benefício 2 */}
            <div className="apresentacao-beneficio-card" style={{ backgroundColor: "#ffffff", padding: "40px 30px", borderRadius: "12px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px rgba(0,0,0,0.02)" }}>
              <div className="apresentacao-beneficio-icone" style={{ backgroundColor: "rgba(15, 42, 67, 0.08)", width: "60px", height: "60px", borderRadius: "12px", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "20px" }}>
                <Headphones size={28} color="#0f2a43" />
              </div>
              <h3 style={{ fontSize: "1.3rem", marginBottom: "12px", color: "#0f2a43", fontWeight: "bold" }}>Audiobooks e Preleções</h3>
              <p style={{ color: "#475569", lineHeight: "1.6", margin: 0 }}>Não tem tempo de ler? Ouça as apostilas através do nosso narrador profissional ou acesse preleções gravadas em estúdio com vozes oficiais.</p>
            </div>

            {/* Benefício 3 */}
            <div className="apresentacao-beneficio-card" style={{ backgroundColor: "#ffffff", padding: "40px 30px", borderRadius: "12px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px rgba(0,0,0,0.02)" }}>
              <div className="apresentacao-beneficio-icone" style={{ backgroundColor: "rgba(15, 42, 67, 0.08)", width: "60px", height: "60px", borderRadius: "12px", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "20px" }}>
                <MonitorPlay size={28} color="#0f2a43" />
              </div>
              <h3 style={{ fontSize: "1.3rem", marginBottom: "12px", color: "#0f2a43", fontWeight: "bold" }}>Tutor IA 24h</h3>
              <p style={{ color: "#475569", lineHeight: "1.6", margin: 0 }}>Tem dúvidas sobre o texto grego, hebraico ou doutrinas? Nosso Assistente de Inteligência Artificial tira suas dúvidas teológicas a qualquer hora.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Legal: Legislação do Curso Livre */}
      <section style={{ padding: "80px 20px", maxWidth: "900px", margin: "0 auto", backgroundColor: "#ffffff" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "35px", justifyContent: "center" }}>
          <ShieldCheck size={40} color="#0f2a43" />
          <h2 style={{ fontSize: "2.2rem", margin: 0, color: "#0f2a43", fontWeight: "bold" }}>Amparo Legal e Reconhecimento</h2>
        </div>
        
        <div style={{ backgroundColor: "#f8fafc", padding: "40px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7", marginBottom: "20px", color: "#334155" }}>
            O Curso de Teologia oferecido pela Teologia Acessível enquadra-se na categoria de <strong>Cursos Livres</strong>, previstos na legislação brasileira. Mas o que isso significa para você?
          </p>

          <h3 style={{ fontSize: "1.3rem", color: "#0f2a43", marginTop: "35px", marginBottom: "15px", fontWeight: "bold" }}>1. Base Legal: Lei de Diretrizes e Bases da Educação</h3>
          <p style={{ color: "#475569", lineHeight: "1.6", marginBottom: "20px" }}>
            Os Cursos Livres têm como Base Legal o <strong>Decreto Presidencial nº 5.154 de 23 de julho de 2004</strong> e as normas da Resolução CNE nº 04/99 – MEC (art. 7º, § 3º) de 7 de outubro de 1999. Esses cursos não requerem autorização prévia ou reconhecimento do Ministério da Educação (MEC) para serem ministrados, pois não são cursos de nível superior (Graduação), mas sim de qualificação, aperfeiçoamento e capacitação profissional ou eclesiástica.
          </p>

          <h3 style={{ fontSize: "1.3rem", color: "#0f2a43", marginTop: "35px", marginBottom: "15px", fontWeight: "bold" }}>2. Foco Confessional e Ministerial</h3>
          <p style={{ color: "#475569", lineHeight: "1.6", marginBottom: "20px" }}>
            Cursos Livres de Teologia (Básico, Médio e Bacharelado Livre) são focados na formação ministerial, eclesiástica e apologética. Eles são amplamente aceitos e exigidos por conselhos de pastores, convenções denominacionais e igrejas locais para a consagração de obreiros, pastores, missionários e líderes, tendo <strong>validade intra-corpus</strong> (dentro das organizações religiosas).
          </p>

          <h3 style={{ fontSize: "1.3rem", color: "#0f2a43", marginTop: "35px", marginBottom: "15px", fontWeight: "bold" }}>3. Liberdade de Currículo (Sem Interferência do Estado)</h3>
          <p style={{ color: "#475569", lineHeight: "1.6", marginBottom: "20px" }}>
            Por ser um curso livre, a Teologia Acessível tem autonomia para montar a grade curricular de forma 100% bíblica e focada no Reino de Deus. Cursos regulamentados pelo MEC são obrigados a seguir matrizes curriculares científicas amplas, muitas vezes diluindo o ensino doutrinário e exigindo matérias seculares no curso de Teologia. Aqui, você aprende Teologia pura e cristocêntrica.
          </p>

          <div style={{ marginTop: "45px", padding: "25px", backgroundColor: "rgba(15, 42, 67, 0.04)", borderRadius: "8px", borderLeft: "4px solid #0f2a43", display: "flex", gap: "20px", alignItems: "flex-start" }}>
            <Award size={32} color="#0f2a43" style={{ flexShrink: 0, marginTop: "2px" }} />
            <div>
              <h4 style={{ margin: "0 0 10px 0", fontSize: "1.2rem", color: "#0f2a43", fontWeight: "bold" }}>Certificação Teologia Acessível</h4>
              <p style={{ margin: 0, color: "#475569", fontSize: "1rem", lineHeight: "1.6" }}>
                Ao concluir os 30 módulos do curso, você receberá o <strong>Diploma de Conclusão em Teologia Bíblica</strong>, atestando sua aptidão e conhecimento nas Escrituras Sagradas, preparado para atuar na docência da Escola Dominical, missões e discipulado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section style={{ backgroundColor: "#0f2a43", padding: "80px 20px", textAlign: "center", color: "#ffffff" }}>
        <h2 style={{ fontSize: "2.8rem", fontWeight: "bold", marginBottom: "20px", color: "#ffffff" }}>Sua chamada não pode esperar.</h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "40px", maxWidth: "600px", margin: "0 auto 40px auto", color: "#cbd5e1", lineHeight: "1.6" }}>
          Faça parte de uma geração de cristãos que conhecem a Palavra em profundidade e estão prontos para defender sua fé.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
          <Link to="/cadastro" style={{ backgroundColor: "#ffffff", color: "#0f2a43", padding: "18px 40px", fontSize: "1.2rem", borderRadius: "8px", textDecoration: "none", fontWeight: "bold", display: "inline-block", boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}>
            Garantir Minha Vaga • Acesso Vitalício
          </Link>
          <button
            onClick={handleClicarInstalar}
            style={{
              backgroundColor: "rgba(244, 180, 0, 0.15)",
              border: "2px solid #f4b400",
              color: "#f4b400",
              padding: "16px 32px",
              fontSize: "1.15rem",
              borderRadius: "8px",
              fontWeight: "700",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              transition: "all 0.2s ease",
            }}
            title="Instalar Aplicativo Oficial no seu celular ou PC"
          >
            <Download size={20} />
            <span>Instalar Aplicativo</span>
          </button>
        </div>
        <p style={{ marginTop: "20px", fontSize: "0.95rem", color: "#94a3b8", display: "inline-flex", alignItems: "center", gap: "8px" }}>
          <Infinity size={18} color="#38bdf8" />
          <span>Matrícula única com <strong>Acesso Vitalício Imediato</strong> e sem cobranças adicionais futuras.</span>
        </p>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#f8fafc", padding: "40px 20px", textAlign: "center", color: "#64748b", fontSize: "0.95rem", borderTop: "1px solid #e2e8f0" }}>
        <p style={{ margin: "0 0 10px 0" }}>&copy; {new Date().getFullYear()} Teologia Acessível. Todos os direitos reservados.</p>
        <p style={{ margin: 0, fontSize: "0.85rem", color: "#94a3b8" }}>
          Amparado pelo Decreto Presidencial nº 5.154/2004 e Deliberação CEE 14/97 (Indicação CEE 14/97).
        </p>
      </footer>

      <ModalInstalarApp
        aberto={modalInstalarAberto}
        onFechar={() => setModalInstalarAberto(false)}
      />

    </div>
  );
}
