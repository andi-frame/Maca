import { useState, useEffect } from "react";
import "regenerator-runtime/runtime";
import { IoSendSharp } from "react-icons/io5";
import { IoSquareSharp } from "react-icons/io5";
import { IoMdMic } from "react-icons/io";
import { IoReturnDownBackOutline } from "react-icons/io5";

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "id";

function Mic({ micBack, micSend, storeNote }) {
  const [isListening, setIsListening] = useState(false);
  const [note, setNote] = useState(null);
  // const [savedNotes, setSavedNotes] = useState("");

  useEffect(() => {
    handleListen();
  }, [isListening]);

  const handleListen = () => {
    if (isListening) {
      mic.start();
      mic.onend = () => {
        console.log("continue..");
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {
        console.log("Stopped Mic on Click");
      };
    }
    mic.onstart = () => {
      console.log("Mics on");
    };

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      console.log(transcript);
      setNote(transcript);
      mic.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  const handleSaveNote = () => {
    // setSavedNotes(note);
    const question = note;
    storeNote(question);

    micSend();
    setNote("");
  };

  return (
    <>
      <div className="">
        <p className="text-[#8B8B8B] text-lg">{note}</p>
        <div className="flex justify-center gap-3 items-center">
          {/* BACK */}
          <button onClick={micBack} className="rounded-full h-12 w-12 bg-[#3CB8A5] flex justify-center items-center">
            <IoReturnDownBackOutline className="text-white mx-auto h-8 w-8" />
          </button>

          {/* Start/Stop Mic */}
          <button
            onClick={() => setIsListening((prevState) => !prevState)}
            className="rounded-full h-16 w-16 bg-[#3CB8A5] flex justify-center items-center">
            {isListening && <IoSquareSharp className="text-white mx-auto h-10 w-10" />}
            {!isListening && <IoMdMic className="text-white mx-auto h-10 w-10 " />}
          </button>

          {/* Save */}
          <button
            onClick={handleSaveNote}
            // disabled={!note}
            className="rounded-full h-12 w-12 bg-[#3CB8A5] flex justify-center items-center">
            <IoSendSharp className="text-white mx-auto h-6 w-6 translate-x-0.5" onClick={micSend} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Mic;
