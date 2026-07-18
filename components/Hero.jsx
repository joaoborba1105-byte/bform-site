import Image from "next/image";
import coach from "@/public/images/coach.jpg";

const WHATSAPP_URL = "https://wa.me/5561992261209";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-media">
        <Image
          src={coach}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "50% 15%" }}
        />
        <div className="scan-line"></div>
        <div className="readout r1">
          <span className="tag">RIR</span> 1.8 — MRV ATINGIDO
        </div>
        <div className="readout r2">
          <span className="tag">SRA</span> JANELA DE SUPERCOMPENSAÇÃO
        </div>
        <div className="readout r3">
          <span className="tag">STATUS</span> PROGRESSÃO ATIVA
        </div>
      </div>
      <div className="container hero-content">
        <div className="hero-eyebrow eyebrow">Ciência Aplicada ao Treinamento</div>
        <h1>
          <span className="line">
            <span>Performance.</span>
          </span>
          <span className="line">
            <span>Estética.</span>
          </span>
          <span className="line">
            <span>Longevidade.</span>
          </span>
        </h1>
        <p className="hero-sub">
          A Experiência BFORM foi criada para pessoas com rotina corrida que desejam resultados
          reais — sem transformar a academia em um segundo emprego.
        </p>
        <div className="hero-actions">
          <a href={WHATSAPP_URL} className="btn-primary">
            Iniciar Minha Experiência BFORM
          </a>
          <a href="#metodo" className="btn-ghost">
            Conhecer o Método
          </a>
        </div>
      </div>
      <div className="container hero-foot">
        <span>@bformoficial</span>
        <div className="scroll-cue">
          <span>Rolar</span>
          <span className="bar"></span>
        </div>
        <span>Brasília, DF</span>
      </div>
    </section>
  );
}
