import React from "react";
import Slider from "../Slider";
import Titulo from "../Titulo";
import BotaoHome from "../BotaoHome";


function CadastroContasReceber() {
  return (
    <div className="bg-gradient-to-r from-black to-green-500 w-screen h-screen">
      <Slider />
      <div className="flex justify-center">
        <div className="bg-neutral-500 w-11/12 h-[500px] mt-8 rounded-lg border-2 border-black">
          <Titulo label="Contas a Receber" />
          <div className="w-full h-[370px]">
            <div className="grid grid-rows-3 grid-cols-4 grid-flow-col gap-x-[45rem]">
              <div className="grid grid-row-1 grid-cols-2 content-center p-6 gap-x-60">
                <div className="w-[230px]">
                  <label className="text-3xl text-white font-bold campo">
                    Data Conta:
                  </label>
                </div>
                <input
                  className="bg-white rounded-xl w-[350px] h-10 p-2 shadow-md shadow-black"
                  id="data_conta"
                />
              </div>
              <div className="grid grid-row-1 grid-cols-2 content-center p-6 gap-x-60">
                <div className="w-[230px]">
                  <label className="text-3xl text-white font-bold campo">
                    Cliente:
                  </label>
                </div>
                <input
                  className="bg-white rounded-xl w-[350px] h-10 p-2 shadow-md shadow-black"
                  id="id_cliente"
                />
              </div>
              <div className="grid grid-row-1 grid-cols-2 content-center p-6 gap-x-60">
                <div className="w-[230px]">
                  <label className="text-3xl text-white font-bold campo">
                    ID Venda:
                  </label>
                </div>
                <input
                  className="bg-white rounded-xl w-[350px] h-10 p-2 shadow-md shadow-black"
                  id="id_venda"
                />
              </div>
              <div className="grid grid-row-1 grid-cols-2 content-center p-6 gap-x-60">
                <div className="w-[230px]">
                  <label className="text-3xl text-white font-bold campo">
                    Empresa:
                  </label>
                </div>
                <input
                  className="bg-white rounded-xl w-[350px] h-10 p-2 shadow-md shadow-black"
                  id="id_empresa"
                />
              </div>
            </div>
          </div>
          <div className="flex items-end justify-evenly">
            <button className="border-2 border-black bg-lime-600 rounded-2xl w-60 flex justify-center">
              <div className="text-white text-2xl p-0.5">Cadastrar</div>
            </button>
            <button className="border-2 border-black bg-red-600 rounded-2xl w-60 flex justify-center">
              <div className="text-white text-2xl p-0.5">Cancelar</div>
            </button>
          </div>
        </div>
      </div>
      <BotaoHome />
    </div>
  );
}

export default CadastroContasReceber;
