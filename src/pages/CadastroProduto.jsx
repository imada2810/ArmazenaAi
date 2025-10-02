import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CadastroProduto() {
  const [produto, setProduto] = useState({ nome: "", precoCusto: "", precoFinal: "" });
  const [produtos, setProdutos] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!produto.nome || !produto.precoCusto || !produto.precoFinal) return;
    setProdutos([...produtos, produto]);
    setProduto({ nome: "", precoCusto: "", precoFinal: "" });
  };

  const handleDelete = (index) => {
    const novosProdutos = produtos.filter((_, i) => i !== index);
    setProdutos(novosProdutos);
  };

  return (
    <div style={styles.page}>
      <div style={styles.wrapper}>
        {/* Card de cadastro */}
        <div style={styles.card}>
          <h2 style={styles.title}>Cadastro de Produto</h2>

          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="text"
              name="nome"
              value={produto.nome}
              onChange={handleChange}
              style={styles.input}
              placeholder="Nome do Produto"
            />
            <input
              type="number"
              name="precoCusto"
              value={produto.precoCusto}
              onChange={handleChange}
              style={styles.input}
              placeholder="Preço de Custo"
            />
            <input
              type="number"
              name="precoFinal"
              value={produto.precoFinal}
              onChange={handleChange}
              style={styles.input}
              placeholder="Preço Final"
            />
            <button type="submit" style={styles.button}>
              Salvar Produto
            </button>
          </form>

          <Link to="/" style={styles.link}>
            Voltar para Home
          </Link>
        </div>

        {/* Card de listagem */}
        <div style={styles.card}>
          <h2 style={styles.title}>Produtos Cadastrados</h2>
          {produtos.length === 0 ? (
            <p style={{ color: "#333" }}>Nenhum produto cadastrado.</p>
          ) : (
            <ul style={styles.list}>
              {produtos.map((p, i) => (
                <li key={i} style={styles.listItem}>
                  <div style={{ flex: 1, color: "#111" }}>
                    <strong>{p.nome}</strong> — Custo: R${p.precoCusto} | Final: R${p.precoFinal}
                  </div>
                  <button onClick={() => handleDelete(i)} style={styles.deleteButton}>
                    Excluir
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    margin: 0,
    background: "#ffffff",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: "24px",
    width: "100%",
    maxWidth: "900px",
  },
  card: {
    flex: 1,
    background: "#fff",
    padding: "24px",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
    textAlign: "center",
  },
  title: {
    marginBottom: "16px",
    color: "#2b6cb0",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "10px 12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
    textAlign: "center",
  },
  button: {
    padding: "12px 16px",
    borderRadius: "6px",
    background: "#2b6cb0",
    color: "#fff",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer",
  },
  link: {
    marginTop: "12px",
    display: "inline-block",
    color: "#2b6cb0",
    textDecoration: "none",
    fontWeight: "bold",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    background: "#edf2f7", // fundo cinza claro
    padding: "10px",
    borderRadius: "6px",
    marginBottom: "8px",
    textAlign: "left",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deleteButton: {
    padding: "6px 10px",
    borderRadius: "6px",
    background: "#e53e3e",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: "bold",
  },
};
