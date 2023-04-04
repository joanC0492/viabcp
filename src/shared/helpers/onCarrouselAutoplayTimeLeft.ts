import { Swiper } from "swiper/types";

export const onCarrouselAutoplayTimeLeft = (
  s: Swiper,
  time: number,
  progressQuantity: number,
  paginationClassName: string
): void => {
  const selector = `.${paginationClassName} .swiper-pagination-bullet-active svg`;
  const $circle: SVGSVGElement | null = document.querySelector(selector);
  $circle?.style.setProperty("--progress", (1 - progressQuantity).toString());
};
