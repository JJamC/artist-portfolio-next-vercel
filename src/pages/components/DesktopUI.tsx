import Blog from "./Blog";
import Navbar from "./Navbar";
import Page from "./Page";
import Title from "./Title";

interface DesktopUIProps {
  setNav: React.Dispatch<React.SetStateAction<string>>;
  setActive: React.Dispatch<React.SetStateAction<string>>;
    active: string;
    nav: string;
}

export default function DesktopUI({setNav, nav, setActive, active} : DesktopUIProps) {
  return (
    <div className="m-10 flex items-center justify-center">
      <div className="grid grid-cols-[350px_900px] gap-[70px]">
        <div className="grid-span-1 justify-self-center">
          <Title setNav={setNav} setActive={setActive} />
        </div>

        <div className="grid-span-2">
          <Navbar setNav={setNav} setActive={setActive} active={active} />
        </div>

        <div className="grid-span-1 content-start">
          <Blog />
        </div>

        <div className="grid-span-2">
          <Page nav={nav} />
        </div>
      </div>
    </div>
  );
}
