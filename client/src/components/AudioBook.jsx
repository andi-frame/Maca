import { useEffect, useState, useRef } from "react";
import { IoMdMic } from "react-icons/io";
import "react-h5-audio-player/lib/styles.css";
import AudioPlayerControls from "./AudioPlayerControls";
import AudioPlayerDisplay from "./AudioPlayerDisplay";
import { IoReturnDownBackOutline } from "react-icons/io5";
import Mic from "./Mic";

function AudioBook({ title, pageNumber }) {
  const [audioPlay, setAudioPlay] = useState(false);
  const [micActive, setMicActive] = useState(false);
  const [aiActive, setAiActive] = useState(false);
  const [note, setNote] = useState();

  const audioPlayerElement = useRef(null);

  function playPauseOnClick() {
    setAudioPlay((prev) => !prev);
  }

  function resetAudioPlayer() {
    audioPlayerElement.current.audio.current.currentTime = 0;
    setAudioPlay(false);
  }

  function micClicked() {
    setMicActive(true);
    setAiActive(false);
  }

  function micBack() {
    setMicActive(false);
    setAiActive(false);
  }

  function micSend() {
    setAiActive(true);
    setMicActive(false);
  }

  function storeNote(note) {
    setNote(note);
  }

  useEffect(() => {
    if (audioPlay) {
      audioPlayerElement.current.audio.current.play();
    } else {
      audioPlayerElement.current.audio.current.pause();
    }
  }, [audioPlay, audioPlayerElement]);

  return (
    <div className="flex flex-col items-center justify-center w-full rounded-t-3xl bottom-0 shadow-[0_0_10px_-3px_rgba(0,0,0,0.3)] bg-white fixed">
      <div className="mt-2 mb-4 rounded-3xl w-16 h-[7px] bg-[#D9D9D9]"></div>

      {/* CONTENT */}
      <div className="w-10/12 flex flex-col justify-center items-center">
        {/* BUTTONS Audio Book */}
        {!micActive && (
          <>
            {!aiActive && (
              <>
                <AudioPlayerDisplay audioPlayerElement={audioPlayerElement} title={title} pageNumber={pageNumber} />
                <div className="flex justify-center items-center mt-2 mb-3 gap-3">
                  <div className="rounded-full h-12 w-12 bg-[#3CB8A5]" onClick={micClicked}>
                    <IoMdMic className="h-7 w-7 translate-x-[10px] translate-y-[10px] text-white" />
                  </div>
                  <AudioPlayerControls
                    audioPlay={audioPlay}
                    playPauseOnClick={playPauseOnClick}
                    resetAudioPlayer={resetAudioPlayer}
                  />
                </div>
              </>
            )}
          </>
        )}

        {/* BUTTONS Ask */}
        {micActive && (
          <>
            {!aiActive && (
              <div className="flex justify-center items-center mt-2 mb-3 gap-3">
                <Mic micBack={micBack} micSend={micSend} storeNote={(note) => storeNote(note)} />
              </div>
            )}
          </>
        )}

        {/* BUTTONS AI Response */}
        {aiActive && (
          <>
            <span className="text-lg">{note}</span>
            <div className="flex justify-center items-center mt-2 mb-3 gap-3">
              <button onClick={micBack} className="rounded-full h-12 w-12 bg-[#3CB8A5] flex justify-center items-center">
                <IoReturnDownBackOutline className="text-white mx-auto h-8 w-8" />
              </button>
              <div className="rounded-full h-12 w-12 bg-[#3CB8A5]">
                <IoMdMic className="h-7 w-7 translate-x-[10px] translate-y-[10px] text-white" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AudioBook;
