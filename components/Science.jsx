const TAGS = [
  "Sobrecarga Progressiva",
  "Gestão da Fadiga",
  "Controle de Volume",
  "RIR",
  "Tensão Mecânica",
  "Exercícios de Alto Retorno",
  "Progressão Mensurável"
];

const STATS = [
  { num: "8", label: "Semanas por mesociclo" },
  { num: "30–50", label: "Minutos por sessão" },
  { num: "1:1", label: "Acompanhamento individual" },
  { num: "7d", label: "Ciclo de ajuste" }
];

export default function Science() {
  return (
    <section className="section science" id="experiencia">
      <div className="container science-grid">
        <div className="reveal">
          <div className="eyebrow">Metodologia</div>
          <h2 style={{ fontSize: "clamp(28px,3.6vw,40px)", marginTop: 18, lineHeight: 1.2 }}>
            Cada variável do treino é calculada — não estimada.
          </h2>
          <p style={{ marginTop: 20, color: "var(--muted)", fontSize: 15.5, maxWidth: 460 }}>
            A metodologia BFORM organiza sobrecarga progressiva, gestão de fadiga e controle de
            volume em um sistema único. O objetivo é obter o máximo resultado utilizando o mínimo
            tempo necessário.
          </p>
          <div className="science-tags">
            {TAGS.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="reveal science-stats">
          {STATS.map((stat) => (
            <div className="stat-box" key={stat.label}>
              <div className="num">{stat.num}</div>
              <div className="label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
