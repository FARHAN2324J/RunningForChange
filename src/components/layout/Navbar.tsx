import { Link, useLocation } from "react-router-dom";
import { AnimatedText } from "../common/AnimatedText";

const Navbar = () => {
  const location = useLocation();

  const isAboutPage = location.pathname === "/about";
  return (
    <nav
      className="px-5 py-8 absolute w-full top-0 z-50"
      aria-label="Main menu"
    >
      <ul className="flex justify-between">
        <Link to="/">
          <li className="LinkMenu">
            <AnimatedText>Home</AnimatedText>
          </li>
        </Link>
        <li className="LinkMenu leading-6">
          <AnimatedText>
            Running
            <br /> for
            <br /> Change
          </AnimatedText>
        </li>
        <li className="flex flex-col gap-1 leading-6 items-end">
          {!isAboutPage && (
            <Link to="/about">
              <span className="LinkMenu">
                <AnimatedText>About Us</AnimatedText>
              </span>
            </Link>
          )}
          <Link to="/event">
            <span className="LinkMenu">
              <AnimatedText>Events</AnimatedText>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
