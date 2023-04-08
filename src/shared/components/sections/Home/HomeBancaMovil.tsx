import { ButtonBcp } from "../../UI";

export const HomeBancaMovil = () => {
  return (
    <>
      <section className="hidden md:block bg-[url(https://www.viabcp.com/wcm/connect/890b04fd-700d-4f4f-929b-ca185735a8b1/bannerd.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-890b04fd-700d-4f4f-929b-ca185735a8b1-osz-Fdn)] bg-cover bg-no-repeat bg-center h-[699px] lg:h-[460px] lg:pt-32">
        <div className="container h-full">
          <div className="grid grid-cols-12 h-full">
            <div className="col-span-6 self-end pb-10">
              <p className="text-xs text-white/50">OPERACIONES DIGITALES</p>
              <p className="text-[32px] leading-9 lg:leading-none lg:text-[40px] text-white mt-3 lg:mt-5">
                Descarga el App Banca Móvil BCP
              </p>
              <p className="text-lg text-white mt-3 lg:mt-5">
                Realiza transferencias gratuitas las 24 horas del día
              </p>
              <div className="inline-flex flex-wrap flex-col lg:flex-row lg:flex-nowrap mt-5 gap-4">
                <ButtonBcp title="App Store" className="!h-[44px]" />
                <ButtonBcp title="Google Play" className="!h-[44px]" />
                <ButtonBcp title="AppGallery" className="!h-[44px]" />
              </div>
            </div>
            <div className="col-span-6 relative">
              <img
                src="./img/home/celular-app.png"
                alt="App"
                className="absolute left-1/2 bottom-0 -translate-x-1/2"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="md:hidden mt-20" />
    </>
  );
};
