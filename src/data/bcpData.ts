import {
  INavBarRoute,
  IHomeCarrousel,
  IHomeCarrouselNovedades,
  ICardViaBcp,
  IhomeClienteDigital,
  IhomeLanzamientos,
  IFooterRoute,
  IFooterContacto,
  IFooterRRss,
} from "@/interfaces/homeBcp.interface";

export const headerTopRoutes: INavBarRoute[] = [
  {
    id: 1,
    path: "/",
    name: "PERSONAS",
  },
  {
    id: 2,
    path: "/",
    name: "PYMES",
  },
  {
    id: 3,
    path: "/",
    name: "EMPRESAS",
  },
];

export const navbarRoutes: INavBarRoute[] = [
  {
    id: 1,
    path: "/",
    name: "Productos",
  },
  {
    id: 2,
    path: "/",
    name: "Canales de Atención",
  },
  {
    id: 3,
    path: "/",
    name: "Beneficios",
  },
  {
    id: 4,
    path: "/",
    name: "Ayuda",
  },
];

export const homeCarrousel: IHomeCarrousel[] = [
  {
    id: 1,
    title: "¡Pide un Préstamo Personal y recibe Dinero al Instante!",
    subtitle: "Rápido, seguro, sin papeleos y sin salir de casa",
    cta: "Obténlo aquí",
    img: "/img/home/banner-home-1.png",
  },
  {
    id: 2,
    title: "¡Haz crecer tu dinero con estas super tasas!",
    subtitle:
      "Desde 7.4 % hasta 8.1 % abriendo tu Depósito a Plazo en tu app Banca Móvil BCP",
    cta: "Obtenlo aquí",
    img: "/img/home/banner-home-2.png",
  },
  {
    id: 3,
    title: "¡Tu Cuenta Premio sortea UN MILLÓN de soles extra!",
    subtitle: "",
    cta: "Participa aquí",
    img: "/img/home/banner-home-3.png",
  },
  {
    id: 4,
    title:
      "Tus compras online en Cuotas sin Intereses multiplican tus Millasx4",
    subtitle: "",
    cta: "Conoce más",
    img: "/img/home/banner-home-4.png",
  },
];

export const homeCard: ICardViaBcp[] = [
  {
    id: 1,
    img: "/img/icons/cuenta.svg",
    title: "Abrir una Cuenta",
  },
  {
    id: 2,
    img: "/img/icons/tarjeta.svg",
    title: "Obtener Tarjeta de Crédito",
    cintillo: "PROMO",
  },
  {
    id: 3,
    img: "/img/icons/sueldo.svg",
    title: "Adelantar mi Sueldo",
  },
  {
    id: 4,
    img: "/img/icons/prestamo.svg",
    title: "Solicitar un Préstamo",
  },
  {
    id: 5,
    img: "/img/icons/vehicular.svg",
    title: "SOAT desde S/42",
    cintillo: "PROMO",
  },
  {
    id: 6,
    img: "/img/icons/tarjeta+plus.svg",
    title: "Proteger mis Tarjetas",
  },
];

export const homeCarrouselNovedades: IHomeCarrouselNovedades[] = [
  {
    id: 1,
    promocion: "Tus Tarjeta BCP",
    title: "¡Tu Tarjeta de Crédito y Débito Visa BCP te traen la Fija del BCP!",
    text: "Aprovecha todos los lunes de 12 p.m. a 4 p.m. y date un gustito con PedidosYa.",
    cta: "Solicitar aquí",
    img: "/img/home/carrusel-novedades-01.png",
  },
  {
    id: 2,
    promocion: "Tus Tarjeta BCP",
    title:
      "Invierte en el Fondo CC Cupón Escalonado XXIX y podrías ganar entre 4.35% hasta 4.65% anual*",
    text: "Mira las condiciones aquí",
    cta: "Abre tu fondo aquí",
    img: "/img/home/carrusel-novedades-02.png",
  },
  {
    id: 3,
    promocion: "Tus promos BCP",
    title: "¡Tu Tarjeta de Crédito Visa BCP te devuelve hasta S/250!",
    text: "Por tus compras acumulables desde S/500 del 01 al 30 de abril del 2023",
    cta: "Participa aquí",
    img: "/img/home/carrusel-novedades-03.png",
  },
  {
    id: 4,
    promocion: "Tus promos BCP",
    title: "¡Tu tarjeta de crédito Amex te devuelve hasta S/400!",
    text: "Consume del 01 al 30 de abril con tu Tarjeta de Crédito AMEX y te devolvemos el 10% de lo consumido.",
    cta: "Participa aquí",
    img: "/img/home/carrusel-novedades-04.png",
  },
  {
    id: 5,
    promocion: "Tus promos BCP",
    title: "Compra desde dónde estés con hasta 24 cuotas sin intereses",
    text: "Solo con tu Tarjeta de Crédito BCP",
    cta: "Conoce más",
    img: "/img/home/carrusel-novedades-05.png",
  },
  {
    id: 6,
    promocion: "Tipo de cambio",
    title: "¡Cambia tus dólares y gana S/ 10,000!",
    text: "Cambia por primera vez tus dólares en Banca Móvil BCP y podrás participar en el sorteo de S/ 10,000.",
    cta: "Conoce más",
    img: "/img/home/carrusel-novedades-06.png",
  },
];

