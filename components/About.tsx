"use client";
/* eslint-disable */

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
          Throughout my journey from coding to design, I've been guided by a
          simple belief:{" "}
          <span className="text-white">
            technology should feel natural and intuitive.
          </span>{" "}
          At the crossroads of AI, Web3, and Finance, I focus on creating user
          experiences that make complex ideas accessible.
        </p>
        <p className="text-start  text-muted-foreground lg:px-6">
          Currently, I'm leading product design at a stealth AI startup that's
          rethinking how we interact with money. I'm also steering the design
          team at{" "}
          <a
            className="no-wrap text-primary dark:text-white"
            href="https://vela.exchange"
            target="blank"
            rel="noopener noreferrer"
          >
            Vela Exchange
          </a>
          , a decentralized platform for perpetual trading. As a co-founder,
          designer, and developer at{" "}
          <a
            className="no-wrap text-primary dark:text-white"
            href="https://swoop.exchange"
            target="blank"
            rel="noopener noreferrer"
          >
            Swoop Exchange
          </a>
          , I've helped build a meta-aggregation engine used daily by thousands
          of users.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          Across all the applications I've been involved with, I've had the
          privilege to contribute in facilitating billions in transaction
          volume. I believe in making technology feel human—designing
          applications and experiences that are seamless extensions of
          ourselves, serving real needs with simplicity and clarity.
        </p>
      </div>
    </section>
  );
}
