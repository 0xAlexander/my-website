"use client";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-start text-muted-foreground lg:px-6">
          I began coding and exploring web development at age 17, drawn to the
          magical process of turning ideas into reality and enjoying the
          problem-solving nature of the process. I designed and developed a few
          websites from that point onwards, but at 21, my journey took a detour
          when military service called. After serving, I pivoted to the
          Engineering and Manufacturing sector, where I played a pivotal role in
          overseeing Quality for large-scale renewable energy projects.
        </p>
        <p className="text-start  text-muted-foreground lg:px-6">
          Simultaneously, the last 4 years I&#39;ve been immersed in the world
          of Web3. 2 years ago I co-founded MtopSwap, where i&#39;ve also been
          the Head of Engineering and Development. I&#39;ve enjoyed leading a
          team that&#39;s pioneering in decentralized application development.
          It&#39;s been a hands-on, challenging experience that has honed my
          technical and leadership skills.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          Outside of work, I enjoy reading about blockchain and cryptography and
          spend a lot of time outdoors, whether that&#39;s hiking or simply
          enjoying nature. Looking to the future, my goal is to transition fully
          into the tech industry, where I can apply my Frontend Development and
          Leadership knowledge, with my multi-year QA expertise.
        </p>
      </div>
    </section>
  );
}
