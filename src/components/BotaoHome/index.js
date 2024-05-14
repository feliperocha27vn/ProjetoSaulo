import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faReplyAll } from "@fortawesome/free-solid-svg-icons";

function BotaoHome() {
  return (
    <div>
      <button className="ml-16">
        <div className="w-[90px] h-[45px] bg-neutral-500 mt-3 flex items-center justify-center rounded-lg space-x-1 p-2">
          <FontAwesomeIcon icon={faHouse} className="h-5 w-5" />
          <label className="font-bold text-xl">INICIO</label>
        </div>
      </button>
      <button className="ml-16">
        <div className="w-[90px] h-[45px] bg-red-500 mt-3 flex items-center justify-center rounded-lg space-x-1 p-2">
          <FontAwesomeIcon icon={faReplyAll} className="h-5 w-5" />
          <label className="font-bold text-xl">SAIR</label>
        </div>
      </button>
    </div>
  );
}

export default BotaoHome;
