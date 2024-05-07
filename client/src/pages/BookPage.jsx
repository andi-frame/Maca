import HeaderBook from "../components/HeaderBook";
import Book from "../components/Book";
import Mic from "../components/Mic";
import AudioBook from "../components/AudioBook";

function BookPage() {
  return (
    <div className="flex flex-col">
      <div className="w-full h-40 bg-gradient-to-b from-[#5EB07B]/85 to[#737373] -z-10 absolute"></div>
      <HeaderBook title="Book Title" />
      <Book />
      <AudioBook />
    </div>
  );
}

export default BookPage;
