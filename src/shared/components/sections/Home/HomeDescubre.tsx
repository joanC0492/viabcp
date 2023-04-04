import { useRef, useState } from "react";
import { MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { ButtonBcp } from "../../UI";

interface IProps {
  referencia: React.RefObject<HTMLElement>;
}
const initDocument = { tipo: "DNI", state: "", active: false };
export const HomeDescubre = ({ referencia }: IProps) => {
  const [document, setDocument] = useState(initDocument);

  const handleChangeDTipo = (event: SelectChangeEvent<string>) =>
    setDocument((prev) => ({ ...prev, tipo: event.target.value as string }));

  const handleChangeState = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { value } = event.target;
    const regex = /^[0-9\b]+$/;
    if (value === "" || regex.test(value)) {
      setDocument((prev) => ({ ...prev, state: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <section ref={referencia} className="">
      <div className="container">
        <div className="w-10/12 mx-auto">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-6">
              <p className="text-[40px] text-bcp-blue-2">Mi Espacio BCP</p>
              <p className="text-lg text-bcp-gray-1">
                Ingresa tu DNI y descubre tu producto especial
              </p>
              <div className="mt-8">
                <form onSubmit={handleSubmit}>
                  <div
                    className={`inline-flex border rounded-md transition-all duration-300 ${
                      document.active ? "border-bcp-blue-2" : ""
                    }`}>
                    <div
                      className={`border-r transition-all duration-300 ${
                        document.active ? "border-r-bcp-blue-2" : ""
                      }`}>
                      <Select
                        className="[&_fieldset]:border-none"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={document.tipo}
                        label={document.tipo}
                        onChange={handleChangeDTipo}
                        size="small">
                        <MenuItem value={"DNI"}>DNI</MenuItem>
                        <MenuItem value={"CE"}>CE</MenuItem>
                        <MenuItem value={"RUC"}>RUC</MenuItem>
                        <MenuItem value={"PAS"}>PAS</MenuItem>
                      </Select>
                    </div>

                    <div>
                      <TextField
                        onChange={handleChangeState}
                        onFocus={() =>
                          setDocument((prev) => ({ ...prev, active: true }))
                        }
                        onBlur={() =>
                          setDocument((prev) => ({ ...prev, active: false }))
                        }
                        value={document.state}
                        placeholder="Nro de documento"
                        size="small"
                        className="[&_fieldset]:border-none"
                      />
                    </div>
                  </div>
                  <ButtonBcp title="Descubrir" className="ml-4" type="submit" />
                </form>
              </div>
              {/* #868F9E */}
              <div className="mt-5 text-[10px] text-bcp-gray-3">
                <p>
                  (*)Al enviarnos esta información usted autoriza al BCP el
                  tratamiento de sus datos personales. Conoce más aquí.
                </p>
                <p className="mt-1">
                  Este sitio está protegido por reCAPTCHA y se aplican las
                  Políticas de privacidad y Términos del servicio de Google.
                </p>
              </div>
            </div>
            <div className="col-span-6">
              <div>
                <div className="text-right">
                  <img
                    src="./img/home/home-descubre.svg"
                    alt="Bcp"
                    className="inline-block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
