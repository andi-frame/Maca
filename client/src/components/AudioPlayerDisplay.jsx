import Marquee from "react-fast-marquee";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import { useEffect, useState } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
function AudioPlayerDisplay({ audioPlayerElement, title, pageNumber }) {
  const [marquee, setMarquee] = useState("");
  const [audioUrl, setAudioUrl] = useState();

  useEffect(() => {
    async function fetchBookData() {
      try {
        // Fetch book data
        const res = await axios.post("http://localhost:5000/book/", { filter: { title: title } });
        const book = res.data.response[0];

        // Set marquee text
        const text = book.text[pageNumber - 1];
        setMarquee(text);

        // Fetch audio blobUrl
        const resAudio = await axios.post("http://localhost:5000/utils/texttoaudio", { text: text });
        const audioData = resAudio.data.audioData;

        const audioObject = Object.values(audioData);
        const audioFile = new Uint8Array(audioObject);
        const audioBlob = new Blob([audioFile], { type: "application/pdf" });
        const url = URL.createObjectURL(audioBlob);

        console.log(url);
        setAudioUrl(url);

        // Error
      } catch (error) {
        console.log(error);
      }
    }
    fetchBookData();
  }, [pageNumber, title]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Marquee className="text-[#8B8B8B]" loop={0}>
        {`${marquee}`}
      </Marquee>

      {/* AUDIO PLAYER */}
      <AudioPlayer
        ref={audioPlayerElement}
        src={audioUrl}
        autoPlay={false}
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
