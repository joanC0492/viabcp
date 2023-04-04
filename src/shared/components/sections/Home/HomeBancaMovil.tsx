import { ButtonBcp } from "../../UI";

export const HomeBancaMovil = () => {
  return (
    <section className="bg-[url('/img/home/banner-pre-footer.png')] bg-cover bg-no-repeat bg-center h-[460px] pt-32">
      <div className="container h-full">
        <div className="grid grid-cols-12 h-full">
          <div className="col-span-6 self-end pb-10">
            <p className="text-xs text-white/50">OPERACIONES DIGITALES</p>
            <p className="text-[40px] text-white mt-5">
              Descarga el App Banca Móvil BCP
            </p>
            <p className="text-lg text-white mt-5">
              Realiza transferencias gratuitas las 24 horas del día
            </p>
            <div className="inline-flex mt-5 gap-4">
              <ButtonBcp title="App Store" />
              <ButtonBcp title="Google Play" />
              <ButtonBcp title="AppGallery" />
            </div>
          </div>
          <div className="col-span-6 relative">
            <img src="/img/home/celular-app.png" alt="App" className="absolute left-1/2 bottom-0 -translate-x-1/2"/>
          </div>
        </div>
      </div>
    </section>
  );
};
