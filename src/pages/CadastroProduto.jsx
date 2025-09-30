import React, { useState, useEffect } from "react";

export default function CadastroProduto() {
  const [produto, setProduto] = useState({
    nome: "",
    precoCusto: "",
    precoFinal: ""
  });

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("produtos");
    if (saved) setProdutos(JSON.parse(saved));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto((p) => ({ ...p, [name]: value }));
  };

  const parseNumber = (v) => {
    if (!v) return null;
    const n = parseFloat(String(v).replace(",", "."));
    return Number.isNaN(n) ? null : n;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const custo = parseNumber(produto.precoCusto);
    const final = parseNumber(produto.precoFinal);

    if (!produto.nome.trim()) { alert("Preencha o nome do produto."); return; }
    if (custo === null) { alert("Preço de custo inválido."); return; }
    if (final === null) { alert("Preço final inválido."); return; }

    const novo = {
      id: Date.now(),
      nome: produto.nome.trim(),
      precoCusto: custo,
      precoFinal: final
    };

    const atualizado = [novo, ...produtos];
    setProdutos(atualizado);
    localStorage.setItem("produtos", JSON.stringify(atualizado));
    setProduto({ nome: "", precoCusto: "", precoFinal: "" });
    alert("Produto cadastrado com sucesso!");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📦 Cadastro de Produto</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Campo Nome */}
        <label style={styles.label}>
          Nome do Produto:
          <input
            style={styles.input}
            type="text"
            name="nome"
            value={produto.nome}
            onChange={handleChange}
            placeholder="Ex: Camiseta preta básica"
            required
          />
        </label>

        {/* Campo Preço de Custo */}
        <label style={styles.label}>
          Preço de Custo (R$):
          <input
            style={styles.input}
            type="number"
            name="precoCusto"
            value={produto.precoCusto}
            onChange={handleChange}
            step="0.01"
            placeholder="Ex: 25.90"
            required
          />
        </label>

        {/* Campo Preço Final */}
        <label style={styles.label}>
          Preço Final de Venda (R$):
          <input
            style={styles.input}
            type="number"
            name="precoFinal"
            value={produto.precoFinal}
            onChange={handleChange}
            step="0.01"
            placeholder="Ex: 49.90"
            required
          />
        </label>

        <button type="submit" style={styles.button}>
          ✅ Cadastrar Produto
        </button>
      </form>

      <hr style={{ margin: "20px 0" }} />

      <h3>📝 Produtos cadastrados ({produtos.length})</h3>
      {produtos.length === 0 ? (
        <p>Nenhum produto cadastrado ainda.</p>
      ) : (
        <ul style={styles.lista}>
          {produtos.map((p) => (
            <li key={p.id} style={styles.item}>
              <strong>{p.nome}</strong>  
              <br />
              Custo: <span style={{ color: "red" }}>R$ {p.precoCusto.toFixed(2)}</span>  
              {" → "}
              Final: <span style={{ color: "green" }}>R$ {p.precoFinal.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 600,
    margin: "24px auto",
    padding: 20,
    borderRadius: 10,
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    background: "#fff",
    fontFamily: "Segoe UI, Roboto, sans-serif"
  },
  title: { marginBottom: 20, textAlign: "center", color: "#2b6cb0" },
  form: { display: "grid", gap: 14 },
  label: { display: "flex", flexDirection: "column", fontWeight: 500 },
  input: {
    padding: "10px",
    borderRadius: 6,
    border: "1px solid #ccc",
    marginTop: 6,
    fontSize: 15
  },
  button: {
    padding: "12px",
    borderRadius: 6,
    border: "none",
    background: "#2b6cb0",
    color: "#fff",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: 16,
    marginTop: 8
  },
  lista: { listStyle: "none", paddingLeft: 0 },
  item: {
    marginBottom: 12,
    padding: "10px",
    borderRadius: 6,
    background: "black",
    border: "1px solid #e2e8f0"
  }
};
