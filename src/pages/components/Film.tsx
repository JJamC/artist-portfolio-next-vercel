import YoutubeEmbed from "./YoutubeEmbed";

export default function Recordings() {

  const recordings = [
    [
      "https://www.youtube.com/embed/GeRSjzX7UjY?si=UTGEh4E4suYXl_W2",
      "Composer | ",
      "Mother Tongue - Episode 4 - Season 1: Babes with Blades",
    ],
    [
      "https://www.youtube.com/embed/j7YeLRVz9GY?si=GDRrAhkn7He4wQV7",
      "Composer & Piano | ",
      "Elbo Productions - With Her",
    ],
  ];

  return (
    <div>
      <ul className="flex flex-wrap justify-center gap-[60px] md:justify-end">
        {recordings.map(([src, title, desc], i) => {
          return (
            <YoutubeEmbed
              key={i}
              embedSrc={src}
              title={title}
              description={desc}
            />
          );
        })}
        </ul>
    </div>
  );
}
