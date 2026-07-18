"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Como funciona o acompanhamento?",
    a: "O acompanhamento é semanal, com monitoramento da evolução e ajustes contínuos na estratégia conforme a resposta do seu corpo ao treino."
  },
  {
    q: "Preciso treinar todos os dias?",
    a: "Não. A metodologia BFORM prioriza eficiência: sessões de 30 a 50 minutos, com frequência definida de acordo com sua rotina e capacidade de recuperação."
  },
  {
    q: "O treino é presencial ou online?",
    a: "A experiência presencial da BFORM pode acontecer na academia da preferência do aluno, conforme disponibilidade e logística operacional. A estrutura também está preparada para atendimento híbrido."
  },
  {
    q: "O atendimento é vinculado a alguma academia específica?",
    a: "Não. A BFORM não está vinculada exclusivamente a nenhuma academia. A experiência presencial foi desenvolvida para se adaptar ao ambiente de treino e à rotina de cada aluno."
  },
  {
    q: "Como começo minha experiência BFORM?",
    a: "O primeiro passo é a Avaliação Estratégica, feita diretamente com o coach via WhatsApp, para entender objetivos, rotina e histórico."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section faq">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Perguntas Frequentes</div>
          <h2>O que você precisa saber antes de começar.</h2>
        </div>
        <div className="faq-list reveal">
          {FAQS.map((item, i) => (
            <div className={`faq-item${openIndex === i ? " open" : ""}`} key={item.q}>
              <button
                className="faq-q"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                {item.q}
                <span className="plus">+</span>
              </button>
              <div className="faq-a">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
