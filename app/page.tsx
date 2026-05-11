import { BrandMark } from "@/app/components/BrandMark";
import { ContactForm } from "@/app/components/ContactForm";
import { Icon } from "@/app/components/Icons";
import { Navbar } from "@/app/components/Navbar";
import { COMPANY, services, testimonials, whatsappHref } from "@/app/data";

const heroImage = "/hero-alberlic.png";

const fleetImage = "/fleet-alberlic.png";

const quoteMessage =
  "Hola, quiero cotizar un servicio de mudanza o transporte con ALBERLICSAC.";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: COMPANY.legalName,
  alternateName: COMPANY.name,
  description: COMPANY.description,
  url: COMPANY.siteUrl,
  email: COMPANY.email,
  telephone: COMPANY.whatsapp[0].display,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lima",
    addressCountry: "PE"
  },
  areaServed: [
    { "@type": "Country", name: "Perú" },
    { "@type": "City", name: "Lima" },
    { "@type": "AdministrativeArea", name: "Callao" }
  ],
  serviceType: [
    "Mudanzas nacionales",
    "Mudanzas internacionales",
    "Mudanzas compartidas",
    "Transporte de carga",
    "Carga y descarga",
    "Embalaje y desembalaje",
    "Plataforma hidráulica",
    "Traslado de mascotas",
    "Traslado de vehículos",
    "Limpieza"
  ]
};

