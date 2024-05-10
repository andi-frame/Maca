import HeaderBook from "../components/HeaderBook";
import Book from "../components/Book";
import Mic from "../components/Mic";
import AudioBook from "../components/AudioBook";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function BookPage() {
  const { id } = useParams();
  const location = useLocation();
  const [file, setFile] = useState();

  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await axios.post("http://localhost:5000/book/", { filter: { _id: id } });
        return response.data.response;
      } catch (error) {
        console.log("Error fetching book: ", error);
      }
    }
  }, []);

  return (
    <div className="flex flex-col">
      <div className="w-full h-40 bg-gradient-to-b from-[#5EB07B]/85 to[#737373] -z-10 absolute"></div>
      <HeaderBook title="Book Title" backHref="/" />
      <Book />
      <AudioBook />
    </div>
  );
}

export default BookPage;
