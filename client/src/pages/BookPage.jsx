import HeaderBook from "../components/HeaderBook";
import Book from "../components/Book";
import AudioBook from "../components/AudioBook";
import { useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function BookPage() {
  const { booktitle } = useParams();
  const location = useLocation();

  const [pageNumber, setPageNumber] = useState(1);

  function prevPage() {
    setPageNumber((prev) => prev - 1);
  }

  function nextPage() {
    setPageNumber((prev) => prev + 1);
  }

  return (
    <div className="flex flex-col">
      <div className="w-full h-40 bg-gradient-to-b from-[#5EB07B]/85 to[#737373] -z-10 absolute"></div>
      <HeaderBook title={booktitle} backHref="/" location={location} />
      <Book title={booktitle} prev={prevPage} next={nextPage} />
      <AudioBook title={booktitle} pageNumber={pageNumber} />
    </div>
  );
}

export default BookPage;
