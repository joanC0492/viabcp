import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { ICardViaBcp } from "@/interfaces/homeBcp.interface";

export const CardViaBcp = ({ id, img, title, cintillo }: ICardViaBcp) => {
  return (
    <Card className="p-2 shadow-lg cursor-pointer relative transition-all duration-300 hover:scale-110 hover:shadow-xl">
      <CardContent className="pb-1 pt-2">
        <div>
          <img src={img} alt={title} />
        </div>
      </CardContent>
      <CardActions>
        <p className="text-lg text-bcp-blue-2 leading-6 min-h-[48px]">
          {title}
        </p>
      </CardActions>
      {cintillo && (
        <div className="absolute top-3 -right-1 text-xs bg-bcp-green-1 text-white rounded px-3 py-1">
          <span>{cintillo}</span>
          <div
            className="absolute bg-bcp-green-2 right-1 -bottom-[5px] h-[5px] w-[5px]"
            style={{ borderRadius: "0px 0px 6px 0px" }}
          />
        </div>
      )}
    </Card>
  );
};
