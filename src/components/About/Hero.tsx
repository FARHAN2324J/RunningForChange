import AboutImg from "../../assets/images/About.webp";
import { AnimatedText } from "../common/AnimatedText";

const Hero = () => {
  return (
    <header>
      <img
        src={AboutImg}
        alt="walking"
        className="w-full object-cover"
        loading="eager"
      />
      <section className="bg-[var(--Bg1)] px-5 lg:py-8 py-5">
        <h1 className="Heading4 text-[var(--On-accent1)]">
          <AnimatedText scrub>
            Our mission is to improve suburban quality of life by reducing car
            dependency and promoting active transportation.
          </AnimatedText>
        </h1>
      </section>
    </header>
  );
};

export default Hero;
