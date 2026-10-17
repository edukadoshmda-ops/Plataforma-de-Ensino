import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Apresentacao from "./pages/Apresentacao";
import Home from "./pages/Home";
import Playbooks from "./pages/Playbooks";
import Audiobooks from "./pages/Audiobooks";
import Artigos from "./pages/Artigos";
import Videos from "./pages/Videos";
import Testes from "./pages/Testes";
import Matricula from "./pages/Matricula";
import Pagamento from "./pages/Pagamento";
import TutorEspecialista from "./pages/TutorEspecialista";
import DicionarioBiblia from "./pages/DicionarioBiblia";
import VerificarCertificado from "./pages/VerificarCertificado";
import AdminSaaS from "./pages/AdminSaaS";

interface ProtegidoProps {
  children: React.ReactNode;
}

function Protegido({ children }: ProtegidoProps) {
  const { usuario, carregandoAuth } = useAuth();
  if (carregandoAuth) return null;
  if (!usuario) return <Navigate to="/apresentacao" replace />;
  return <>{children}</>;
}

interface RequerPagamentoProps {
  children: React.ReactNode;
}

function RequerPagamento({ children }: RequerPagamentoProps) {
  const { usuario, matricula, pagamentoConfirmado, carregandoAuth } = useAuth();
  if (carregandoAuth) return null;
  if (usuario?.role === "superadmin") return <>{children}</>;
  if (!matricula) return <Navigate to="/matricula" replace />;
  const pago = pagamentoConfirmado || matricula.status_pagamento === "pago" || matricula.pagamento === "pago";
  if (!pago) {
    return <Navigate to="/pagamento" replace />;
  }
  return <>{children}</>;
}

function RequerAdmin({ children }: { children: React.ReactNode }) {
  const { usuario, carregandoAuth } = useAuth();
  if (carregandoAuth) return null;
  if (!usuario) return <Navigate to="/apresentacao" replace />;
  if (usuario.role !== "superadmin" && usuario.role !== "professor") {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/apresentacao" element={<Apresentacao />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route
            element={
              <Protegido>
                <Layout />
              </Protegido>
            }
          >
            <Route path="/" element={<RequerPagamento><Home /></RequerPagamento>} />
            <Route path="/matricula" element={<Matricula />} />
            <Route path="/pagamento" element={<Pagamento />} />
            <Route path="/playbooks" element={<RequerPagamento><Playbooks /></RequerPagamento>} />
            <Route path="/audiobooks" element={<RequerPagamento><Audiobooks /></RequerPagamento>} />
            <Route path="/artigos" element={<RequerPagamento><Artigos /></RequerPagamento>} />
            <Route path="/videos" element={<RequerPagamento><Videos /></RequerPagamento>} />
            <Route path="/dicionario" element={<RequerPagamento><DicionarioBiblia /></RequerPagamento>} />
            <Route path="/testes" element={<RequerPagamento><Testes /></RequerPagamento>} />
            <Route path="/verificar" element={<VerificarCertificado />} />
            <Route path="/admin" element={<RequerAdmin><AdminSaaS /></RequerAdmin>} />
            <Route path="/tutor" element={<TutorEspecialista />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}