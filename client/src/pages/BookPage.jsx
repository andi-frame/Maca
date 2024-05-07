import { HiSpeakerWave } from "react-icons/hi2";
import { FaPen } from "react-icons/fa6";
import HeaderBook from "../components/HeaderBook";
import Book from "../components/Book";
import Mic from "../components/Mic";
import AudioBook from "../components/AudioBook";

function BookPage() {
  return (
    <div className="flex flex-col">
      <HeaderBook />
      <Book />
      <AudioBook />
      
    </div>
  );
}

export default BookPage;
