import { useEffect } from "react";
import { homeLanzamientos } from "@/data/bcpData";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { ButtonBcp } from "../../UI";

export const HomeLanzamientos = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section className="pt-16 lg:py-16">
      <div className="container">
        <div className="text-center pb-12">
          <p className="text-xs text-bcp-gray-1/50">LANZAMIENTO</p>
          <p className="text-[40px] text-bcp-blue-2">
            Descubre nuestras innovaciones
          </p>
        </div>
        <div className="relative">
          {homeLanzamientos.map(({ id, img, title, text, cta }) => (
            <div className="mb-2 md:mb-0 shadow-2xl md:shadow-none relative" data-aos="fade-up" key={id}>
              <div className="grid grid-cols-12 gap-y-3 gap-x-0 md:gap-8 lg:gap-20 py-8 px-4 md:px-0 md:py-16">
                <div className="col-span-12 md:col-span-6 order-2 md:order-1">
                  <img
                    src={img}
                    alt={text}
                    className="max-w-full md:max-w-max"
                  />
                </div>
                <div className="col-span-12 md:col-span-6 order-1 md:order-2">
                  <p className="text-[32px] text-bcp-blue-2 leading-10">
                    {title}
                  </p>
                  <p className="mt-5 text-lg">{text}</p>
                  <div className="mt-5">
                    <ButtonBcp title={cta} />
                  </div>
                </div>
              </div>
              {/* Point */}
              <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-bcp-orange h-4 w-4 block">
                  &nbsp;
                </span>
              </div>
            </div>
          ))}
          {/* Line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2">
            <span className="bg-bcp-gray-4/50 h-full w-[1px] block">
              &nbsp;
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
