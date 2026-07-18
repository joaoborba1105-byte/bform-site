const RESULTS = [
  {
    metric: "30",
    unit: "–50min",
    desc: "Sessões objetivas, sem tempo desperdiçado na academia.",
    ctx: "Duração média"
  },
  {
    metric: "8",
    unit: "sem.",
    desc: "Ciclo de mesociclo com progressão mensurável e ajuste de carga.",
    ctx: "Estrutura de treino"
  },
  {
    metric: "100",
    unit: "%",
    desc: "Planejamento individual — nenhum aluno treina em um plano padrão.",
    ctx: "Personalização"
  }
];

export default function Results() {
  return (
    <section className="results" id="resultados">
      <div className="container reveal" style={{ paddingTop: 70 }}>
        <div className="section-head" style={{ marginBottom: 0 }}>
          <div className="eyebrow">Resultados</div>
          <h2>O que a experiência entrega, em números.</h2>
        </div>
      </div>
      <div className="results-grid" style={{ marginTop: 60 }}>
        {RESULTS.map((r) => (
          <div className="result-card reveal" key={r.ctx}>
            <div className="metric">
              {r.metric}
              <span>{r.unit}</span>
            </div>
            <div className="desc">{r.desc}</div>
            <div className="ctx">{r.ctx}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
