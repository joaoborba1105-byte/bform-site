"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/images/logo.jpg";

const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#metodo", label: "Método BFORM" },
  { href: "#experiencia", label: "Experiência BFORM" },
  { href: "#resultados", label: "Resultados" },
  { href: "#coach", label: "Sobre o Coach" },
  { href: "#contato", label: "Contato" }
];

const WHATSAPP_URL = "https://wa.me/5561992261209";

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${solid ? " solid" : ""}`} id="nav">
      <div className="container nav-inner">
        <a href="#inicio" className="nav-logo">
          <Image src={logo} alt="BFORM" height={26} width={30} priority style={{ height: 26, width: "auto" }} />
          BFORM
        </a>
        <nav>
          <ul className={`nav-links${open ? " open" : ""}`} id="navLinks">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href={WHATSAPP_URL} className="nav-cta">
          Iniciar Experiência
        </a>
        <button
          className="nav-toggle"
          id="navToggle"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
