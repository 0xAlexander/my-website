"use client";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-start text-muted-foreground lg:px-6">
          I embarked on my tech journey at 17, diving into web development with
          a passion for bringing ideas to life. This passion led me to design
          and develop various websites as a freelancer. After military service,
          I ventured into quality assurance within the engineering sector,
          focusing on renewable energy projects.
        </p>
        <p className="text-start  text-muted-foreground lg:px-6">
          In parallel, my path took an exciting turn into the Web3 space,
          co-founding{" "}
          <a
            className="no-wrap text-primary dark:text-white"
            href="https://swoop.exchange"
            target="blank"
            rel="noopener noreferrer"
          >
            Swoop Exchange
          </a>{" "}
          two years ago, in a mission to tackle the fragmentation of liquidity
          and protocols and simplify the Decentralized Finance onboarding
          process for the next billion users. Our platform has quickly reached
          critical milestones, boasting a trading volume of millions USD and
          attracting over 4,000 monthly active users.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          Outside of work, I&#39;m an avid reader of blockchain and cryptography
          and enjoy my time outdoors. Looking forward, I aim to leverage my
          frontend development and quality assurance expertise to contribute to
          impactful tech ventures.
        </p>
      </div>
    </section>
  );
}
