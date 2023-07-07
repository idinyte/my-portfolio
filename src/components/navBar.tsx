import { Link, animateScroll } from "react-scroll";
import CSS from "../styles/navbar.module.css";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const offset = document.getElementById("navBar")?.offsetHeight;
    if (offset) setOffset(offset * -1);
  }, []);
  console.log(offset);

  return (
    <nav className={CSS.container} id="navBar">
      <ul>
        <Link to="introduction" smooth={true} duration={500} offset={offset}>
          <li>Introduction</li>
        </Link>

        <Link to="work_examples" className={CSS.large} smooth={true} duration={500} offset={offset}>
          <li>Works exmaples</li>
        </Link>

        <Link to="projects" smooth={true} duration={500} offset={offset}>
          <li>Projects</li>
        </Link>

        <Link to="tetris" smooth={true} duration={500} offset={offset}>
          <li>Mini Game</li>
        </Link>

        <Link to="contact" smooth={true} duration={500} offset={offset}>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
