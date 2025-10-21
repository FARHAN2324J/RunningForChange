import MaskedReveal from "../common/MaskedReveal";
import Button from "../ui/Button";

const Event = () => {
  return (
    <MaskedReveal clipTo="inset(0% 0% 0% 100%)">
      <section className="bg-[var(--Bg4)] p-5 flex flex-col justify-center items-center gap-8 min-h-[600px]">
        <div className="flex flex-col items-center gap-1 md:w-2xl  w-[320px]">
          <h2 className="Heading3 text-[var(--On-accent2)] text-center sm:leading-23 leading-11">
            Upcoming
            <br className="lg:block md:hidden block" /> Event
          </h2>
          <p className="Paragraph2 text-center text-pretty !font-sans sm:leading-6 leading-5">
            Ditch the gridlock and embrace the open road. Run, donate, or bring
            the vibe on May 12, 2025 starting at the Green Bay Trail.
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <Button className="bg-[var(--Bg3)] flex items-center gap-1 hover:bg-[var(--Bg2)]">
            <a
              href=""
              className="Link text-[var(--Bg4)] font-sans underline underline-offset-2"
            >
              REGISTER
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
        </div>
      </section>
    </MaskedReveal>
  );
};

export default Event;
