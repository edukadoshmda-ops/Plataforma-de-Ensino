import { useState, useMemo } from "react";
import {
  BookMarked,
  Search,
  Sparkles,
  BookOpen,
  Languages,
  PlusCircle,
  X,
  CheckCircle2,
  Bookmark,
  ScrollText,
} from "lucide-react";

interface TermoTeologico {
  id: string;
  termo: string;
  original?: string;
  categoria:
    | "Teologia Sistemática"
    | "Grego Bíblico"
    | "Hebraico Bíblico"
    | "Hermenêutica & Exegese"
    | "Manuscritos & Cânon";
  definicao: string;
  referenciaBiblica: string;
}

const TERMOS_INICIAIS: TermoTeologico[] = [
  {
    id: "teontologia",
    termo: "Teontologia (Doutrina de Deus)",
    original: "Theos (Θεός) + Ontos (Ὄντος)",
    categoria: "Teologia Sistemática",
    definicao:
      "Estudo sistemático sobre o Ser, a natureza, os nomes e os atributos incomunicáveis (onipotência, onisciência, onipresença, imutabilidade, eternidade) e comunicáveis (amor, justiça, santidade, bondade) de Deus.",
    referenciaBiblica: "Êxodo 3:14; Salmos 139:1-10; Romanos 11:33-36",
  },
  {
    id: "cristologia",
    termo: "Cristologia & União Hipostática",
    original: "Christos (Χριστός) / Hypostasis (Ὑπόστασις)",
    categoria: "Teologia Sistemática",
    definicao:
      "Doutrina da Pessoa e Obra de Jesus Cristo. A União Hipostática afirma que em Cristo subsistem duas naturezas perfeitas e distintas — plenamente Divino (Logos eterno) e plenamente Humano — unidas em uma única Pessoa sem confusão ou divisão.",
    referenciaBiblica: "João 1:1,14; Colossenses 2:9; Filipenses 2:5-11",
  },
  {
    id: "kenosis",
    termo: "Kenosis (Esvaziamento de Cristo)",
    original: "Kenóō (Κενόω - Esvaziar)",
    categoria: "Grego Bíblico",
    definicao:
      "Termo grego de Filipenses 2:7 ('esvaziou-se a si mesmo'). Não significa que Cristo deixou de ser Deus, mas que abriu mão voluntariamente do uso independente de Suas prerrogativas de glória majestática, assumindo a forma de servo.",
    referenciaBiblica: "Filipenses 2:6-8; 2 Coríntios 8:9",
  },
  {
    id: "soteriologia",
    termo: "Soteriologia (Doutrina da Salvação)",
    original: "Sōtēria (Σωτηρία - Salvação/Livramento)",
    categoria: "Teologia Sistemática",
    definicao:
      "Estudo do plano redentor de Deus consumado na cruz de Cristo e aplicado pelo Espírito Santo, abrangendo vocação eficaz, regeneração, conversão (fé e arrependimento), justificação, adoção, santificação e glorificação.",
    referenciaBiblica: "Efésios 2:8-9; Romanos 8:29-30; Tito 3:5",
  },
  {
    id: "hilasterion",
    termo: "Propiciação (Hilasterion)",
    original: "Hilastērion (Ἱλαστήριον)",
    categoria: "Grego Bíblico",
    definicao:
      "Satisfação plena da santa justiça e da justa ira de Deus contra o pecado por meio do sacrifício substitutivo de Cristo na cruz. Na Septuaginta (LXX), traduz o 'propiciatório' (Kapporeth), a tampa da Arca da Aliança aspergida com sangue.",
    referenciaBiblica: "Romanos 3:25; 1 João 2:2; 1 João 4:10; Hebreus 9:5",
  },
  {
    id: "justificacao",
    termo: "Justificação Forense",
    original: "Dikaioō (Δικαιόω - Declarar Justo)",
    categoria: "Teologia Sistemática",
    definicao:
      "Ato judicial e instantâneo de Deus Pai pelo qual Ele perdoa todos os pecados do crente e lhe imputa a perfeita justiça de Cristo mediante a fé somente (Sola Fide), declarando-o justo diante do tribunal divino.",
    referenciaBiblica: "Romanos 3:24-28; Romanos 5:1; 2 Coríntios 5:21",
  },
  {
    id: "pneumatologia",
    termo: "Pneumatologia",
    original: "Pneuma (Πνεῦμα) / Ruach (רוּחַ)",
    categoria: "Teologia Sistemática",
    definicao:
      "Estudo teológico sobre a Terceira Pessoa da Santíssima Trindade: o Espírito Santo, Sua divindade pessoal, obra na criação, inspiração das Escrituras, regeneração, habitação (selamento), fruto do Espírito e distribuição dos dons espirituais.",
    referenciaBiblica: "João 14:16-17; Atos 1:8; 1 Coríntios 12:4-11; Gálatas 5:22-23",
  },
  {
    id: "theopneustos",
    termo: "Theopneustos (Inspiração Plenária)",
    original: "Theópneustos (Θεόπνευστος - Soprado por Deus)",
    categoria: "Grego Bíblico",
    definicao:
      "Vocábulo cunhado por Paulo em 2 Timóteo 3:16. Indica que toda a Escritura foi 'expirada' ou 'soprada por Deus', de modo que os autores humanos escreveram sob a ação sobrenatural do Espírito Santo sem erro nos manuscritos originais (inerrância).",
    referenciaBiblica: "2 Timóteo 3:16-17; 2 Pedro 1:20-21",
  },
  {
    id: "yhwh",
    termo: "Tetragrama Sagrado (YHWH / Javé / Jeová)",
    original: "יהוה (Yod-He-Vav-He)",
    categoria: "Hebraico Bíblico",
    definicao:
      "O Nome pactual e próprio de Deus no Antigo Testamento, derivado do verbo hebraico 'Hayah' (Ser/Existir), revelando Sua autoexistência eterna ('EU SOU O QUE SOU') e fidelidade inabalável à Sua aliança.",
    referenciaBiblica: "Êxodo 3:14-15; Isaías 42:8",
  },
  {
    id: "berith",
    termo: "Aliança / Concerto (Berith & Diatheke)",
    original: "Berîth (בְּרִית) / Diathēkē (Διαθήκη)",
    categoria: "Hebraico Bíblico",
    definicao:
      "Pacto solene estabelecido soberanamente por Deus com Seu povo (Aliança Noética, Abraâmica, Mosaica, Davídica e a Nova Aliança no sangue de Cristo), selado com juramento e sangue sacrificial.",
    referenciaBiblica: "Gênesis 15:18; Jeremias 31:31-34; Hebreus 9:15-17",
  },
  {
    id: "septuaginta",
    termo: "Septuaginta (LXX)",
    original: "Interpretatio Septuaginta Seniorum (70 Anciãos)",
    categoria: "Manuscritos & Cânon",
    definicao:
      "A mais antiga tradução do Antigo Testamento hebraico para o grego koiné, realizada em Alexandria (séc. III a II a.C.). Foi amplamente utilizada pelos apóstolos e pela Igreja Primitiva nas citações do Novo Testamento.",
    referenciaBiblica: "Lucas 4:17-19; Atos 8:32-33",
  },
  {
    id: "massoretico",
    termo: "Texto Massorético (TM)",
    original: "Masorah (מָסוֹרָה - Tradição)",
    categoria: "Manuscritos & Cânon",
    definicao:
      "Texto hebraico oficial do Antigo Testamento preservado com extremo rigor pelos escribas judeus chamados Massoretas (séculos VI a X d.C.), que adicionaram sinais vocálicos e notas estatísticas para evitar qualquer alteração textual.",
    referenciaBiblica: "Mateus 5:18; Salmos 119:89",
  },
  {
    id: "exegese",
    termo: "Exegese vs. Eisegese",
    original: "Exēgeomai (Ἐξηγέομαι - Extrair/Conduzir para fora)",
    categoria: "Hermenêutica & Exegese",
    definicao:
      "Exegese é a investigação rigorosa que extrai do texto bíblico o sentido original pretendido pelo autor divino/humano em seu contexto histórico-gramatical. Eisegese é o erro de projetar ideias pessoais para dentro do texto.",
    referenciaBiblica: "Neemias 8:8; 2 Timóteo 2:15",
  },
  {
    id: "parousia",
    termo: "Parousia (Segunda Vinda de Cristo)",
    original: "Parousia (Παρουσία - Presença / Chegada Real)",
    categoria: "Grego Bíblico",
    definicao:
      "Termo técnico usado no Novo Testamento para designar a chegada triunfal, pessoal, visível e gloriosa do Senhor Jesus Cristo no fim dos tempos para buscar Sua Igreja e julgar as nações.",
    referenciaBiblica: "Mateus 24:27; 1 Tessalonicenses 4:15-17; Apocalipse 1:7",
  },
  {
    id: "shekinah",
    termo: "Shekinah (Glória Habitantede Deus)",
    original: "Shekhinah (שְׁכִינָה - Habitação)",
    categoria: "Hebraico Bíblico",
    definicao:
      "Termo rabínico e teológico derivado do verbo hebraico 'shakan' (habitar), referindo-se à manifestação visível e luminosa da presença gloriosa de Deus no Tabernáculo, no Templo e de forma suprema em Cristo encarnado.",
    referenciaBiblica: "Êxodo 40:34-35; 1 Reis 8:10-11; João 1:14",
  },
  {
    id: "koinonia",
    termo: "Koinonia (Comunhão Cristã)",
    original: "Koinōnia (Κοινωνία - Participação Mútua)",
    categoria: "Grego Bíblico",
    definicao:
      "Vínculo espiritual íntimo e fraterno gerado pelo Espírito Santo que une os crentes a Cristo e uns aos outros como membros de um só Corpo, expressando-se no partir do pão, na oração e na generosidade mútua.",
    referenciaBiblica: "Atos 2:42; 1 João 1:3,7; Filipenses 2:1-2",
  },
];

