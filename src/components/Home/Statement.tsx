import strideTogether from "../../assets/images/stride together.webp";
import { AnimatedText } from "../common/AnimatedText";
import Button from "../ui/Button";

const Statement = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${strideTogether})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="relative xl:min-h-[850px] lg:min-h-[800px] min-h-[500px] flex items-center justify-center"
    >
      <article className="relative bg-[var(--Bg5)] px-5 py-8 flex flex-col items-center justify-center gap-3 w-full">
        <h1 className="Heading1 text-[var(--On-accent1)] text-center leading-none tracking-[-0.04em]">
          <AnimatedText scrub>
            Stride
            <br className="block md:hidden" />
            Together,
            <br className="block md:hidden" />
            Shape
            <br />
            Tomorrow.
          </AnimatedText>
        </h1>
        <p className="Paragraph1 text-[var(--On-accent1)] text-center font-sans whitespace-pre-line font-medium">
          <AnimatedText animate="lines" scrub>
            Ditch the gridlock and embrace the open road. Run, donate,
            <br /> or bring the vibe as we create pathways for a healthier, more
            <br /> connected community, one step at a time.
          </AnimatedText>
        </p>
        <Button className="bg-[var(--Bg3)] flex items-center gap-1 hover:bg-[var(--Bg2)]">
          <a
            href=""
            className="Link text-[var(--Bg4)] font-sans underline underline-offset-2"
          >
            NEWSLETTER
          </a>
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17L17 7M17 7H8M17 7V16"
              stroke="#95ff8d"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </article>
    </section>
  );
};

export default Statement;
