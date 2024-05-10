import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import PageBookCounter from "../components/PageBookCounter";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Setup react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.js", import.meta.url).toString();

function Book({ title, prev, next }) {
  // Get Window Size
  const { width } = useWindowDimensions();

  // Page Navigation Handling
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const [url, setUrl] = useState();

  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await axios.post("http://localhost:5000/book/download", { title: title });

        const bookObject = Object.values(response.data.bookFile);
        const bookFile = new Uint8Array(bookObject);
        const blob = new Blob([bookFile], { type: "application/pdf" });
        const blobUrl = URL.createObjectURL(blob);
        setUrl(blobUrl);
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching book: ", error);
      }
    }
    fetchBook();
  }, [title]);

  function onDocumentLoadSuccess(Props) {
    if (numPages == 0) setNumPages(Props.numPages);
  }

  function nextPage() {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
      next();
    }
  }
  function previousPage() {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
      prev();
    }
  }

  return (
    <div className="relative mb-60">
      {/* --BOOK FILE VIEWER-- */}
      {/* Show message while loading */}
      {isLoading && <div className="text-center">Loading...</div>}
      <div className="w-10/12 h-full mx-auto flex items-center justify-center ">
        {!isLoading && (
          <Document
            file={{ url }}
            onLoadSuccess={onDocumentLoadSuccess}
            className="flex items-center justify-center rounded-2xl shadow-md">
            <Page pageNumber={pageNumber} width={width * 0.8} className="rounded-2xl overflow-hidden" />
          </Document>
        )}
      </div>

      {/* --PAGE COUNTER-- */}
      <div className="flex justify-center items-center">
        <IoIosArrowBack
          id="pdf-pagination-prev"
          className="h-10 w-10 text-green-800 absolute -translate-x-10 translate-y-2"
          onClick={previousPage}
        />

        <PageBookCounter numPages={numPages} pageNumber={pageNumber} className="self-center" />

        <IoIosArrowForward
          id="pdf-pagination-next"
          className="h-10 w-10 text-green-800 absolute translate-x-10 translate-y-2"
          onClick={nextPage}
        />
      </div>
    </div>
  );
}

export default Book;
