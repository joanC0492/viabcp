import { useRef } from "react";
import { MainLayout } from "@/shared/components/Layouts/MainLayout";
import {
  HomeBancaMovil,
  HomeCarrousel,
  HomeCarrouselNovedades,
  HomeDescubre,
  HomeDigital,
  HomeLanzamientos,
  HomeNecesidades,
} from "@/shared/components/sections";

export default function Home() {
  const refDescubre = useRef<HTMLElement>(null);
  return (
    <MainLayout>
      <HomeCarrousel />
      <HomeNecesidades referencia={refDescubre} />
      <HomeDescubre referencia={refDescubre} />
      <HomeCarrouselNovedades />
      <HomeDigital />
      <HomeLanzamientos />
      <HomeBancaMovil />
    </MainLayout>
  );
}
