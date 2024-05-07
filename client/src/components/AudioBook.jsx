import { useEffect, useState, useRef } from "react";
import { IoMdMic } from "react-icons/io";
import "react-h5-audio-player/lib/styles.css";
import AudioPlayerControls from "./AudioPlayerControls";
import AudioPlayerDisplay from "./AudioPlayerDisplay";

function AudioBook() {
  const [audioPlay, setAudioPlay] = useState(false);
  const audioPlayerElement = useRef(null);

  function playPauseOnClick() {
    setAudioPlay((prev) => !prev);
  }

  function resetAudioPlayer() {
    audioPlayerElement.current.audio.current.currentTime = 0;
    setAudioPlay(false);
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
        <AudioPlayerDisplay audioPlayerElement={audioPlayerElement} />

        {/* BUTTONS */}
        <div className="flex justify-center items-center mt-2 mb-3 gap-3">
          <div className="rounded-full h-12 w-12 bg-[#3CB8A5]">
            <IoMdMic className="h-7 w-7 translate-x-[10px] translate-y-[10px] text-white" />
          </div>
          <AudioPlayerControls audioPlay={audioPlay} playPauseOnClick={playPauseOnClick} resetAudioPlayer={resetAudioPlayer} />
        </div>
      </div>
    </div>
  );
}

export default AudioBook;
