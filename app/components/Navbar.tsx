"use client";

import { useState } from "react";
import { COMPANY, navItems, whatsappHref } from "@/app/data";
import { BrandMark } from "@/app/components/BrandMark";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const mainWhatsapp = COMPANY.whatsapp[0];
  const quoteMessage =
    "Hola, quiero cotizar un servicio de mudanza o transporte con ALBERLICSAC.";

  return (
    <header className="site-header">
      <div className="top-strip">
        <span>Atención en Lima y rutas a todo el Perú</span>
        <a href={whatsappHref(mainWhatsapp.number, quoteMessage)}>
          {mainWhatsapp.display}
        </a>
      </div>

      <nav className="navbar" aria-label="Navegación principal">
        <BrandMark />

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="nav-links desktop-nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <a
          className="nav-cta desktop-nav"
          href={whatsappHref(mainWhatsapp.number, quoteMessage)}
        >
          Cotizar por WhatsApp
        </a>
      </nav>

      <div id="mobile-menu" className={`mobile-panel ${open ? "is-open" : ""}`}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a
          className="mobile-cta"
          href={whatsappHref(mainWhatsapp.number, quoteMessage)}
          onClick={() => setOpen(false)}
        >
          Cotizar por WhatsApp
        </a>
      </div>
    </header>
  );
}
