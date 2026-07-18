const PILLARS = [
  {
    code: "CIÊNCIA",
    title: "Ciência Aplicada",
    text: "Treinamento fundamentado em evidências científicas, com atualização constante do protocolo."
  },
  {
    code: "PROGRESSÃO",
    title: "Progressão Estruturada",
    text: "Planejamento inteligente construído sobre sobrecarga progressiva mensurável."
  },
  {
    code: "INDIVIDUAL",
    title: "Atendimento Individualizado",
    text: "Cada aluno possui objetivos, limitações e rotina únicos — o plano parte disso."
  },
  {
    code: "PRESENÇA",
    title: "Acompanhamento Próximo",
    text: "Suporte contínuo e ajustes frequentes ao longo de toda a jornada."
  },
  {
    code: "TEMPO",
    title: "Eficiência de Tempo",
    text: "Treinos objetivos, desenhados para entregar mais resultado em menos tempo."
  }
];

export default function Pillars() {
  return (
    <section className="pillars">
      <div className="container reveal" style={{ paddingTop: 70 }}>
        <div className="section-head" style={{ marginBottom: 0 }}>
          <div className="eyebrow">Pilares</div>
          <h2>Cinco princípios sustentam cada decisão de treino.</h2>
        </div>
      </div>
      <div className="pillars-grid" style={{ marginTop: 60 }}>
        {PILLARS.map((pillar) => (
          <div className="pillar reveal" key={pillar.code}>
            <span className="code">{pillar.code}</span>
            <h3>{pillar.title}</h3>
            <p>{pillar.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
