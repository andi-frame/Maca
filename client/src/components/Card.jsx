import { TbPointFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

function Card(Props) {
  const history = useNavigate();
  const location = Props.location;

  function clickHandler() {
    history(`/book/${Props.id}`, { state: { data: location.state.data } });
  }

  return (
    <div className="h-48 w-40 rounded-3xl bg-[#F3F3F3] overflow-hidden my-5 flex-none" onClick={clickHandler}>
      <div>
        <img className="h-28 w-full" src={Props.img} alt={"Gambar " + Props.title} />
      </div>
      <div className="px-3 pt-2 flex flex-col gap-3">
        <h4 className="text-md">{Props.title}</h4>
        <div className="flex justify-between">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
            <span>{Props.likes}</span>
          </div>
          <div className="flex items-center">
            <TbPointFilled className="w-3 h-3 mr-1" />
            <span>{Props.genre}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
