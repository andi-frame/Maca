import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import PageBookCounter from "../components/PageBookCounter";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import contoh_buku1 from "../assets/books/buku-ilustrasi-anak_lumba-lumba.pdf";
import contoh_buku2 from "../assets/books/74._Isi_dan_Sampul_Kalah_oleh_Si_Cerdik.pdf";

// Setup react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.js", import.meta.url).toString();

function Book() {
  // Get Window Size
  const { width } = useWindowDimensions();

  // Page Navigation Handling
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function nextPage() {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  }
  function previousPage() {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  }

  return (
    <div className="relative mb-60">
      {/* --BOOK FILE VIEWER-- */}
      <div className="w-10/12 h-full mx-auto flex items-center justify-center ">
        <Document
          file={"https://firebasestorage.googleapis.com/v0/b/maca-deb33.appspot.com/o/books%2FFri%20May%2010%202024%2009%3A59%3A54%20GMT%2B0700%20(Western%20Indonesia%20Time)%20--%20buku-ilustrasi-anak_lumba-lumba.pdf?alt=media&token=58156b56-d883-4d49-aa23-3e2623807aae"}
          onLoadSuccess={onDocumentLoadSuccess}
          className="flex items-center justify-center rounded-2xl shadow-md">
          <Page pageNumber={pageNumber} width={width * 0.8} className="rounded-2xl overflow-hidden" />
        </Document>
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
