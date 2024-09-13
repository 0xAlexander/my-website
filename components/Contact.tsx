"use client";

import { Mail } from "lucide-react";
import { Button } from "./ui/button";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Get In Touch
        </h2>
      </div>
      <div className="flex flex-col gap-4 lg:px-6 mb-8">
        <h2 className="lg:block hidden text-5xl font-bold lg:text-start">
          Get In Touch
        </h2>
        <p className="lg:text-lg lg:text-start text-muted-foreground">
          If you&#39;re considering my contribution, have a question, or just
          want to say hi, you can count on hearing back from me!
        </p>
      </div>
      <div className="flex flex-row justify-center items-center gap-4 lg:px-6 mb-4">
        <a
          href="mailto:alexander@meikopoulos.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:cursor-pointer w-full"
        >
          <Button variant={"default"} className="w-full h-full">
            <div className="flex flex-row items-center">
              <Mail className="dark:text-white text-muted h-6 w-6" />
              <p className="ml-3 text-2xl dark:text-white text-muted">
                Say hello
              </p>
            </div>
          </Button>
        </a>
      </div>
    </section>
  );
}
