import { IoPlaySharp } from "react-icons/io5";
import { MdPause } from "react-icons/md";
import { IoSquareSharp } from "react-icons/io5";


// eslint-disable-next-line react/prop-types
function AudioPlayerControls({ audioPlay, playPauseOnClick, resetAudioPlayer }) {
  return (
    <div className="flex justify-center items-center gap-3">
      <div className="rounded-full h-16 w-16 bg-[#3CB8A5] flex justify-center items-center">
        {audioPlay ? (
          <MdPause className="h-12 w-12 text-white" onClick={playPauseOnClick} />
        ) : (
          <IoPlaySharp className="h-12 w-12 translate-x-1 text-white" onClick={playPauseOnClick} />
        )}
      </div>
      <div className="rounded-full h-12 w-12 bg-[#3CB8A5]">
        <IoSquareSharp className="h-6 w-6 translate-x-[12px] translate-y-[12px] text-white" onClick={resetAudioPlayer} />
      </div>
    </div>
  );
}

export default AudioPlayerControls;