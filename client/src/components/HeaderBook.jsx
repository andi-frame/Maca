import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function HeaderBook({ title, backHref, location }) {
  const history = useNavigate();

  function handleClick() {
    history("/", { state: { data: location.state.data } });
  }

  return (
    <div className="flex items-center m-2">
      <IoIosArrowBack className="h-[51px] w-[29px]" onClick={handleClick} />
      <span className="text-[25px]">{title}</span>
    </div>
  );
}

export default HeaderBook;
