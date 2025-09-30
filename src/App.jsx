import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CadastroProduto from "./pages/CadastroProduto";

export default function App() {
  return (
    <Router>
      <nav style={{ padding: 12, background: "#f6f6f6" }}>
        <Link to="/" style={{ marginRight: 12 }}>🏠 Home</Link>
        <Link to="/cadastro">📦 Cadastrar Produto</Link>
      </nav>

      <div style={{ padding: 16 }}>
        <Routes>
          <Route path="/" element={<div>Bem-vindo! Clique em "Cadastrar Produto".</div>} />
          <Route path="/cadastro" element={<CadastroProduto />} />
        </Routes>
      </div>
    </Router>
  );
}
