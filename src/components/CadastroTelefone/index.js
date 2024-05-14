import Slider from "../Slider";
import Titulo from "../Titulo";
import BotaoHome from "../BotaoHome";


function CadastroTelefone() {
  return (
    <div className="bg-gradient-to-r from-black to-green-500 w-screen h-screen">
      <Slider />
      <div className="flex justify-center">
        <div className="bg-neutral-500 w-11/12 h-[500px] mt-8 rounded-lg border-2 border-black">
          <Titulo label="Produtos" />
          <div className="w-full h-[370px]">
            <div className="grid grid-rows-3 grid-cols-4 grid-flow-col gap-x-[45rem]">
              <div className="grid grid-row-1 grid-cols-2 content-center p-6 gap-x-60">
                <div className="w-[230px]">
                  <label className="text-3xl text-white font-bold campo">
                    Número:
                  </label>
                </div>
                <input
                  className="bg-white rounded-xl w-[350px] h-10 p-2 shadow-md shadow-black"
                  id="numero_telefone"
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

export default CadastroTelefone;
