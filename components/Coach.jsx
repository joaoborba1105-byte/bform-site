import Image from "next/image";
import coach from "@/public/images/coach.jpg";

export default function Coach() {
  return (
    <section className="section coach" id="coach">
      <div className="container coach-grid">
        <div className="coach-photo reveal">
          <Image src={coach} alt="João Victor Borba, coach da BFORM" fill sizes="(max-width: 980px) 100vw, 40vw" style={{ objectFit: "cover" }} />
        </div>
        <div className="reveal">
          <div className="eyebrow">Sobre o Coach</div>
          <h2 className="coach-name">João Victor Borba</h2>
          <div className="coach-role">Personal Trainer — Graduado em Educação Física</div>
          <p className="coach-cred">
            Especialista em treinamento baseado em evidências, aplicando periodização, controle
            de RIR e gestão de fadiga ao planejamento de cada aluno.
          </p>
          <p className="coach-philosophy">
            Menos volume desnecessário. <span className="gold">Mais estratégia.</span> Mais
            resultado.
          </p>
        </div>
      </div>
    </section>
  );
}
