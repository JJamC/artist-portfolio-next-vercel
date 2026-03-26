interface YoutubeEmbedProps {
  embedSrc: string | undefined;
  thumbnail: string | undefined;
  isPlaying: boolean;
  setVideoPlaying: React.Dispatch<React.SetStateAction<string>>;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  active: string
}

export default function PrintsGallery({
  embedSrc,
  thumbnail,
  setVideoPlaying,
  isPlaying
}: YoutubeEmbedProps) {
  
  const handlePlay = () => {
    if(embedSrc)
    setVideoPlaying(embedSrc);
  };

  return (
    <li className="flex aspect-video h-20 w-20 overflow-hidden transition-shadow transition-transform duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] md:h-30 md:w-30">
      <div
        onClick={handlePlay}
        className="group relative inline-block h-full w-full"
      >
        <img
          className="h-full w-full object-cover"
          src={thumbnail}
          alt="YouTube thumbnail"
        />
        <span className="absolute inset-0 border-2 border-transparent transition-all duration-300 group-hover:border-[#4F517D]"></span>
      </div>
    </li>
  );
    }