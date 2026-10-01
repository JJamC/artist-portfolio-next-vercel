import { useState } from "react";
import PrintsGallery from "./PrintsGallery";

export default function Prints() {
  const [videoPlaying, setVideoPlaying] = useState<string>(
    "https://www.youtube.com/embed/1slFw6llvlI?si=FEY7wprxQ_2AW73O",
  );
  const [active, setActive] = useState("");

  const prints = [
    [
      "https://www.youtube.com/embed/1slFw6llvlI?si=FEY7wprxQ_2AW73O",
      "https://jjamc.github.io/artist-website-images/manInCafe.jpeg",
    ],
    [
      "https://www.youtube.com/embed/Wsn8xfz-jRY?si=thFge-EtvZz2h2pi",
      "https://jjamc.github.io/artist-website-images/Chatnoir-aligned.jpg",
    ],
    [
      "https://www.youtube.com/embed/BDiiwHclvlA?si=fBl-U4i8JdI3K99k",
      "https://jjamc.github.io/artist-website-images/horse.png",
    ],
    [
      "https://www.youtube.com/embed/IR0lNvDrLP8?si=61osa46AS4aT3790",
      "https://jjamc.github.io/artist-website-images/rain.jpeg",
    ],
    [
      "https://www.youtube.com/embed/d_fgZCGwYHk?si=G__i1GejBh8N0vQd",
      "https://jjamc.github.io/artist-website-images/carp-aligned.jpeg",
    ],
    [
      "https://www.youtube.com/embed/Xf_Mv3VpOjo?si=0s40wFEei_dh6g_F",
      "https://jjamc.github.io/artist-website-images/presDeLaMer.jpg",
    ],
    [
      "https://www.youtube.com/embed/Pl5Xw9HSW2o?si=uic9t9olNrOhke7Q",
      "https://jjamc.github.io/artist-website-images/enfantsjouantsurlaplage.jpg",
    ],
    [
      "https://www.youtube.com/embed/3LHxEov0emk?si=nauKN0_mSRvDL8Ud",
      "https://jjamc.github.io/artist-website-images/housesInParis.jpeg",
    ],
    [
      "https://www.youtube.com/embed/wKU0duiA_MY?si=tU5KUmbZ0knzt47l",
      "https://jjamc.github.io/artist-website-images/letoile.jpg",
    ],
    [
      "https://www.youtube.com/embed/MHLeZi5STbw?si=qGu7XgotIARhUcuh",
      "https://jjamc.github.io/artist-website-images/pierrot.jpeg",
    ],
  ];

  return (
    <div>
      <div className="mb-5 flex flex-col justify-center md:flex-row">
        <iframe
          className="aspect-[16/7] md:w-250"
          src={videoPlaying}
          title="YouTube video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
      <p className="p-5 md:mx-15">
        <b>Prints |</b> a growing series of piano compositions which evoke
        artworks that have vividly inspired me.
      </p>
      <div>
        <ul className="flex flex-wrap justify-center gap-[40px]">
          {prints.map(([src, thumbnail], i) => {
            return (
              <PrintsGallery
                key={i}
                embedSrc={src}
                thumbnail={thumbnail}
                setVideoPlaying={setVideoPlaying}
                isPlaying={videoPlaying === src}
                setActive={setActive}
                active={active}
              />
            );
          })}
        </ul>
      </div>
      <br></br>
      <br></br>
      <div className="mb-5 flex flex-col justify-center md:flex-row">
        <iframe
          className="aspect-[16/7] md:w-250"
          src="https://www.youtube.com/embed/WFIMSNejgF4?si=-AkJ_4HS-E6kuqUn"
          title="YouTube video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
      <p className="p-5 md:mx-15">
        <b>El Baño de los Espíritus |</b> A piano composition that I composed
        out of response to Santiago Yahuarcani's painting of the same name. The
        painting formed part of his exhibition The Beginning of Knowledge that
        was on display at the Whitworth Art Gallery, Manchester in 2025. In this
        composition, I attempted to capture a sense of the power of the gods
        depicted in Yuhuarcani's paintings.
      </p>
      <br></br>
      <br></br>
      <div className="mb-5 flex flex-col justify-center md:flex-row">
        <iframe
          className="aspect-[16/7] md:w-250"
          src="https://www.youtube.com/embed/dtk8PkFTqB8?si=u0wZN0oi6VtV6sAi"
          title="YouTube video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
      <p className="p-5 md:mx-15">
        <b>Valse Impromptu |</b> A composition born out of a night improvising
        at the piano during lockdown in 2021
      </p>
    </div>
  );
}
