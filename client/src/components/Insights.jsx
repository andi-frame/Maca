import book from "../assets/book_logo.svg";
import clock from "../assets/clock_logo.svg";

function Insights() {
  return (
    <div className="bg-gradient-to-b from-[#91E19D]/[0.54] to-[#56B48C]/[0.68] w-auto h-30 px-3 py-4 m-5 rounded-2xl flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="text-2xl text-[#005860]">Insights</div>
        <div>Today</div>
      </div>
      <div className="flex gap-5">
        <div className="bg-[#32AB63] w-7/12 flex flex-col gap-2 rounded-xl p-2">
          <div className="flex items-center">
            <img className="w-6 mr-3" src={book} alt="books logo" />
            <span className="text-white">Books : </span>
          </div>
          <div className="flex items-center">
            <img className="w-7 mr-2" src={clock} alt="clock icon" />
            <span className="text-white">Time : </span>
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <div className="rounded-2xl bg-[#218D7D] text-white p-2">Recent Book</div>
        </div>
      </div>
    </div>
  );
}

export default Insights;
