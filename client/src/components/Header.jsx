import life_token_logo from "../assets/life_token_logo.png";
import search_logo from "../assets/search_logo.svg";

function Header() {
  return (
    <div className="flex justify-between items-center pt-4">
      <div className="flex my-2 mx-5 py-1 px-2 rounded-full bg-white">
        <img className="w-10 h-10" src={life_token_logo} alt="life_token_logo" />
        <img className="w-10 h-10" src={life_token_logo} alt="life_token_logo" />
        <img className="w-10 h-10" src={life_token_logo} alt="life_token_logo" />
      </div>
      <div className="flex p-[3px] my-2 mx-5 items-center rounded-full bg-white">
        <img className="w-10 h-10" src={search_logo} alt="maca_logo" />
      </div>
    </div>
  );
}

export default Header;
