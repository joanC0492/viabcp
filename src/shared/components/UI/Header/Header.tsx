import { HeaderTop, NavBar } from "./";

export const Header = () => {
  return (
    <header className="sticky left-0 top-0 z-50">
      <HeaderTop />
      <NavBar />
    </header>
  );
};