interface PassagemEstudo {
  id: string;
  tema: string;
  referencia: string;
  texto: string;
  comentarioExegetico: string;
}

const PASSAGENS_DOUTRINARIAS: PassagemEstudo[] = [
  {
    id: "jo-1-1-14",
    tema: "Cristologia & Divindade do Logos",
    referencia: "João 1:1, 14",
    texto:
      "“No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus... E o Verbo se fez carne e habitou entre nós, cheio de graça e de verdade, e vimos a sua glória, glória como do unigênito do Pai.”",
    comentarioExegetico:
      "No grego original: 'Kai Theos ēn ho Logos' (E Deus era o Verbo). A ausência do artigo antes de Theos indica natureza/essência divina, refutando tanto o arianismo (que negava a divindade eterna de Cristo) quanto o modalismo (pois o Verbo 'estava com Deus' — pros ton Theon).",
  },
  {
    id: "2tm-3-16-17",
    tema: "Bibliologia & Inspiração Plenária",
    referencia: "2 Timóteo 3:16-17",
    texto:
      "“Toda a Escritura é inspirada por Deus e útil para o ensino, para a repreensão, para a correção e para a educação na justiça, a fim de que o homem de Deus seja perfeito e perfeitamente habilitado para toda boa obra.”",
    comentarioExegetico:
      "A expressão 'theopneustos' garante a autoridade suprema e suficiência das Escrituras (Sola Scriptura) para o ministério pastoral, doutrina e santificação prática do cristão.",
  },
  {
    id: "rm-3-23-26",
    tema: "Soteriologia & Justificação pela Fé",
    referencia: "Romanos 3:23-26",
    texto:
      "“Porque todos pecaram e carecem da glória de Deus, sendo justificados gratuitamente pela sua graça, mediante a redenção que há em Cristo Jesus, a quem Deus propôs, no seu sangue, como propiciação, mediante a fé, para manifestar a sua justiça...”",
    comentarioExegetico:
      "Três pilares da redenção aparecem juntos neste texto áureo de Paulo: Justificação (tribunal forense), Redenção/Apolytrosis (resgate de escravos mediante preço) e Propiciação/Hilasterion (sacrifício que aplaca a ira santa de Deus), permitindo que Deus seja simultaneamente 'justo e justificador'.",
  },
  {
    id: "ef-2-8-10",
    tema: "Graça Soberana & Boas Obras",
    referencia: "Efésios 2:8-10",
    texto:
      "“Porque pela graça sois salvos, mediante a fé; e isto não vem de vós; é dom de Deus; não de obras, para que ninguém se glorie. Pois somos feitura dele, criados em Cristo Jesus para boas obras, as quais Deus de antemão preparou para que andássemos nelas.”",
    comentarioExegetico:
      "A salvação não é alcançada *pelas* boas obras, mas *para* as boas obras. A graça (Charis) é a causa eficiente, a fé (Pistis) é o canal instrumental, e a nova vida santificada ('poiēma' / obra-prima de Deus) é o fruto necessário.",
  },
  {
    id: "fp-2-5-11",
    tema: "A Humilhação e Exaltação de Cristo",
    referencia: "Filipenses 2:5-11",
    texto:
      "“Tende em vós o mesmo sentimento que houve também em Cristo Jesus, pois ele, subsistindo em forma de Deus, não julgou como usurpação o ser igual a Deus; antes, a si mesmo se esvaziou, assumindo a forma de servo... Pelo que também Deus o exaltou sobremaneira e lhe deu o nome que está acima de todo nome.”",
    comentarioExegetico:
      "O 'Hino Cristológico' descreve a parábola descendente da encarnação e morte vicária na cruz seguida pela exaltação cósmica de Jesus como Kyrios (Senhor soberano, equivalente ao YHWH de Isaías 45:23).",
  },
  {
    id: "mt-28-18-20",
    tema: "Trindade, Missiologia & Discipulado",
    referencia: "Mateus 28:18-20",
    texto:
      "“Toda a autoridade me foi dada no céu e na terra. Ide, portanto, fazei discípulos de todas as nações, batizando-os em nome do Pai, e do Filho, e do Espírito Santo; ensinando-os a guardar todas as coisas que vos tenho ordenado.”",
    comentarioExegetico:
      "Note que 'em nome' (eis to onoma) está no singular em grego, apontando para a unidade da essência divina compartilhada pelas três Pessoas coeternas: o Pai, o Filho e o Espírito Santo.",
  },
];

