import { AnimatedText } from "../common/AnimatedText";
import Button from "../ui/Button";

const Notified = () => {
  const items = [
    {
      id: 1,
      title: "6am Sunrise Start",
      content: "Early bird warm up",
    },
    {
      id: 2,
      title: "7am Community Stride",
      content: "Start run along the Green Bay Trail",
      content2: "Water and refreshment stations along the trail",
    },
    {
      id: 3,
      title: "10am Partner Showcase",
      content: "Booths from supporting businesses and organizations",
      content2: "Q+A on community improvement projects",
    },
    {
      id: 4,
      title: "11am Community Celebration",
      content: "Announcements of achievements",
      content2: "Live events, food vendors and more",
    },
  ];
  return (
    <section className="min-h-[800px] bg-[var(--Bg1)] flex flex-col justify-center items-center sm:p-0 p-5">
      <div className="flex flex-col gap-10 items-start">
        <div className="rounded-lg  w-fit flex sm:flex-row flex-col sm:gap-10 gap-6 md:pr-10 pr-5">
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
        <div className="flex flex-col gap-6">
          {items.map((i) => (
            <article key={i.id}>
              <h2 className="Heading5 text-[var(--On-accent1)] font-sans">
                <AnimatedText scrub>{i.title}</AnimatedText>
              </h2>

              <div className="flex flex-col gap-1">
                {i.content && (
                  <div className="flex gap-2 w-full">
                    <span className="mr-2 font-bold text-[var(--On-accent1)]">
                      •
                    </span>
                    <p className="Paragraph1 text-[var(--On-accent1)] font-medium pt-1 font-sans">
                      <AnimatedText animate="lines" scrub>{i.content}</AnimatedText>
                    </p>
                  </div>
                )}

                {i.content2 && (
                  <div className="flex gap-2 w-full">
                    <span className="mr-2 font-bold text-[var(--On-accent1)]">
                      •
                    </span>
                    <p className="Paragraph1 text-[var(--On-accent1)] font-medium pt-1 font-sans">
                      <AnimatedText animate="lines">{i.content2}</AnimatedText>
                    </p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
        <Button className="hover:text-[var(--Bg1)] text-[var(--Bg3)] bg-[var(--Bg4)]">
          <span className="font-medium font-sans">REGISTER</span>
        </Button>
      </div>
    </section>
  );
};

export default Notified;
