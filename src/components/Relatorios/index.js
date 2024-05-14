import React from "react";
import Slider from "../Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingDollar,
  faFileInvoiceDollar,
  faCartShopping,
  faCartFlatbedSuitcase,
} from "@fortawesome/free-solid-svg-icons";
import BotaoHome from "../BotaoHome";


const icons = [
  { icone: faHandHoldingDollar, descricao: "Contas" },
  { icone: faFileInvoiceDollar, descricao: "Comissões" },
  { icone: faCartShopping, descricao: "Mais Vendidos" },
  { icone: faCartFlatbedSuitcase, descricao: "Mais Vendidos" },
];

function Relatorios() {
  return (
    <div className="bg-gradient-to-r from-black to-green-500 w-screen h-screen">
      <Slider />
      <div className="flex justify-center">
        <div className="bg-neutral-500 w-11/12 h-[500px] mt-8 rounded-lg border-2 border-black">
          <div className="text-center mt-8">
            <div className="font-bold text-4xl text-white titulo">
              <label>Relatórios</label>
            </div>
          </div>
          <div className="w-full h-[370px] flex items-center justify-center">
            <div className="grid grid-rows-2 grid-cols-2 justify-items-center gap-20">
              {icons.map((item) => (
                <div className="flex flex-col items-center justify-center bg-[#D9D9D9] w-56 h-32 rounded-lg">
                  <FontAwesomeIcon icon={item.icone} className="h-16"/>
                  <label className="mt-4">{item.descricao}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <BotaoHome />
    </div>
  );
}

export default Relatorios;
