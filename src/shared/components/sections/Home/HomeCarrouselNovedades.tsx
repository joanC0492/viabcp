import { Swiper as Carrousel, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { homeCarrouselNovedades as data } from "@/data/bcpData";
import { ButtonBcp } from "@/shared/components/UI";
import { onCarrouselAutoplayTimeLeft } from "@/shared/helpers/onCarrouselAutoplayTimeLeft";

const paginationClassName = "swiper-bcp-home-novedades-pagination";
export const HomeCarrouselNovedades = () => {
  return (
    <section className="pt-8 pb-16">
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
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={(s, time, progress) =>
          onCarrouselAutoplayTimeLeft(s, time, progress, paginationClassName)
        }
        className="swiper-home-novedades">
        {data.map(({ id, promocion, title, text, cta, img }) => (
          <SwiperSlide key={id}>
            <div className="text-white">
              <div className="container">
                <div className="grid grid-cols-12 items-center h-[474px]">
                  <div className="col-span-6 relative order-2">
                    <div className="pt-16 max-w-[560px]">
                      <p className="text-bcp-gray-4 flex gap-2">
                        <img src="./img/icons/cancel-green.svg" alt="Icon" />
                        <span>{promocion}</span>
                      </p>
                      <p className="text-[40px] leading-[1.1] mb-3 text-bcp-blue-2 mt-5">
                        {title}
                      </p>
                      <p className="text-lg mb-8 text-bcp-gray-1 font-light">
                        {text}
                      </p>
                      <ButtonBcp title={cta} />
                    </div>
                  </div>
                  <div className="col-span-6 relative order-1">
                    <div className="grid h-full">
                      <div className="self-end">
                        <figure className="mx-auto relative">
                          <img
                            src={img}
                            alt={title}
                            className="w-full max-w-[475px]"
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
