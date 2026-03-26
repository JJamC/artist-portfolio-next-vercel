export default function Blog() {

  return (
    <div>
      <img
        className="h-full w-full object-cover"
        src={
          "https://artist-page-images-32345.s3.eu-north-1.amazonaws.com/Prints/website.jpg"
        }
        alt="YouTube thumbnail"
      />
      <br></br>
      <div>
        <p className="p-5 text-[16px] text-[#D2E4C4]">
          Hey there, I&apos;m Jay <b>|</b>
          <br></br>
          <br></br>
          I&apos;m a musician currently based in Manchester, UK <b>|</b>
          <br></br> <br></br>
          Here you&apos;ll find examples of my performances, original
          compositions and productions, and just about anything else I get up to
          <b> |</b>
          <br></br>
        </p>
      </div>
    </div>
  );
}