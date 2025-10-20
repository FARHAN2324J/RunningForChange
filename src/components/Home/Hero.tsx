import heroImg from "../../assets/images/hero.webp";
import Button from "../ui/Button";
const Hero = () => {
  return (
    <header className="relative flex sm:items-end items-start sm:justify-between justify-end sm:flex-row flex-col sm:gap-0 gap-10 px-5 py-8 xl:min-h-[800px] lg:min-h-[750px] md:min-h-[700px] min-h-[600px]">
      <img
        src={heroImg}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
        loading="eager"
      />
      <div className="bg-[var(--Bg5)] rounded-lg py-4 px-5 backdrop-blur-sm w-fit flex sm:flex-row flex-col sm:gap-10 gap-6 md:pr-10 pr-5">
        <div className="flex flex-col gap-1">
          <span className="Caption">Location:</span>
          <span className="Caption">Green Bay Trail, Glencoe, IL</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="Caption">Date</span>
          <span className="Caption">May 12, 2025</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="Caption">Time</span>
          <span className="Caption">
            <time>6AM</time> - NOON
          </span>
        </div>
      </div>
      <Button className="hover:text-[var(--Bg1)] text-[var(--Bg3)] bg-[var(--Bg4)]">
        <span className="font-medium font-sans">REGISTER</span>
      </Button>
    </header>
  );
};

export default Hero;
