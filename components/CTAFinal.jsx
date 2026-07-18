const WHATSAPP_URL = "https://wa.me/5561992261209";

export default function CTAFinal() {
  return (
    <section className="cta-final" id="contato">
      <div className="container reveal">
        <div className="eyebrow">Comece Agora</div>
        <h2>
          Sua experiência <span className="gold">BFORM</span> começa com uma conversa.
        </h2>
        <p>Vagas limitadas — o acompanhamento é próximo e individual, por desenho.</p>
        <div className="hero-actions">
          <a href={WHATSAPP_URL} className="btn-primary">
            Iniciar Minha Experiência BFORM
          </a>
        </div>
      </div>
    </section>
  );
}
