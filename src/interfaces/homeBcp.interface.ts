export interface INavBarRoute {
  id: number;
  path: string;
  name: string;
}

export interface IHomeCarrousel {
  id: number;
  title: string;
  subtitle?: string;
  cta: string;
  img: string;
}

export interface ICardViaBcp {
  id: number;
  img: string;
  title: string;
  cintillo?: string;
}

export interface IHomeCarrouselNovedades {
  id: number;
  promocion: string;
  title: string;
  text: string;
  cta: string;
  img: string;
}

export interface IhomeClienteDigital {
  id: number;
  tag?: string;
  icon: string;
  title: string;
  text: string;
  cta: string;
  img: string;
}

export interface IhomeLanzamientos {
  id: number;
  img: string;
  title: string;
  text: string;
  cta: string;
}

export interface IFooterRoute {
  id: number;
  title: string;
  links: Array<{
    name: string;
    url: string;
  }>;
}

export interface IFooterContacto {
  id: number;
  icon: string;
  title: string;
  link: string;
}

export interface IFooterApps {
  id: number;
  icon: string;
  title: string;
  link: string;
}
export interface IFooterRRss {
  id: number;
  icon: string;
  link: string;
}
