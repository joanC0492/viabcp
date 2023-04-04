import { homeCard } from "@/data/bcpData";
import { CardViaBcp } from "@/shared/components/Card";

interface IProps {
  referencia: React.RefObject<HTMLElement>;
}
export const HomeNecesidades = ({ referencia }: IProps) => {
  
  const handleClick = () => {
    const $section = referencia.current;
    if (!$section) return;
    $section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-12">
      <div className="container">
        <p className="text-4xl text-center text-bcp-blue-2">
          Hola, ¿qué necesitas hacer hoy?
        </p>
        <div className="mt-12">
          <ul className="grid grid-cols-12 gap-6">
            {homeCard.map((card) => (
              <li className="col-span-2" key={card.id}>
                <CardViaBcp {...card} />
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center py-12">
          <button onClick={handleClick}>
            <img src="./img/icons/arrow-down.svg" alt="arrow icon" />
          </button>
        </div>
      </div>
    </section>
  );
};
