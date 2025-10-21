import { AnimatedText } from "../common/AnimatedText";

const Footer = () => {
  return (
    <footer className="min-h-[700px] relative bg-[var(--Bg4)]" aria-label="Site Footer">
      <address className="absolute inset-0 px-5 w-full h-full py-8 flex flex-col justify-between not-italic">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:gap-0 gap-5">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <span className="CaptionFooter">
                <AnimatedText>Email</AnimatedText>
              </span>
              <a href="" className="CaptionFooter underline">
                <AnimatedText animate="lines">hello@figma.com</AnimatedText>
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="CaptionFooter">
                Sponsorship
              </span>
              <a href="" className="CaptionFooter underline">
                <AnimatedText animate="lines">hello@figma.com</AnimatedText>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <span className="CaptionFooter">
                <AnimatedText>Socials</AnimatedText>
              </span>
              <div className="flex items-center gap-2">
                <svg
                  fill="#95ff8d"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 169.063 169.063"
                  className="bg-[#404040] p-1 rounded-sm"
                >
                  <g>
                    <path
                      d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752
		c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407
		c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752
		c17.455,0,31.656,14.201,31.656,31.655V122.407z"
                    />
                    <path
                      d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561
		C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561
		c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z"
                    />
                    <path
                      d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78
		c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78
		C135.661,29.421,132.821,28.251,129.921,28.251z"
                    />
                  </g>
                </svg>
                <svg
                  width="30px"
                  height="30px"
                  viewBox="-5 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  className="bg-[#404040] p-1 rounded-sm"
                >
                  <title>facebook [#176]</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-385.000000, -7399.000000)"
                      fill="#95ff8d"
                    >
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        <path
                          d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z"
                          id="facebook-[#176]"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="CaptionFooter">
                <AnimatedText>New Fundraiser</AnimatedText>
              </span>
              <p className="CaptionFooter">
                <AnimatedText animate="lines">
                  Running for Change is a 501(c)(3) non-profit organization.
                  Contributions are tax-deductible to the extent permitted by
                  law.
                </AnimatedText>
              </p>
            </div>
          </div>
        </div>
        <p className="Heading1 text-[var(--On-accent2)]">Running For Change</p>
      </address>
    </footer>
  );
};

export default Footer;
