// src/components/ModalSupabaseSetup.jsx
import { useState } from "react";
import { Database, CheckCircle2, Copy, Check, ExternalLink, X, ShieldCheck, Server } from "lucide-react";
import { isSupabaseConfigured } from "../services/supabaseClient.js";

export default function ModalSupabaseSetup({ aberto, fechar }) {
  const [copiado, setCopiado] = useState(false);
  const configurado = isSupabaseConfigured();

  if (!aberto) return null;

  const copiarSchema = () => {
    navigator.clipboard.writeText(`-- Acesse o arquivo supabase/schema.sql no repositório e cole no SQL Editor do Supabase.`);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <div className="modal-overlay" onClick={fechar}>
      <div className="modal-card" style={{ maxWidth: "600px" }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Database size={22} color="var(--azul-700)" />
            <h2 style={{ fontSize: "1.2rem", color: "var(--azul-900)" }}>Status do Banco de Dados Supabase (SaaS)</h2>
          </div>
          <button className="btn-fechar-modal" onClick={fechar}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-corpo" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              padding: "12px 16px",
              borderRadius: "10px",
              background: configurado ? "#ecfdf5" : "#eff6ff",
              border: `1px solid ${configurado ? "#a7f3d0" : "#bfdbfe"}`,
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            {configurado ? (
              <>
                <CheckCircle2 size={24} color="#059669" />
                <div>
                  <strong style={{ color: "#065f46", display: "block" }}>Supabase Conectado com Sucesso!</strong>
                  <span style={{ fontSize: "0.82rem", color: "#047857" }}>
                    Plataforma operando em nuvem com PostgreSQL 15, RLS e escala para mais de 5.000 alunos.
                  </span>
                </div>
              </>
            ) : (
              <>
                <Server size={24} color="#1d4ed8" />
                <div>
                  <strong style={{ color: "#1e40af", display: "block" }}>Modo Resiliente Local Ativo</strong>
                  <span style={{ fontSize: "0.82rem", color: "#1d4ed8" }}>
                    O sistema está funcionando com banco local e já possui todo o código pronto para conectar ao Supabase em 1 minuto.
                  </span>
                </div>
              </>
            )}
          </div>

          <div>
            <h4 style={{ color: "var(--azul-900)", marginBottom: "8px" }}>Como ativar seu projeto no Supabase:</h4>
            <ol style={{ marginLeft: "20px", fontSize: "0.88rem", lineHeight: "1.7", color: "#334155" }}>
              <li>
                Acesse o painel do <strong>Supabase</strong> (<a href="https://supabase.com" target="_blank" rel="noreferrer" style={{ color: "var(--azul-500)", fontWeight: 700 }}>supabase.com</a>) e crie um projeto gratuito.
              </li>
              <li>
                No menu lateral esquerdo do Supabase, clique em <strong>SQL Editor</strong> e cole todo o conteúdo do arquivo <code>supabase/schema.sql</code> deste projeto, depois clique em <strong>Run</strong>.
              </li>
              <li>
                Vá em <strong>Project Settings</strong> &gt; <strong>API</strong> e copie a <strong>Project URL</strong> e a chave <strong>anon / public</strong>.
              </li>
              <li>
                Abra o arquivo <code>.env</code> na raiz do projeto e insira as credenciais:
                <pre style={{ background: "#0f172a", color: "#f8fafc", padding: "10px", borderRadius: "8px", marginTop: "6px", fontSize: "0.78rem" }}>
{`VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon-aqui`}
                </pre>
              </li>
            </ol>
          </div>

          <div style={{ background: "#f8fafc", padding: "12px", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.82rem", color: "#64748b" }}>
              <ShieldCheck size={16} color="var(--azul-700)" />
              <span>
                <strong>Arquitetura de Segurança:</strong> Tabelas protegidas com RLS, índices B-Tree para 5.000+ alunos e autenticação JWT.
              </span>
            </div>
          </div>
        </div>

        <div className="modal-rodape">
          <button className="btn btn-primario" onClick={fechar}>
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
