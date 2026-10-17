import { X, AlertCircle, Lock, Check, BookOpen } from "lucide-react";
import type { Disciplina } from "../../types";

interface ModalBloqueioProps {
  modalBloqueio: {
    bloqueio: "pre_requisito" | "limite_diario";
    titulo: string;
    mensagem: string;
    disciplina?: Disciplina;
  } | null;
  onClose: () => void;
  onLiberarTudo: (discId: string) => void;
}

export default function ModalBloqueio({
  modalBloqueio,
  onClose,
  onLiberarTudo,
}: ModalBloqueioProps) {
  if (!modalBloqueio) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 520 }}>
        <div className="modal-header">
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {modalBloqueio.bloqueio === "limite_diario" ? (
              <AlertCircle size={24} color="#dc2626" />
            ) : (
              <Lock size={24} color="#f59e0b" />
            )}
            <h3 style={{ margin: 0, fontSize: "1.1rem", color: "#0f172a" }}>
              {modalBloqueio.titulo}
            </h3>
          </div>
          <button className="btn-fechar" onClick={onClose}>
            <X size={18} />
          </button>
        </div>
        <div className="modal-corpo" style={{ padding: "16px 20px" }}>
          <p style={{ fontSize: "0.92rem", lineHeight: 1.5, color: "#334155" }}>
            {modalBloqueio.mensagem}
          </p>

          {modalBloqueio.bloqueio === "pre_requisito" && modalBloqueio.disciplina && (
            <div style={{ marginTop: 14, background: "#f8fafc", padding: 12, borderRadius: 8, border: "1px solid #e2e8f0" }}>
              <strong style={{ fontSize: "0.85rem", color: "#0f2a43", display: "block", marginBottom: 8 }}>
                Ações recomendadas para desbloquear:
              </strong>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <button
                  className="btn btn-sm btn-primario"
                  onClick={() => {
                    onLiberarTudo(modalBloqueio.disciplina!.id);
                    onClose();
                  }}
                >
                  <Check size={14} /> Marcar Estudo Completo (Liberar Agora)
                </button>
                <a
                  href={modalBloqueio.disciplina.pdfArquivo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm btn-contorno"
                >
                  <BookOpen size={14} /> Abrir PDF da Apostila
                </a>
              </div>
            </div>
          )}
        </div>
        <div className="modal-rodape" style={{ padding: "12px 20px" }}>
          <button className="btn btn-contorno" onClick={onClose}>
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}