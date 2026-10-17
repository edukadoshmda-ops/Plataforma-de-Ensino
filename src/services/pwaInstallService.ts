// src/services/pwaInstallService.ts

declare global {
  interface Window {
    __pwaPrompt?: any;
  }
}

if (typeof window !== "undefined") {
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    window.__pwaPrompt = e;
  });
}

/**
 * Dispara a instalação nativa do PWA diretamente sem exigir cliques na barra de endereços.
 * Retorna true se abriu o prompt nativo do navegador, ou false se o navegador não suporta prompt direto (ex: iOS ou já instalado).
 */
export async function dispararInstalacaoDireta(): Promise<boolean> {
  const promptEvent = typeof window !== "undefined" ? window.__pwaPrompt : null;

  if (promptEvent && typeof promptEvent.prompt === "function") {
    try {
      await promptEvent.prompt();
      const choice = await promptEvent.userChoice;
      if (choice && choice.outcome === "accepted") {
        window.__pwaPrompt = null;
      }
      return true;
    } catch {
      return false;
    }
  }

  return false;
}
