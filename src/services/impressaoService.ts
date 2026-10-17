// src/services/impressaoService.ts
// Utilitário de Impressão Isolada para Documentos Acadêmicos do SEBITAN
// Permite imprimir SEPARADAMENTE:
// 1. Histórico Escolar Oficial (A4 Retrato)
// 2. Diploma de Bacharel Livre em Teologia (A4 Paisagem)
// 3. Carteirinha / Credencial de Teólogo Frente e Verso (A4 Retrato / Cartão)

export type TipoDocumentoImpressao = "historico" | "diploma" | "credencial";

export function imprimirDocumento(tipo: TipoDocumentoImpressao) {
  // 1. Limpa classes anteriores do body
  document.body.classList.remove(
    "print-somente-historico",
    "print-somente-diploma",
    "print-somente-credencial"
  );

  // 2. Adiciona a classe específica do documento que deve ser impresso
  document.body.classList.add(`print-somente-${tipo}`);

  // 3. Injeta a regra @page de orientação e margem correspondente
  let styleTag = document.getElementById("sebitan-print-orientation-style") as HTMLStyleElement | null;
  if (!styleTag) {
    styleTag = document.createElement("style");
    styleTag.id = "sebitan-print-orientation-style";
    document.head.appendChild(styleTag);
  }

  if (tipo === "diploma") {
    styleTag.textContent = `
      @media print {
        @page {
          size: A4 landscape !important;
          margin: 0mm !important;
        }
      }
    `;
  } else if (tipo === "historico") {
    styleTag.textContent = `
      @media print {
        @page {
          size: A4 portrait !important;
          margin: 8mm !important;
        }
      }
    `;
  } else if (tipo === "credencial") {
    styleTag.textContent = `
      @media print {
        @page {
          size: A4 portrait !important;
          margin: 10mm !important;
        }
      }
    `;
  }

  // 4. Limpeza automática após o diálogo de impressão
  const limpar = () => {
    document.body.classList.remove(
      "print-somente-historico",
      "print-somente-diploma",
      "print-somente-credencial"
    );
    if (styleTag) {
      styleTag.textContent = "";
    }
    window.removeEventListener("afterprint", limpar);
  };

  window.addEventListener("afterprint", limpar);

  // 5. Dispara a janela de impressão do navegador
  window.print();

  // Fallback para navegadores que não disparam afterprint
  setTimeout(limpar, 3000);
}