export default function Home() {
  const mainWhatsapp = COMPANY.whatsapp[0];

  return (
    <>
      <Navbar />
      <main>
        <section
          id="inicio"
          className="hero-section"
          style={{ backgroundImage: `linear-gradient(90deg, rgba(8, 27, 51, 0.92), rgba(8, 27, 51, 0.62), rgba(8, 27, 51, 0.16)), url(${heroImage})` }}
        >
          <div className="hero-content section-shell">
            <p className="eyebrow">Servicio logístico para hogares y empresas</p>
            <h1>Mudanzas y transporte seguro en todo el Perú</h1>
            <p className="hero-copy">
              En {COMPANY.name} nos encargamos del traslado completo: embalaje,
              carga, plataforma hidráulica, ruta nacional o internacional y entrega
              cuidada de tus bienes.
            </p>
            <div className="hero-actions">
              <a
                className="primary-button"
                href={whatsappHref(mainWhatsapp.number, quoteMessage)}
              >
                Cotizar ahora
              </a>
              <a className="secondary-button" href="#servicios">
                Ver servicios
              </a>
            </div>
            <div className="hero-metrics" aria-label="Indicadores del servicio">
              <div>
                <strong>24 h</strong>
                <span>respuesta de cotización</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>rutas coordinadas</span>
              </div>
              <div>
                <strong>Perú</strong>
                <span>cobertura nacional</span>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-band" aria-label="Servicios destacados">
          <div className="section-shell trust-grid">
            <span>Mudanzas nacionales</span>
            <span>Mudanzas internacionales</span>
            <span>Camiones con plataforma</span>
            <span>Embalaje profesional</span>
          </div>
        </section>

        <section id="servicios" className="section-shell services-section">
          <div className="section-heading">
            <p className="eyebrow">Soluciones por necesidad</p>
            <h2>Servicios para trasladar, proteger y entregar sin complicaciones</h2>
            <p>
              Armamos el plan según volumen, distancia, accesos, horarios y nivel
              de protección que requiere cada carga.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card reveal" key={service.title}>
                <span className="service-icon">
                  <Icon name={service.icon} />
                </span>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="cobertura" className="coverage-section">
          <div className="section-shell coverage-grid">
            <div>
              <p className="eyebrow">Cobertura flexible</p>
              <h2>Desde Lima hacia cualquier punto del país</h2>
              <p>
                Coordinamos mudanzas urbanas, interprovinciales, compartidas e
                internacionales. Evaluamos accesos, permisos, tipo de carga,
                ventanas horarias y documentación para que el traslado avance con
                orden.
              </p>
              <div className="coverage-list">
                <span>Lima Metropolitana</span>
                <span>Callao</span>
                <span>Costa, sierra y selva</span>
                <span>Rutas internacionales</span>
              </div>
            </div>

            <div className="route-panel" aria-label="Mapa de cobertura">
              <div className="route-line" />
              <div className="route-point lima">
                <strong>Lima</strong>
                <span>Centro operativo</span>
              </div>
              <div className="route-point north">
                <strong>Norte</strong>
                <span>Trujillo, Piura, Chiclayo</span>
              </div>
              <div className="route-point south">
                <strong>Sur</strong>
                <span>Ica, Arequipa, Tacna</span>
              </div>
              <div className="route-point east">
                <strong>Centro y selva</strong>
                <span>Huancayo, Cusco, Pucallpa</span>
              </div>
            </div>
          </div>
        </section>

        <section className="fleet-section">
          <div className="section-shell fleet-grid">
            <div className="fleet-image-wrap">
              <img
                src={fleetImage}
                alt="Camión de transporte en ruta para servicio de mudanza"
              />
            </div>
            <div className="fleet-copy">
              <p className="eyebrow">Flota y protección</p>
              <h2>Camiones listos para carga delicada, pesada o voluminosa</h2>
              <p>
                Contamos con unidades para mudanzas residenciales, corporativas y
                carga programada. La plataforma hidráulica ayuda a mover piezas
                pesadas con menos riesgo y mayor control.
              </p>
              <div className="feature-list">
                <span>
                  <Icon name="shield" /> Protección de muebles y equipos
                </span>
                <span>
                  <Icon name="clock" /> Horarios coordinados con anticipación
                </span>
                <span>
                  <Icon name="map" /> Seguimiento por ruta y punto de entrega
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="proceso" className="process-section">
          <div className="section-shell">
            <div className="section-heading">
              <p className="eyebrow">Proceso claro</p>
              <h2>Así convertimos una mudanza compleja en un traslado ordenado</h2>
            </div>
            <div className="process-grid">
              {[
                ["01", "Diagnóstico", "Revisamos volumen, accesos, fechas, tipo de carga y destino."],
                ["02", "Cotización", "Definimos unidad, equipo, materiales y ruta con precio claro."],
                ["03", "Embalaje y carga", "Protegemos, rotulamos y cargamos con personal de maniobra."],
                ["04", "Traslado y entrega", "Coordinamos llegada, descarga, ubicación y desembalaje si aplica."]
              ].map(([number, title, text]) => (
                <article className="process-step" key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials-section">
          <div className="section-shell">
            <div className="section-heading">
              <p className="eyebrow">Confianza en ruta</p>
              <h2>Clientes que valoran la puntualidad y el cuidado</h2>
            </div>
            <div className="testimonials-grid">
              {testimonials.map((testimonial) => (
                <figure className="testimonial-card" key={testimonial.name}>
                  <blockquote>{testimonial.quote}</blockquote>
                  <figcaption>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="contact-section">
          <div className="section-shell contact-grid">
            <div className="contact-copy">
              <p className="eyebrow">Cotiza tu servicio</p>
              <h2>Cuéntanos qué necesitas mover y te respondemos por WhatsApp</h2>
              <p>
                Para una cotización más precisa, incluye origen, destino, fecha
                tentativa, piso, ascensor, objetos pesados y si necesitas embalaje,
                limpieza o plataforma hidráulica.
              </p>

              <div className="contact-methods">
                {COMPANY.whatsapp.map((phone) => (
                  <a
                    key={phone.number}
                    href={whatsappHref(phone.number, quoteMessage)}
                  >
                    <Icon name="phone" />
                    <span>
                      <small>{phone.label}</small>
                      <strong>{phone.display}</strong>
                    </span>
                  </a>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <a
        className="floating-whatsapp"
        href={whatsappHref(mainWhatsapp.number, quoteMessage)}
        aria-label="Cotizar por WhatsApp"
      >
        <Icon name="phone" />
        <span>WhatsApp</span>
      </a>

      <footer className="site-footer">
        <div className="section-shell footer-grid">
          <BrandMark />
          <p>
            Ofrecemos servicio de mudanzas en todo el país, mudanzas
            internacionales, mudanzas compartidas y camiones con plataforma
            elevadora.
          </p>
          <div className="footer-links">
            <a href="#servicios">Servicios</a>
            <a href="#contacto">Contacto</a>
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          </div>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
