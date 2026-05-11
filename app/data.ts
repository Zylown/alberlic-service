export const COMPANY = {
  name: "ALBERLICSAC",
  legalName: "ALBERLIC S.A.C.",
  slogan: "Mudanzas, transporte y logística con cuidado profesional",
  description:
    "Servicio de mudanzas nacionales, internacionales, compartidas, carga especializada y camiones con plataforma hidráulica para hogares y empresas en Perú.",
  email: "contacto@alberlicsac.com",
  whatsapp: [
    {
      label: "Cotizaciones",
      display: "+51 900 000 000",
      number: "51900000000"
    },
    {
      label: "Operaciones",
      display: "+51 901 000 000",
      number: "51901000000"
    }
  ],
  address: "Lima, Perú",
  siteUrl: "https://www.alberlicsac.com"
};

export const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Cobertura", href: "#cobertura" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" }
];

export const services = [
  {
    title: "Transporte y mudanzas",
    summary:
      "Trasladamos hogares, oficinas y mercadería con unidades cerradas, personal capacitado y coordinación puerta a puerta.",
    icon: "truck"
  },
  {
    title: "Carga y descarga",
    summary:
      "Equipo de maniobra para subir, bajar y acomodar muebles, electrodomésticos, cajas y equipos delicados.",
    icon: "boxes"
  },
  {
    title: "Embalaje y desembalaje",
    summary:
      "Protección con cartón, stretch film, mantas, cintas y rotulado para que cada pieza llegue en buen estado.",
    icon: "package"
  },
  {
    title: "Plataforma hidráulica",
    summary:
      "Camiones con plataforma elevadora para objetos pesados, voluminosos o de acceso complicado.",
    icon: "lift"
  },
  {
    title: "Traslado de mascotas",
    summary:
      "Acompañamiento cuidadoso para mascotas, con rutas planificadas y pausas según la necesidad del viaje.",
    icon: "pet"
  },
  {
    title: "Traslado de vehículos",
    summary:
      "Movilizamos autos, motos y unidades especiales con coordinación de recojo y entrega documentada.",
    icon: "car"
  },
  {
    title: "Limpieza",
    summary:
      "Limpieza pre y post mudanza para dejar el inmueble listo al entregar, recibir o instalarte.",
    icon: "clean"
  },
  {
    title: "Mudanzas compartidas",
    summary:
      "Optimiza costos compartiendo espacio en rutas nacionales o internacionales programadas.",
    icon: "route"
  }
];

export const testimonials = [
  {
    name: "María Paredes",
    role: "Mudanza familiar, Lima a Arequipa",
    quote:
      "Llegaron puntuales, embalaron los muebles grandes y nos mantuvieron informados durante todo el traslado."
  },
  {
    name: "Diego Salazar",
    role: "Oficina corporativa",
    quote:
      "La plataforma hidráulica fue clave para mover equipos pesados sin golpes. Muy ordenados en la descarga."
  },
  {
    name: "Andrea Rojas",
    role: "Traslado con mascota",
    quote:
      "Nos ayudaron a coordinar la ruta y el cuidado de nuestra mascota. El servicio se sintió cercano y responsable."
  }
];

export const whatsappHref = (number: string, message: string) =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
