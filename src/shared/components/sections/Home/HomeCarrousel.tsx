import { Swiper as Carrousel, SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/types";
import { Autoplay, Pagination, Navigation } from "swiper";
import { homeCarrousel as data } from "@/data/bcpData";
import { ButtonBcp } from "@/shared/components/UI";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const paginationClassName = "swiper-bcp-home-custom-pagination";
export const HomeCarrousel = () => {
  const onAutoplayTimeLeft = (
    s: Swiper,
    time: number,
    progressQuantity: number
  ) => {
    const selector = `.${paginationClassName} .swiper-pagination-bullet-active svg`;
    const $circle: SVGSVGElement | null = document.querySelector(selector);
    $circle?.style.setProperty("--progress", (1 - progressQuantity).toString());
  };

  return (
    <section>
      <Carrousel
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          el: `.${paginationClassName}`,
          clickable: true,
          renderBullet: function (index: number, className: string) {
            return `
            <span class="${className}">
              <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48">
                  <circle cx="24" cy="24" r="20"></circle>
                </svg>                
              </div>
            </span>`;
          },
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper bg-bcp-blue-4"
        style={{ clipPath: "ellipse(80% 100% at 40% 0%" }}>
        {data.map(({ id, title, subtitle, cta, img }) => (
          <SwiperSlide key={id}>
            <div className="text-white">
              <div className="container">
                <div className="grid grid-cols-12 h-[474px]">
                  <div className="col-span-6 relative">
                    <div className="pt-16 max-w-[560px]">
                      <p className="text-[52px] leading-[1.1] mb-3">{title}</p>
                      <p className="text-lg mb-8">{subtitle}</p>
                      <ButtonBcp title={cta} />
                    </div>
                  </div>
                  <div className="col-span-6 relative">
                    <div className="grid h-full">
                      <div className="self-end">
                        <figure className="max-w-[559px] h-[436px] mx-auto relative">
                          <img
                            src={img}
                            alt={title}
                            className="absolute top-0 object-contain w-full h-full"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Carrousel>
      <div className="relative top-2">
        <div
          className={`${paginationClassName} text-center [&>.swiper-pagination-bullet]:mx-3 [&>.swiper-pagination-bullet]:cursor-pointer`}
        />
      </div>
    </section>
  );
};
