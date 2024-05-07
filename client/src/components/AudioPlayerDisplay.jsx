import Marquee from "react-fast-marquee";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import audioExample from "../../../server/tempAudio.wav";

// eslint-disable-next-line react/prop-types
function AudioPlayerDisplay({ audioPlayerElement }) {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Marquee className="text-[#8B8B8B]" loop={0}>
        {
          "wertyuiop[asdfghjklxcvbnmdfghjsfuhieuvhwnjebrbqbrkqjhwejkqwhehwqehqwrbnmf ,msbfsdfkjwweoru wufhsdfhsfhsjfgjahfghjafgasfjbxmvcvsiejfeori"
        }
      </Marquee>

      {/* AUDIO PLAYER */}
      <AudioPlayer
        ref={audioPlayerElement}
        src={audioExample}
        showJumpControls={false}
        customVolumeControls={[]}
        customAdditionalControls={[]}
        customControlsSection={[]}
        customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
        layout="stacked-reverse"
        className="shadow-[0_0_0_0_rgba(0,0,0,0.3)] place-self-center p-2"
      />
    </div>
  );
}

export default AudioPlayerDisplay;
