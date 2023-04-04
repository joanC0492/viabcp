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
    <section className="py-16">
      <div className="container">
        <div className="text-center pb-12">
          <p className="text-xs text-bcp-gray-1/50">LANZAMIENTO</p>
          <p className="text-[40px] text-bcp-blue-2">
            Descubre nuestras innovaciones
          </p>
        </div>
        <div className="relative">
          {homeLanzamientos.map(({ id, img, title, text, cta }) => (
            <div className="relative" data-aos="fade-up" key={id}>
              <div className="grid grid-cols-12 gap-20 py-16">
                <div className="col-span-6">
                  <img src={img} alt={text} />
                </div>
                <div className="col-span-6">
                  <p className="text-[32px] text-bcp-blue-2 leading-10">
                    {title}
                  </p>
                  <p className="mt-5 text-lg">{text}</p>
                  <div className="mt-5">
                    <ButtonBcp title={cta} />
                  </div>
                </div>
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-bcp-orange h-4 w-4 block">
                  &nbsp;
                </span>
              </div>
            </div>
          ))}
          {/* Line */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2">
            <span className="bg-bcp-gray-4/50 h-full w-[1px] block">
              &nbsp;
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
