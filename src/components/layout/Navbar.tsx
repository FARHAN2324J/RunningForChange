import { AnimatedText } from "../common/AnimatedText";

const Navbar = () => {
  return (
    <nav
      className="px-5 py-8 absolute w-full top-0 z-50"
      aria-label="Main menu"
    >
      <ul className="flex justify-between">
        <li className="LinkMenu">
          <AnimatedText>Home</AnimatedText>
        </li>
        <li className="LinkMenu leading-6">
          <AnimatedText>
            Running
            <br /> for
            <br /> Change
          </AnimatedText>
        </li>
        <li className="flex flex-col gap-1 leading-6 items-end">
          <span className="LinkMenu">
            <AnimatedText>About Us</AnimatedText>
          </span>
          <span className="LinkMenu">
            <AnimatedText>Events</AnimatedText>
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
