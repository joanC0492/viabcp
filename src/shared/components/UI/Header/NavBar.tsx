import Link from "next/link";
import { navbarRoutes as routes } from "@/data/bcpData";
import { ButtonBcp } from "../ButtonBcp";

export const NavBar = () => {
  return (
    <div className="py-4 bg-white shadow-md">
      <div className="container">
        <div className="flex items-center">
          <div>
            <Link href={"/"}>
              <img
                src="./img/logo.svg"
                alt="Logo BCP"
                width={108}
                className="max-w-[70px] md:max-w-full"
              />
            </Link>
          </div>

          <nav className="xl:ml-3 2xl:ml-0 hidden xl:block">
            <ul className="flex items-center">
              {routes.map(({ id, name, path }) => (
                <li key={id}>
                  <Link
                    href={path}
                    className="text-base xl:text-sm 2xl:text-base font-medium text-bcp-gray-1 py-3 px-6 xl:py-1 xl:px-3 2xl:py-3 2xl:px-6 leading-none">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* PC */}
          <div className="ml-auto hidden xl:block">
            <ul className="flex items-center gap-4">
              <li className="flex items-center gap-1">
                <img src="./img/icons/icon-agencias.svg" alt="agencias" />
                <span className="text-base xl:text-sm 2xl:text-base">
                  Agencias
                </span>
              </li>
              <li className="text-base xl:text-sm 2xl:text-base">Search</li>
              <li>
                <ButtonBcp
                  title="Abre tu cuenta"
                  className="h-[40px] font-semibold text-sm"
                  icon={{
                    name: "./img/icons/icon-money-bag-soles-r.svg",
                    width: 10,
                  }}
                  variant="white"
                />
              </li>
              <li>
                <ButtonBcp
                  title="Banca por Internet"
                  className="h-[40px] font-semibold text-sm"
                  icon={{
                    name: "./img/icons/icon-candado.svg",
                  }}
                />
              </li>
            </ul>
          </div>

          {/* Mobile */}
          <div className="ml-auto xl:hidden">
            <ul className="flex items-center gap-3">  
              <li>
                <ButtonBcp
                  title="Abrir cuenta"
                  className="!h-[40px] font-semibold text-xs md:text-sm !px-4 !md:px-4"
                  variant="white"
                />
              </li>
              <li>
                <ButtonBcp
                  title="Banca"
                  className="!h-[40px] font-semibold text-xs md:text-sm !px-4 !md:px-4"
                  icon={{
                    name: "./img/icons/icon-candado.svg",
                  }}
                />
              </li>
              <li>
                <img
                  src="./img/icons/burger.svg"
                  alt="Bar"
                  className="cursor-pointer"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
