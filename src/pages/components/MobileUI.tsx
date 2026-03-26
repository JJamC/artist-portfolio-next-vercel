import Blog from "./Blog";
import Navbar from "./Navbar";
import Page from "./Page";
import Title from "./Title";

interface MobileUIProps {
    setNav: React.Dispatch<React.SetStateAction<string>>;
    setActive: React.Dispatch<React.SetStateAction<string>>;
      active: string;
      nav: string;
  }

export default function MobileUI({ setNav, nav, setActive, active }: MobileUIProps) {

  return (
    <div className="m-5">
      <div>
        <Title setActive={setActive} setNav={setNav}></Title>
        <Blog></Blog>
      </div>
      <div className="mt-5">
        <Navbar setActive={setActive} setNav={setNav} active={active}></Navbar>
      </div>
      <br></br>
      <br></br>
      <div className="flex min-h-screen justify-center">
        <Page nav={nav}></Page>
      </div>
    </div>
  );
}
