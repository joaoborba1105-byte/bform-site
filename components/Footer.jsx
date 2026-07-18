import Image from "next/image";
import logo from "@/public/images/logo.jpg";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              <Image src={logo} alt="" height={22} width={26} style={{ height: 22, width: "auto" }} />
              BFORM
            </div>
            <p className="footer-tag">
              Performance, estética e longevidade através de ciência aplicada ao treinamento.
            </p>
          </div>
          <div className="footer-col">
            <h4>Navegação</h4>
            <ul>
              <li>
                <a href="#metodo">Método BFORM</a>
              </li>
              <li>
                <a href="#experiencia">Experiência BFORM</a>
              </li>
              <li>
                <a href="#resultados">Resultados</a>
              </li>
              <li>
                <a href="#coach">Sobre o Coach</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contato</h4>
            <ul>
              <li>
                <a href="https://wa.me/5561992261209">+55 61 99226-1209</a>
              </li>
              <li>
                <a href="https://instagram.com/bformoficial" target="_blank" rel="noopener noreferrer">
                  @bformoficial
                </a>
              </li>
              <li>
                <a href="https://bform.com.br">bform.com.br</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Atendimento</h4>
            <ul>
              <li>
                <span style={{ color: "var(--muted)", fontSize: 14 }}>
                  Presencial — academia de preferência do aluno
                </span>
              </li>
              <li>
                <span style={{ color: "var(--muted)", fontSize: 14 }}>
                  Online e híbrido, mediante disponibilidade
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} BFORM. Todos os direitos reservados.</span>
          <span>PERFORMANCE — ESTÉTICA — LONGEVIDADE</span>
        </div>
      </div>
    </footer>
  );
}
