import { HiSpeakerWave } from "react-icons/hi2";
import { FaPen } from "react-icons/fa6";
import HeaderBook from "../components/HeaderBook";
import Book from "../components/Book";
import Mic from "../components/Mic";

function BookPage() {
  return (
    <div className="flex flex-col">
      <HeaderBook />
      <Book />
      <Mic />
      

      {/* Buttons */}
      <div className="flex gap-3 justify-evenly items-center mt-5">
        <div className="rounded-xl bg-green-300 w-[120px] h-[48px] flex justify-center items-center">
          <HiSpeakerWave className="text-[35px]" />
        </div>
        <div className="rounded-xl bg-green-300 w-[120px] h-[48px] flex justify-center items-center">
          <FaPen className="text-[28px]" />
        </div>
      </div>
    </div>
  );
}

export default BookPage;
