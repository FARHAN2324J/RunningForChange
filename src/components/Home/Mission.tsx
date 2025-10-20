import { AnimatedText } from "../common/AnimatedText";
import Button from "../ui/Button";

const Mission = () => {
  return (
    <section className="bg-[var(--Bg4)] sm:px-5 sm:py-5 py-5 px-2 sm:min-h-[500px] min-h-[400px]  flex flex-col items-start justify-between">
      <h4 className="Heading4 text-[var(--Accent3)]">
        <AnimatedText animate="lines">
          Our mission is to improve suburban quality of life by
          <br className="!sm:hidden !block" />
          reducing car dependency and promoting active
          <br className="!sm:hidden !block" />
          transportation.
        </AnimatedText>
      </h4>
      <Button className="bg-[var(--Bg3)] flex items-center gap-1 hover:bg-[var(--Secondary)] ">
        <a href="" className="Link text-[var(--Bg4)] font-sans">
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
    </section>
  );
};

export default Mission;
