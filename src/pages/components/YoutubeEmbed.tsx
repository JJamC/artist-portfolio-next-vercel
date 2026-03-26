interface YoutubeEmbedProps {
  embedSrc: string | undefined;
  description: string | undefined;
  title: string | undefined;
}

export default function YoutubeEmbed({
  embedSrc,
  title,
  description
}: YoutubeEmbedProps) {

  return (
    <div>
    <iframe
      className="md:h-60 md:w-100"
      src={embedSrc}
      title="YouTube video"
      allow="autoplay; encrypted-media"
      allowFullScreen
      />
      <div>
        {title && <p><b>{title}</b></p>}
    {description && <p className="">{description}</p>}
      </div>
      </div>
  );
}