export const homeClienteDigital: IhomeClienteDigital[] = [
  {
    id: 1,
    icon: "/img/icons/escudo-blanco.svg",
    title: "Protege tus contraseñas con BCP",
    text: "Comprueba qué tanto sabes con esta breve encuesta",
    cta: "Empieza aquí",
    img: "/img/home/microsoft-teams-image.png",
  },
  {
    id: 2,
    tag: "NUEVO",
    icon: "/img/icons/tarjeta-blanca.svg",
    title: "Tarjeta de Débito Digital",
    text: "Abre una Cuenta y elige este nuevo tipo de Tarjeta",
    cta: "Conocer más",
    img: "/img/home/debito.png",
  },
  {
    id: 3,
    icon: "/img/icons/clave-blanco.svg",
    title: "Crea tu clave de Internet",
    text: "Es una clave de 6 dígitos que sirve para ingresar a Banca Móvil y Banca por Internet",
    cta: "Crear clave",
    img: "/img/home/password.png",
  },
];

export const homeLanzamientos: IhomeLanzamientos[] = [
  {
    id: 1,
    img: "/img/home/ando-desktop.svg",
    title: "¡Obtén tu Tarjeta de Crédito como jugANDO!",
    text: "Cumple sencillos retos y consíguela en 3 meses",
    cta: "Conocer más",
  },
  {
    id: 2,
    img: "/img/home/saca-tu-ruc-crece.png",
    title: "¡Saca tu RUC 20 con Crece!",
    text: "Constituye tu empresa y haz crecer tu negocio",
    cta: "Conocer más",
  },
  {
    id: 3,
    img: "/img/home/home-organizate.png",
    title: "¡Mira en qué y cuánto gastas con Organízate!",
    text: "Conócenos y ten el control de tu dinero YA",
    cta: "Conocer más",
  },
];

export const footerRoutes: IFooterRoute[] = [
  {
    id: 1,
    title: "Acerca del BCP",
    links: [
      {
        name: "¿Cómo protegemos tus datos?",
        url: "",
      },
      {
        name: "Tasas y tarifas",
        url: "",
      },
      {
        name: "Nuestra historia y principios",
        url: "",
      },
      {
        name: "Transparencia de información",
        url: "",
      },
      {
        name: "Información para inversionistas BCP",
        url: "",
      },
      {
        name: "Responsabilidad Social BCP",
        url: "",
      },
      {
        name: "ABC del BCP",
        url: "",
      },
      {
        name: "Centro de Innovación",
        url: "",
      },
      {
        name: "Declaración del Beneficiario final",
        url: "",
      },
      {
        name: "Por tu Seguridad",
        url: "",
      },
      {
        name: "Ganadores",
        url: "",
      },
      {
        name: "Solicitud de Ajustes Razonables",
        url: "",
      },
    ],
  },
  {
    id: 2,
    title: "Otros servicios",
    links: [
      {
        name: "Trabaja con nosotros",
        url: "",
      },
      {
        name: "Protocolo de Bioseguridad BCP",
        url: "",
      },
      {
        name: "Cancela tu producto",
        url: "",
      },
      {
        name: "Cancela tu seguro",
        url: "",
      },
    ],
  },
  {
    id: 3,
    title: "Ubícanos",
    links: [
      {
        name: "Encuentra la agencia más cercana",
        url: "",
      },
    ],
  },
];

export const footerContacto: IFooterContacto[] = [
  {
    id: 1,
    icon: "/img/icons/icon-whatsapp.svg",
    title: "99 311 9898",
    link: "",
  },
  {
    id: 2,
    icon: "/img/icons/icon-world.svg",
    title: "Chatea con un asesor",
    link: "",
  },
  {
    id: 3,
    icon: "/img/icons/icon-mail.svg",
    title: "Escríbenos",
    link: "",
  },
];