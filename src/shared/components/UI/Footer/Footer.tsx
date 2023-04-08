import { footerContacto, footerRoutes } from "@/data/bcpData";
import { Tooltip } from "@mui/material";
import { ButtonBcp } from "../ButtonBcp";

export const Footer = () => {
  const handleClick = () => {
    const $body = document.body;
    if (!$body) return;
    $body.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer>
      <div className="container">
        <div className="my-10 relative text-center">
          <hr />
          <Tooltip title="Volver a arriba">
            <img
              onClick={handleClick}
              src="./img/icons/arrow-top.svg"
              alt="Arrow Top"
              className="absolute right-[calc(50%-28px-28px)] top-0 -translate-x-1/2 -translate-y-1/2 cursor-pointer px-7 bg-white"
            />
          </Tooltip>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap gap-4 lg:gap-0">
          <div className="flex-wrap flex-grow-0 basis-auto lg:flex-grow flex-shrink-0 lg:basis-0 w-full">
            <p className="text-xl">{footerRoutes[0].title}</p>
            <ul className="text-bcp-gray-1/75 mt-4">
              {footerRoutes[0].links.map(({ name, url }, i) => (
                <li key={i}>{name}</li>
              ))}
            </ul>
          </div>

          <div className="flex-wrap flex-grow-0 basis-auto lg:flex-grow flex-shrink-0 lg:basis-0 w-full">
            <div>
              <p className="text-xl">{footerRoutes[1].title}</p>
              <ul className="text-bcp-gray-1/75 mt-4">
                {footerRoutes[1].links.map(({ name, url }, i) => (
                  <li key={i}>{name}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <p className="text-xl">{footerRoutes[2].title}</p>
              <ul className="text-bcp-gray-1/75 mt-4">
                {footerRoutes[2].links.map(({ name, url }, i) => (
                  <li key={i}>{name}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-wrap flex-grow-0 basis-auto lg:flex-grow flex-shrink-0 lg:basis-0 w-full">
            <div>
              <p className="text-xl">Contáctanos</p>
              <ul className="mt-4">
                {footerContacto.map(({ id, icon, title }) => (
                  <li key={id} className="list-none flex items-center mb-4">
                    <figure>
                      <img src={icon} alt={title} />
                    </figure>
                    <span className="inline-block ml-2">{title}</span>
                  </li>
                ))}
              </ul>
              <div>
                <p className="text-xl">Descarga Banca Móvil</p>
                <div className="flex gap-2 mt-5 flex-col 2xl:flex-row">
                  <ButtonBcp
                    title="App Store"
                    className="h-10 w-max min-w-[140.2px]"
                  />
                  <ButtonBcp
                    title="Google Play"
                    className="h-10 w-max min-w-[140.2px]"
                  />
                  <ButtonBcp
                    title="App Gallery"
                    className="h-10 w-max min-w-[140.2px]"
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 hidden">
              <p className="text-xl">Síguenos</p>
              <ul className="mt-4"></ul>
            </div>
          </div>
        </div>

        <hr className="my-10" />
        <div className="pb-10 flex flex-wrap lg:flex-nowrap items-center lg:gap-x-12 gap-y-5 lg:gap-y-0">

          <div>
            <img src="./img/home/bcp-dark.svg" alt="" />
          </div>

          <div>
            <p className="text-bcp-gray-1/75 text-xs">
              © 2020 BCP | Todos los derechos reservados. Sede Central,
              Centenario 156, La Molina 15026, Lima, Perú.
            </p>
          </div>

          <div className="ml-auto">
            <ul className="flex gap-4 [&_img]:h-16 [&_img]:w-auto">
              <li>
                <img
                  src="https://www.viabcp.com/wcm/connect/7b939915-1554-4ce2-a2d6-79a24a35d1b9/image+2.svg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-7b939915-1554-4ce2-a2d6-79a24a35d1b9-osEM8OH"
                  alt="Icon 1"
                />
              </li>
              <li>
                <img
                  src="https://www.viabcp.com/wcm/connect/15201024-7e8d-46f8-8a4f-1576e707721f/compromiso.svg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-15201024-7e8d-46f8-8a4f-1576e707721f-osEM8OH"
                  alt="Icon 2"
                />
              </li>
              <li>
                <img
                  src="https://www.viabcp.com/wcm/connect/8d0c4e09-127f-4c65-af93-f73e4c929a9b/Group+1+%281%29.svg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-8d0c4e09-127f-4c65-af93-f73e4c929a9b-osEM8OH"
                  alt="Icon 3"
                />
              </li>
              <li>
                <img
                  src="https://www.viabcp.com/wcm/connect/99d89fe5-0205-4c26-b2e7-bef65cbc046a/sistema-de-denuncias.svg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-99d89fe5-0205-4c26-b2e7-bef65cbc046a-osEM8OH"
                  alt="Icon 4"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
