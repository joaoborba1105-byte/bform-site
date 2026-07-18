export default function Manifesto() {
  return (
    <section className="section manifesto" id="metodo">
      <div className="container manifesto-grid">
        <div className="reveal">
          <div className="eyebrow">O Método</div>
          <p className="manifesto-statement" style={{ marginTop: 22 }}>
            A BFORM não vende treinos. <em>Entrega uma experiência</em> de treinamento premium,
            construída sobre ciência aplicada, estratégia e acompanhamento próximo — para quem
            valoriza resultados, saúde e tempo.
          </p>
        </div>
        <div className="reveal manifesto-meta">
          <div className="meta-row">
            <span className="k">Fundamento</span>
            <span className="v">Evidência científica</span>
          </div>
          <div className="meta-row">
            <span className="k">Abordagem</span>
            <span className="v">Individual, não padronizada</span>
          </div>
          <div className="meta-row">
            <span className="k">Duração média da sessão</span>
            <span className="v">30 – 50 min</span>
          </div>
          <div className="meta-row">
            <span className="k">Modelo</span>
            <span className="v">Acompanhamento contínuo</span>
          </div>
          <div className="meta-row" style={{ borderBottom: "none" }}>
            <span className="k">Objetivo</span>
            <span className="v">Máximo resultado, mínimo tempo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
