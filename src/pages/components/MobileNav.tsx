interface MobileNavProps {
  setActive: React.Dispatch<React.SetStateAction<string>>;
  setNav: React.Dispatch<React.SetStateAction<string>>;
  nav: string;
}

export default function MobileNav({setActive, setNav, nav}: MobileNavProps) {

    const handleNavClick = (page: string) => {
      setNav(page);
    };
    return(
    <nav className="flex gap-3 justify-center">
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        handleNavClick("about");
        setActive("about");
      }}
    >
      <h2>About</h2>
    </a>
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        handleNavClick("Recordings");
        setActive("Recordings");
      }}
    >
      <h2>Recordings</h2>
    </a>

    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        handleNavClick("Compositions");
        setActive("Compositions");
      }}
    >
      <h2>Compositions</h2>
    </a>
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        handleNavClick("film");
        setActive("film");
      }}
    >
      <h2>Film</h2>
    </a>
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        handleNavClick("production");
        setActive("production");
      }}
    >
      <h2>Production</h2>
    </a>

    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        handleNavClick("Contact");
        setActive("Contact");
      }}
    >
      <h2>Contact</h2>
    </a>
  </nav>
    )
}