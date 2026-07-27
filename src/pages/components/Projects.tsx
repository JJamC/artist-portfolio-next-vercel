export default function Production() {
    return (
      <div>
        <div className="mb-5 flex flex-col justify-center md:flex-row">
          <iframe
            className="aspect-[16/7] md:w-250"
            src={
              "https://www.youtube.com/embed/XYyqHmqNsCo?si=FTBWtOwsBG0olfeh"
            }
            title="YouTube video"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
        <p className="p-5 md:mx-15">
          <b>Bobby |</b> The fantastical adventure of a curious runaway dog
          
          <br></br>
          Bobby is a personal nostalgia project with clear influences from
          electronic dance and video game music.
          The visuals are a nod to the pixel art popular in the video games of
          the 1990s that I grew up on. <br></br> <br></br>
          Music produced in Ableton and visuals animated in Pixelorama. <br></br>
          <br></br>
          <a
            href="https://soundcloud.com/kyarvo/sets/bobby"
            target="_blank"
            rel="noopener noreferrer"
                >
                    <b>Click here to listen in SoundCloud</b>
          </a>
        
        </p>
      </div>
    );
}