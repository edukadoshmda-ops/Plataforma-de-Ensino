// src/components/ModalInstalarApp.tsx
import React, { useState, useEffect } from "react";
import { Download, X, Smartphone, Monitor, CheckCircle, Share, PlusSquare } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

interface ModalInstalarAppProps {
  aberto: boolean;
  onFechar: () => void;
}

export default function ModalInstalarApp({ aberto, onFechar }: ModalInstalarAppProps) {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [instalado, setInstalado] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Detecta iOS (iPhone / iPad)
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIosDevice);

    // Verifica se já está em modo standalone (já instalado)
    if (window.matchMedia("(display-mode: standalone)").matches || (window.navigator as unknown as { standalone?: boolean }).standalone) {
      setInstalado(true);
    }

    // Captura o evento nativo de instalação do Chrome / Edge / Android / Windows
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => {
      setInstalado(true);
      setDeferredPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstall);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  if (!aberto) return null;

  const handleInstalar = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice.outcome === "accepted") {
        setInstalado(true);
        setDeferredPrompt(null);
      }
    } else {
      // Se não tiver o prompt direto (ex: Chrome no desktop sem prompt disparado)
      alert("Para instalar neste navegador, clique no ícone de computador/instalar na barra de endereços (ao lado da estrela de favoritos) ou adicione aos favoritos.");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(15, 42, 67, 0.75)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        padding: "16px",
      }}
      onClick={onFechar}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          maxWidth: "460px",
          width: "100%",
          padding: "28px 24px",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
          position: "relative",
          animation: "modalFadeIn 0.2s ease-out",
          color: "#1e293b",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão Fechar */}
        <button
          onClick={onFechar}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "none",
            border: "none",
            color: "#64748b",
            cursor: "pointer",
            padding: "4px",
            borderRadius: "50%",
          }}
          aria-label="Fechar"
        >
          <X size={20} />
        </button>

        {/* Cabeçalho do Instalador com Logo Oficial */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <div
            style={{
              width: "88px",
              height: "88px",
              backgroundColor: "#0f2a43",
              borderRadius: "22px",
              margin: "0 auto 14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 16px rgba(15, 42, 67, 0.25)",
              padding: "10px",
            }}
          >
            <img
              src="/logo-teologia.png"
              alt="Logo Teologia Acessível"
              style={{ width: "100%", height: "100%", objectFit: "contain", filter: "brightness(0) invert(1)" }}
            />
          </div>

          <h2 style={{ fontSize: "1.35rem", fontWeight: "800", color: "#0f2a43", margin: "0 0 6px 0" }}>
            Instalar Teologia Acessível
          </h2>
          <p style={{ margin: 0, fontSize: "0.88rem", color: "#64748b" }}>
            Aplicativo Oficial • Plataforma de Teologia Bíblica
          </p>
        </div>

        {/* Vantagens */}
        <div
          style={{
            backgroundColor: "#f8fafc",
            borderRadius: "12px",
            padding: "16px",
            marginBottom: "20px",
            fontSize: "0.85rem",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            border: "1px solid #e2e8f0",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#334155" }}>
            <CheckCircle size={16} color="#16a34a" />
            <span>Acesso imediato direto da tela inicial do seu aparelho</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#334155" }}>
            <Smartphone size={16} color="#0f2a43" />
            <span>Otimizado para Celulares (Android e iPhone) e Computadores</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#334155" }}>
            <Monitor size={16} color="#0f2a43" />
            <span>Sem barra de navegador, tela cheia rápida e leve</span>
          </div>
        </div>

        {/* Status: Já Instalado */}
        {instalado ? (
          <div style={{ textAlign: "center", padding: "12px", backgroundColor: "#f0fdf4", borderRadius: "10px", color: "#166534" }}>
            <strong>✅ Aplicativo já instalado no seu dispositivo!</strong>
            <p style={{ fontSize: "0.82rem", margin: "4px 0 0" }}>Você já pode acessá-lo pelo ícone na tela inicial.</p>
          </div>
        ) : isIOS ? (
          /* Instruções para iPhone / iPad */
          <div
            style={{
              padding: "14px",
              backgroundColor: "#f0f9ff",
              border: "1px solid #bae6fd",
              borderRadius: "12px",
              color: "#0369a1",
              fontSize: "0.86rem",
              lineHeight: "1.5",
            }}
          >
            <strong>No iPhone ou iPad:</strong>
            <ol style={{ margin: "8px 0 0 0", paddingLeft: "20px" }}>
              <li>
                Toque no botão <strong>Compartilhar</strong> <Share size={14} style={{ display: "inline", verticalAlign: "middle" }} /> no Safari.
              </li>
              <li>
                Role para baixo e selecione <strong>Adicionar à Tela de Início</strong> <PlusSquare size={14} style={{ display: "inline", verticalAlign: "middle" }} />.
              </li>
              <li>Confirme clicando em <strong>Adicionar</strong>.</li>
            </ol>
          </div>
        ) : (
          /* Botão Instalar Automático (Android / Chrome / Edge / Windows / Mac) */
          <button
            onClick={handleInstalar}
            style={{
              width: "100%",
              backgroundColor: "#0f2a43",
              color: "#ffffff",
              border: "none",
              borderRadius: "10px",
              padding: "14px 20px",
              fontSize: "1rem",
              fontWeight: "700",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              boxShadow: "0 4px 10px rgba(15, 42, 67, 0.3)",
              transition: "transform 0.1s ease, background-color 0.2s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#163a5d")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0f2a43")}
          >
            <Download size={20} />
            <span>Instalar Aplicativo Agora</span>
          </button>
        )}

        {/* Rodapé informativo */}
        <p style={{ margin: "16px 0 0 0", textAlign: "center", fontSize: "0.78rem", color: "#94a3b8" }}>
          Não ocupa espaço na memória • Gratuito e seguro
        </p>
      </div>
    </div>
  );
}