const STORAGE_DICIONARIO_KEY = "ta_dicionario_termos_v1";

export default function DicionarioBiblia() {
  const [aba, setAba] = useState<"dicionario" | "biblia">("dicionario");
  const [busca, setBusca] = useState("");
  const [categoriaFiltro, setCategoriaFiltro] = useState<string>("Todas");
  const [formAberto, setFormAberto] = useState(false);

  const [termos, setTermos] = useState<TermoTeologico[]>(() => {
    try {
      const salvo = localStorage.getItem(STORAGE_DICIONARIO_KEY);
      if (salvo) {
        const parsed = JSON.parse(salvo);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // ignore
    }
    return TERMOS_INICIAIS;
  });

  const [novoTermo, setNovoTermo] = useState("");
  const [novoOriginal, setNovoOriginal] = useState("");
  const [novaCategoria, setNovaCategoria] =
    useState<TermoTeologico["categoria"]>("Teologia Sistemática");
  const [novaDefinicao, setNovaDefinicao] = useState("");
  const [novaReferencia, setNovaReferencia] = useState("");
  const [msgSucesso, setMsgSucesso] = useState("");

  const handleAdicionarTermo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!novoTermo.trim() || !novaDefinicao.trim()) return;
    const item: TermoTeologico = {
      id: `termo-${Date.now()}`,
      termo: novoTermo.trim(),
      original: novoOriginal.trim() || undefined,
      categoria: novaCategoria,
      definicao: novaDefinicao.trim(),
      referenciaBiblica: novaReferencia.trim() || "Escrituras Sagradas",
    };
    const atualizada = [item, ...termos];
    setTermos(atualizada);
    localStorage.setItem(STORAGE_DICIONARIO_KEY, JSON.stringify(atualizada));
    setNovoTermo("");
    setNovoOriginal("");
    setNovaDefinicao("");
    setNovaReferencia("");
    setFormAberto(false);
    setMsgSucesso(`Termo "${item.termo}" adicionado ao Dicionário Teológico!`);
    setTimeout(() => setMsgSucesso(""), 3500);
  };

  const termosFiltrados = useMemo(() => {
    const q = busca.toLowerCase().trim();
    return termos.filter((t) => {
      const matchCat = categoriaFiltro === "Todas" || t.categoria === categoriaFiltro;
      const matchBusca =
        !q ||
        t.termo.toLowerCase().includes(q) ||
        (t.original || "").toLowerCase().includes(q) ||
        t.definicao.toLowerCase().includes(q) ||
        t.referenciaBiblica.toLowerCase().includes(q);
      return matchCat && matchBusca;
    });
  }, [termos, busca, categoriaFiltro]);

  const passagensFiltradas = useMemo(() => {
    const q = busca.toLowerCase().trim();
    if (!q) return PASSAGENS_DOUTRINARIAS;
    return PASSAGENS_DOUTRINARIAS.filter(
      (p) =>
        p.tema.toLowerCase().includes(q) ||
        p.referencia.toLowerCase().includes(q) ||
        p.texto.toLowerCase().includes(q) ||
        p.comentarioExegetico.toLowerCase().includes(q)
    );
  }, [busca]);

  const categorias = [
    "Todas",
    "Teologia Sistemática",
    "Grego Bíblico",
    "Hebraico Bíblico",
    "Hermenêutica & Exegese",
    "Manuscritos & Cânon",
  ];

  return (
    <div>
      <div
        className="pagina-titulo-area"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div>
          <div className="badge-topo-sebitan">
            <Sparkles size={14} /> Teologia Acessível • Léxico & Exegese Bíblica
          </div>
          <h1>
            <BookMarked size={28} className="icone-titulo" /> Dicionário Teológico & Bíblia de Estudo
          </h1>
          <p className="pagina-sub">
            Consulte termos técnicos da Teologia Sistemática, vocábulos em Grego/Hebraico e passagens bíblicas comentadas.
          </p>
        </div>

        <button
          type="button"
          className="btn btn-primario btn-com-icone"
          onClick={() => {
            setAba("dicionario");
            setFormAberto((v) => !v);
          }}
        >
          {formAberto ? <X size={18} /> : <PlusCircle size={18} />}
          <span>{formAberto ? "Fechar Formulário" : "Novo Termo Teológico"}</span>
        </button>
      </div>

      {msgSucesso && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 18,
            padding: "12px 16px",
            borderRadius: 10,
            background: "#dcfce7",
            color: "#166534",
            border: "1px solid #86efac",
            fontWeight: 600,
          }}
        >
          <CheckCircle2 size={18} />
          <span>{msgSucesso}</span>
        </div>
      )}

      {/* Abas e Barra de Busca */}
      <div
        className="card"
        style={{
          marginBottom: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 14,
        }}
      >
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button
            type="button"
            className={`btn btn-com-icone ${aba === "dicionario" ? "btn-primario" : "btn-contorno"}`}
            onClick={() => setAba("dicionario")}
          >
            <Languages size={17} />
            <span>Dicionário Teológico & Léxico ({termos.length})</span>
          </button>
          <button
            type="button"
            className={`btn btn-com-icone ${aba === "biblia" ? "btn-primario" : "btn-contorno"}`}
            onClick={() => setAba("biblia")}
          >
            <BookOpen size={17} />
            <span>Passagens-Chave & Exegese ({PASSAGENS_DOUTRINARIAS.length})</span>
          </button>
        </div>

        <div className="pesquisa-disciplinas-box" style={{ minWidth: 280, flex: "1 1 280px", maxWidth: 420 }}>
          <Search size={16} className="icone-pesquisa" />
          <input
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Pesquisar termo, grego, hebraico ou versículo..."
            className="input-pesquisa-disciplinas"
          />
        </div>
      </div>

      {/* Formulário para Adicionar Novo Termo */}
      {formAberto && (
        <form onSubmit={handleAdicionarTermo} className="card" style={{ marginBottom: 22, border: "1px solid #cbd5e1" }}>
          <h3 style={{ marginTop: 0, marginBottom: 14, color: "#0f2a43" }}>
            Cadastrar Novo Verbete no Dicionário Teológico
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12, marginBottom: 12 }}>
            <div>
              <label style={{ fontWeight: 600, display: "block", marginBottom: 4 }}>Termo / Conceito *</label>
              <input
                type="text"
                required
                value={novoTermo}
                onChange={(e) => setNovoTermo(e.target.value)}
                placeholder="Ex: Pericórese"
                style={{ width: "100%", padding: "9px 12px", borderRadius: 8, border: "1px solid #cbd5e1" }}
              />
            </div>
            <div>
              <label style={{ fontWeight: 600, display: "block", marginBottom: 4 }}>Termo Original (Grego / Hebraico)</label>
              <input
                type="text"
                value={novoOriginal}
                onChange={(e) => setNovoOriginal(e.target.value)}
                placeholder="Ex: Perichōrēsis (Περιχώρησις)"
                style={{ width: "100%", padding: "9px 12px", borderRadius: 8, border: "1px solid #cbd5e1" }}
              />
            </div>
            <div>
              <label style={{ fontWeight: 600, display: "block", marginBottom: 4 }}>Categoria</label>
              <select
                value={novaCategoria}
                onChange={(e) => setNovaCategoria(e.target.value as TermoTeologico["categoria"])}
                style={{ width: "100%", padding: "9px 12px", borderRadius: 8, border: "1px solid #cbd5e1", background: "#fff" }}
              >
                {categorias
                  .filter((c) => c !== "Todas")
                  .map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div style={{ marginBottom: 12 }}>
            <label style={{ fontWeight: 600, display: "block", marginBottom: 4 }}>Definição Teológica & Exegética *</label>
            <textarea
              rows={3}
              required
              value={novaDefinicao}
              onChange={(e) => setNovaDefinicao(e.target.value)}
              placeholder="Explique o significado doutrinário e bíblico do termo..."
              style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #cbd5e1", fontFamily: "inherit" }}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 260px" }}>
              <input
                type="text"
                value={novaReferencia}
                onChange={(e) => setNovaReferencia(e.target.value)}
                placeholder="Referências Bíblicas (ex: João 14:10-11; 17:21)"
                style={{ width: "100%", padding: "9px 12px", borderRadius: 8, border: "1px solid #cbd5e1" }}
              />
            </div>
            <button type="submit" className="btn btn-primario">
              Salvar no Dicionário
            </button>
          </div>
        </form>
      )}

      {aba === "dicionario" ? (
        <>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
            {categorias.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategoriaFiltro(cat)}
                className={`btn ${categoriaFiltro === cat ? "btn-primario" : "btn-contorno"}`}
                style={{ fontSize: "0.82rem", padding: "6px 14px" }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grade" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))" }}>
            {termosFiltrados.map((item) => (
              <div
                key={item.id}
                className="card"
                style={{ display: "flex", flexDirection: "column", gap: 10, borderTop: "3px solid #1e3a8a" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                  <h3 style={{ margin: 0, fontSize: "1.1rem", color: "#0f2a43" }}>{item.termo}</h3>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      padding: "3px 9px",
                      borderRadius: 999,
                      background: "#eff6ff",
                      color: "#1e40af",
                      border: "1px solid #bfdbfe",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.categoria}
                  </span>
                </div>

                {item.original && (
                  <div
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "#92400e",
                      background: "#fffbeb",
                      border: "1px solid #fde68a",
                      padding: "4px 10px",
                      borderRadius: 6,
                       alignSelf: "flex-start",
                    }}
                  >
                    Original: {item.original}
                  </div>
                )}

                <p style={{ margin: 0, fontSize: "0.94rem", color: "#334155", lineHeight: 1.6 }}>
                  {item.definicao}
                </p>

                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: 10,
                    borderTop: "1px solid #e2e8f0",
                    fontSize: "0.82rem",
                    color: "#0f2a43",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <Bookmark size={14} color="#f4b400" />
                  <span>Base Bíblica: {item.referenciaBiblica}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {passagensFiltradas.map((p) => (
            <div key={p.id} className="card" style={{ borderLeft: "4px solid #f4b400" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8, marginBottom: 10 }}>
                <span
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    padding: "4px 12px",
                    borderRadius: 999,
                    background: "#0f2a43",
                    color: "#fff",
                  }}
                >
                  {p.tema}
                </span>
                <strong style={{ color: "#1e3a8a", fontSize: "1.05rem" }}>
                  <BookOpen size={16} className="icone-inline" /> {p.referencia}
                </strong>
              </div>

              <blockquote
                style={{
                  margin: "0 0 12px 0",
                  padding: "14px 18px",
                  background: "#f8fafc",
                  borderRadius: 10,
                  border: "1px solid #e2e8f0",
                  fontStyle: "italic",
                  fontSize: "1.02rem",
                  color: "#0f172a",
                  lineHeight: 1.7,
                }}
              >
                {p.texto}
              </blockquote>

              <div style={{ fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                <strong style={{ color: "#0f2a43", display: "inline-flex", alignItems: "center", gap: 5 }}>
                  <ScrollText size={15} /> Comentário Exegético — Teologia Acessível:
                </strong>{" "}
                {p.comentarioExegetico}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
