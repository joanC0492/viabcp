import { Button } from "@mui/material";

type typeButton = "button" | "reset" | "submit";
interface IProps {
  title: string;
  className?: string;
  type?: typeButton;
  icon?: {
    name: string;
    width?: number;
    height?: number;
  };
  variant?: "orange" | "white";
}
export const ButtonBcp = ({
  className = "",
  title,
  type = "button",
  icon,
  variant = "orange",
}: IProps) => {
  return (
    <Button
      type={type}
      className={`normal-case ${
        variant === "orange"
          ? "bg-bcp-orange text-white"
          : "bg-white text-bcp-gray-2 outline outline-1 outline-bcp-gray-2/50"
      } px-6 h-[48px] text-base rounded-3xl ${className}`}>
      <div className="flex items-center gap-2">
        {!!icon && <img src={icon.name} alt={title} />}
        <span>{title}</span>
      </div>
    </Button>
  );
};
