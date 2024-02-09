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
          I started my coding journey at 17, fascinated by the idea of
          transforming rough concepts and ideas into realities through
          programming. This passion led me to design and develop various
          websites as a freelancer, but at 21, my path briefly diverged into
          military service. Upon completing my service duties, I shifted focus
          towards the engineering and manufacturing sector, where I played a
          pivotal role in overseeing Quality for large-scale renewable energy
          projects.
        </p>
        <p className="text-start  text-muted-foreground lg:px-6">
          In the past four years, my journey took another exciting turn as I
          immersed myself into the Web3 space. Frustrated by the prevalent
          user-oriented issues, I co-founded{" "}
          <a
            style={{ whiteSpace: "nowrap", textDecoration: "underline" }}
            href="https://swoop.exchange"
            target="blank"
          >
            Swoop Exchange
          </a>{" "}
          (originally MtopSwap) two years ago. Our mission was clear: to tackle
          the fragmentation of liquidity and protocols and simplify the
          Decentralized Finance onboarding process for the next billion users.
          As part of a small, dedicated team, I&#39;ve been actively involved in
          hands-on development, UI/UX design, strategy, and research. Since its
          release in February 2023, Swoop Exchange has reached 3.3 million in
          volume and roughly 2,000 monthly users, and still growing.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          Outside of work, I enjoy reading about blockchain and cryptography and
          spend a lot of time outdoors, whether that&#39;s hiking or simply
          enjoying nature. Looking to the future, my goal is to transition fully
          into the tech industry, applying my skills in frontend development,
          and the extensive quality assurance knowledge I&#39;ve gained over the
          years.
        </p>
      </div>
    </section>
  );
}
