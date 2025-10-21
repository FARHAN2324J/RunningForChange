import heroImgEvent from "../../assets/images/stride together.webp";
import { AnimatedText } from "../common/AnimatedText";

const Hero = () => {
  return (
    <header
      style={{
        backgroundImage: `url(${heroImgEvent})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "700px",
      }}
      className="flex items-center justify-center"
    >
      <h1 className="Heading2 text-[var(--On-accent1)]">
        <AnimatedText delay={0.3}>May 12, 2025</AnimatedText>
      </h1>
    </header>
  );
};

export default Hero;
