import { useState, useEffect } from "react";
import "regenerator-runtime/runtime";
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "id";

function Mic() {
  const [isListening, setIsListening] = useState(false);
  const [note, setNote] = useState(null);
  const [savedNotes, setSavedNotes] = useState([]);

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
    setSavedNotes([...savedNotes, note]);
    setNote("");
  };

  return (
    <>
      <h1>Voice Notes</h1>
      <div className="">
        <div className="flex flex-col justify-center items-center">
          <h2>Current Note</h2>
          {isListening ? <span>🎙️</span> : <span>🛑🎙️</span>}
          <button onClick={handleSaveNote} disabled={!note}>
            Save Note
          </button>
          <button onClick={() => setIsListening((prevState) => !prevState)}>Start/Stop</button>
          <p>{note}</p>
        </div>
        <div className="">
          <h2>Notes</h2>
          {savedNotes.map((n) => (
            <p key={n}>{n}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default Mic;