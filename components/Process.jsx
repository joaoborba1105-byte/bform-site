const STEPS = [
  {
    num: "01",
    title: "Avaliação Estratégica",
    text: "Entendimento completo dos objetivos, rotina e histórico do aluno."
  },
  {
    num: "02",
    title: "Planejamento Individual",
    text: "Construção da estratégia de treino personalizada, sem modelos prontos."
  },
  {
    num: "03",
    title: "Acompanhamento Semanal",
    text: "Monitoramento próximo da evolução, com feedback direto do coach."
  },
  {
    num: "04",
    title: "Ajustes Contínuos",
    text: "Otimização constante da estratégia conforme a resposta do corpo."
  },
  {
    num: "05",
    title: "Evolução Consistente",
    text: "Resultados sustentáveis em estética, performance e saúde."
  }
];

export default function Process() {
  return (
    <section className="section process">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Como Funciona</div>
          <h2>Um processo em cinco etapas, do diagnóstico à evolução consistente.</h2>
        </div>
        <div className="process-list">
          {STEPS.map((step) => (
            <div className="process-item reveal" key={step.num}>
              <span className="process-num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
