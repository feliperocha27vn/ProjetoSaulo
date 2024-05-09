import React from "react";
import Slider from "../Slider";
import Campos from "../Campos";
import Botoes from "../Botoes";
import Titulo from "../Titulo";

function CadastroMovimentacaoEstoque() {
  return (
    <div className="bg-gradient-to-r from-black to-green-500 w-screen h-screen">
      <Slider />
      <div className="flex justify-center">
        <div className="bg-neutral-500 w-11/12 h-[500px] mt-8 rounded-lg border-2 border-black">
          <Titulo label="Contas a Receber" />
          <div className="w-full h-[370px] overflow-auto">
            <div className="grid grid-rows-3 grid-cols-4 grid-flow-col gap-x-[45rem]">
              <Campos label="Código Produto: " />
              <Campos label="Data: " />
              <Campos label="Tipo: " />
              <Campos label="Quantidade: " />
              <Campos label="Código Fornecedor: " />
              <Campos label="Código Cliente: " />
              <Campos label="Motivo: " />
            </div>
          </div>
          <Botoes />
        </div>
      </div>
    </div>
  );
}

export default CadastroMovimentacaoEstoque;
