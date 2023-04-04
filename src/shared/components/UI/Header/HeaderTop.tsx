import { headerTopRoutes as routes } from "@/data/bcpData";
import Link from "next/link";

export const HeaderTop = () => {
  return (
    <div className="bg-bcp-blue-3">
      <div className="container">
        <ul className="flex gap-4">
          {routes.map(({ id, name, path }, i) => (
            <li key={id} className={`group ${i === 0 ? "is-active" : ""}`}>
              <Link
                href={path}
                className={`text-bcp-gray-1 text-sm font-medium inline-block leading-none px-1 py-2 border-b-2 group-[.is-active]:border-b-bcp-orange`}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
// border-b-bcp-orange
