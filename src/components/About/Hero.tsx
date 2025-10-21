import { Link } from "react-router-dom";
import AboutImg from "../../assets/images/About.webp";
import { AnimatedText } from "../common/AnimatedText";
import Button from "../ui/Button";

const Hero = () => {
  const items = [
    {
      id: 1,
      title: "Community Well-Being",
      content:
        "Improve the health, safety, and connectivity of suburban neighborhoods",
    },
    {
      id: 2,
      title: "Sustainable Mobility",
      content:
        "Foster a culture of biking and walking as viable and desirable alternatives",
    },
    {
      id: 3,
      title: "Active Participation",
      content:
        "Believe in the power of collective action and community involvement",
    },
  ];
  return (
    <header>
      <img
        src={AboutImg}
        alt="walking"
        className="w-full min-h-[700px] object-cover"
        loading="eager"
      />
      <section className="bg-[var(--Bg1)] px-5 lg:py-8 py-5 min-h-[800px] flex flex-col justify-between items-start">
        <h1 className="Heading4 text-[var(--On-accent1)] ">
          <AnimatedText animate="lines" scrub>
            Our mission is to improve suburban quality of life by reducing car
            dependency and promoting active transportation.
          </AnimatedText>
        </h1>
        <div className="grid sm:grid-cols-3 grid-cols-1 lg:gap-10 md:gap-5 gap-8 w-full">
          {items.map((i) => (
            <article key={i.id} className="w-fit">
              <h2 className="Heading5 text-[var(--On-accent1)] font-sans">
                <AnimatedText>{i.title}</AnimatedText>
              </h2>
              <div className="flex gap-2 w-full">
                <span className="mr-2 font-bold text-[var(--On-accent1)]">
                  •
                </span>
                <p className="Paragraph1 text-[var(--On-accent1)] font-medium xl:w-85 lg:w-60 md:w-auto w-65 pt-1">
                  <AnimatedText animate="lines">{i.content}</AnimatedText>
                </p>
              </div>
            </article>
          ))}
        </div>
        <Link to="/event">
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
        </Link>
      </section>
    </header>
  );
};

export default Hero;
