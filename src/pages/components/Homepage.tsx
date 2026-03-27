export default function HomePage() {
    return (
      <div className="h-auto flex justify-center">
        <iframe
          src={
            "https://www.youtube.com/embed/Xf_Mv3VpOjo?autoplay=1&mute=1&vq=hd1080"
          }
          title="YouTube video"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="h-70 w-full md:h-150 md:w-150 md:justify-content-center"
        />
      </div>
    );
    }