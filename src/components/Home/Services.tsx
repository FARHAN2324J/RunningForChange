import left from "../../assets/images/left.webp";
import MaskedReveal from "../common/MaskedReveal";
import Button from "../ui/Button";

const Services = () => {
  return (
    <section className="grid sm:grid-cols-2 grid-cols-1 min-h-[800px] ">
      <MaskedReveal>
        <article className="relative flex flex-col items-center justify-center gap-8 lg:min-h-[800px] md:min-h-[800px] min-h-[400px]">
          <img
            src={left}
            alt="30k raised"
            className="object-cover w-full h-full absolute z-[-10] top-0 left-0"
            loading="lazy"
            decoding="async"
          />
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col">
              <h2 className="Heading2 sm:whitespace-pre text-[var(--On-accent1)] text-center leading-none tracking-tight">
                30K
                <br /> Raised
              </h2>
              <p className="Paragraph1 text-[var(--On-accent1)] font-sans text-center">
                By North Shore residents
              </p>
            </div>
            <Button className="hover:text-[var(--Bg1)] text-[var(--Bg3)] bg-[var(--Bg4)]">
              <span className="font-medium font-sans">ABOUT US</span>
            </Button>
          </div>
        </article>
      </MaskedReveal>
      <MaskedReveal clipTo="inset(0% 0% 0% 100%)">
        <article className="lg:px-16 py-6 px-10 bg-[var(--Bg2)] flex flex-col items-center justify-center gap-8 relative lg:min-h-[800px] md:min-h-[800px] min-h-[400px]">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col gap-3">
              <h3 className="Heading2 text-[var(--On-accent1)] text-center leading-none">
                Don't Miss a Step
              </h3>
              <p className="Paragraph1 text-[var(--P)] font-sans text-center font-medium">
                Get the latest updates and details about the event.
              </p>
            </div>
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
          </div>
        </article>
      </MaskedReveal>
    </section>
  );
};

export default Services;
