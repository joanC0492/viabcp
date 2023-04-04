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
              <img src="./img/logo.svg" alt="Logo BCP" width={108} />
            </Link>
          </div>
          <nav>
            <ul className="flex">
              {routes.map(({ id, name, path }) => (
                <li key={id}>
                  <Link
                    href={path}
                    className="text-base font-medium text-bcp-gray-1 py-3 px-6 leading-none">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto">
            <ul className="flex items-center gap-4">
              <li className="flex items-center gap-1">
                <img src="./img/icons/icon-agencias.svg" alt="agencias" />
                <span>Agencias</span>
              </li>
              <li>Search</li>
              <li>
                <ButtonBcp
                  title="Abre tu cuenta"
                  className="h-[40px] font-semibold text-sm"
                  icon={{
                    name: "/img/icons/icon-money-bag-soles-r.svg",
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
                    name: "/img/icons/icon-candado.svg",
                  }}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
