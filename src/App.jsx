import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CadastroProduto from "./pages/CadastroProduto";

function Home() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Home</h1>
        <Link to="/cadastro" style={styles.button}>
          Cadastrar Produto
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<CadastroProduto />} />
      </Routes>
    </Router>
  );
}

const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // garante que ocupa a tela toda
    background: "#f5f7fa",
  },
  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "320px",
  },
  title: {
    margin: 0,
    color: "#2b6cb0",
  },
  button: {
    padding: "12px 24px",
    borderRadius: "6px",
    background: "#2b6cb0",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px",
  },
};
