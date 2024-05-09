import maca_dear from "../assets/maca_dear.png";

function Greatings({ location }) {
  return (
    <div className="bg-gradient-to-b from-[#679867]/[0.79] to-[#89C989]/[0.91] m-5 rounded-2xl relative overflow-hidden">
      <div className="flex flex-col justify-end w-auto h-32 p-3 text-[#005860] text-xl">
        <span>
          Hello, <strong>{location.state.data.username}</strong>
        </span>
        <span>How are you?</span>
      </div>
      <img className="absolute w-7/12 bottom-0 right-0 translate-x-7 translate-y-1" src={maca_dear} alt="maca dear" />
    </div>
  );
}

export default Greatings;
