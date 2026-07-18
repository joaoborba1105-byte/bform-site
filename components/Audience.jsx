const AUDIENCE = [
  { n: "01", label: "Rotina corrida" },
  { n: "02", label: "Quem valoriza tempo e eficiência" },
  { n: "03", label: "Saúde, estética e performance" },
  { n: "04", label: "Resultados sustentáveis, baseados em ciência" }
];

export default function Audience() {
  return (
    <section className="section audience">
      <div className="container audience-grid">
        <div className="reveal">
          <div className="eyebrow">Para Quem é a BFORM</div>
          <ul className="audience-list" style={{ marginTop: 30 }}>
            {AUDIENCE.map((item) => (
              <li key={item.n}>
                <span>{item.label}</span>
                <span className="n">{item.n}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal">
          <p className="audience-note">
            A BFORM foi desenhada para homens e mulheres que já entendem o valor do próprio
            tempo — profissionais ocupados, pais e mães, servidores públicos, autônomos e
            estudantes — e buscam <strong>saúde, estética e performance</strong> sem abrir mão de
            eficiência. Não é para quem procura um treino genérico — é para quem quer um sistema.
          </p>
        </div>
      </div>
    </section>
  );
}
