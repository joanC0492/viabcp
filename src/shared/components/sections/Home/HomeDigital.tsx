import { homeClienteDigital } from "@/data/bcpData";
import { ButtonBcp } from "@/shared/components/UI";

export const HomeDigital = () => {
  const active = [true, false, false];

  const showImage = (i: number) => {
    const $sections = document.querySelectorAll("[data-section]");

    $sections.forEach(($section) => {
      $section.classList.remove("is-active");
      $section.classList.add("no-active");
    });
    $sections[i].classList.remove("no-active");
    $sections[i].classList.add("is-active");
  };
  const hiddenImage = () => {
    const $sections = document.querySelectorAll("[data-section]");
    $sections.forEach(($section) => {
      $section.classList.remove("no-active");
      $section.classList.remove("is-active");
    });
    $sections[0].classList.add("is-active");
  };

  return (
    <section className="py-10 bg-bcp-blue-2">
      <div className="container">
        <div className="text-center">
          <p className="text-xs text-white/50">SOLUCIONES DIGITALES</p>
          <p className="text-[28px] md:text-[40px] text-white">
            Conviértete en un cliente digital
          </p>
          <div className="md:hidden">
            <img
              src={homeClienteDigital[0].img}
              alt="Imagen"
              className="max-w-full"
            />
          </div>
        </div>
        <div className="pt-10">
          <div className="grid grid-cols-12 gap-x-0 gap-y-8 md:gap-8">
            <div className="col-span-12 md:col-span-6">
              <div className="relative">
                {homeClienteDigital.map(
                  ({ id, tag, icon, title, text, cta, img }, i) => (
                    <div
                      data-section
                      key={id}
                      className={`group transition-all duration-300 ${
                        active[i] ? "is-active" : ""
                      }`}>
                      <hr className="opacity-25" />
                      <div
                        className="text-white py-10 cursor-pointer transition-all duration-300 group-[.no-active]:opacity-50 text-center md:text-left"
                        onMouseEnter={() => showImage(i)}
                        onMouseLeave={hiddenImage}>
                        {!!tag && (
                          <div className="pb-5">
                            <p>{tag}</p>
                          </div>
                        )}
                        <div className="flex-col md:flex-row flex gap-2 md:gap-4 items-center pb-5">
                          <img src={icon} alt={title} width={24} />
                          <p className="text-2xl">{title}</p>
                        </div>
                        <div className="pb-5">
                          <p className="text-lg">{text}</p>
                        </div>
                        <div className="">
                          <ButtonBcp title={cta} />
                        </div>
                      </div>

                      <img
                        src={img}
                        alt={title}
                        data-img-main
                        className={`opacity-0 absolute top-8 left-full pl-[25%] transition-all duration-300 group-[.is-active]:opacity-100 hidden md:block`}
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
