"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";

const jobPositions = [
  {
    timeline: "Aug 2024 — Present",
    currentPosition: "Founding Designer & Head of Product Design",
    place: "Stealth AI Startup",
    previousPositions: [""],
    description:
      "Establishing and leading the design team for a Stealth AI Startup set to bring the New Era of Money. My role involves founding and leading the design team, setting the vision and standards for design excellence, direct branding and actively contributing to hands-on product design for going to market.",
    skills: [
      "Brand Identity",
      "Product Design",
      "UI/UX Design",
      "Design Systems",
      "Design Strategy",
      "Team Leadership",
    ],
  },
  {
    timeline: "Mar 2024 — Present",
    currentPosition: "Head of Product Design",
    place: "Vela Exchange",
    previousPositions: ["Designer and Front-end Developer"],
    description:
      "Leading the design team for Vela Exchange, a community-first, decentralized perpetuals trading platform. My role involves setting the vision and standards for design excellence, and actively contributing to hands-on product design.",
    skills: [
      "Product Design",
      "UI/UX Design",
      "Design Systems",
      "Design Strategy",
      "Team Leadership",
    ],
  },
  {
    timeline: "Feb 2022 — Presents",
    currentPosition: "Co-founder, Designer & Developer",
    place: "Swoop Exchange",
    previousPositions: [""],
    description:
      "Co-founded, designed, and developed a Next-Gen Decentralized Exchange from MVP to launch, scaling from zero to over $10M in trading volume. Swoop Exchange is powered by a novel Meta-Aggregation Engine that leverages sophisticated routing algorithms and APIs to automatically route trades from the most profitable liquidity sources, vastly improving swap efficiency and user experience.",
    skills: [
      "Typescript",
      "JavaScript",
      "CSS",
      "Tailwind CSS",
      "MUI",
      "HTML",
      "Figma",
      "UI/UX Design",
      "Blockchain tech",
      "Project Management",
      "Planning",
      "Leadership",
      "Testing & QA",
    ],
  },
  {
    timeline: "Aug 2016 — Mar 2024",
    currentPosition: "Head of QA",
    place: "Lykomitros Steel",
    previousPositions: [
      "Quality Assurance Engineer",
      "QA/QC Administrative Support",
    ],
    description:
      "Lead the QA department, focusing on renewable energy components in steel manufacturing. Maintained industry and client standards, ensuring product integrity for renewable energy.",
    skills: [
      "ISO Compliance",
      "Quality Assurance",
      "Engineering Management",
      "ISO 9001",
      "ISO 45001",
      "ISO 14001",
      "Requirement Assessment",
      "Auditing",
    ],
  },
  {
    timeline: "Nov 2013 - May 2014",
    currentPosition: "Digital Systems Admin - Internship",
    place: "OTE Group (HTO)",
    previousPositions: [""],
    description:
      "Gained valuable experience in digital systems administration, focusing on the management of contractors and capital.",
    skills: [
      "SQL",
      "Administration",
      "Problem-Solving",
      "Computer Systems",
      "System documentation",
      "Networking",
      "Cloud Computing",
      "Automation",
      "Scripting",
    ],
  },
];

export default function ExpCard() {
  return (
    <section id="experience" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Experience
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="h-full w-full p-0">
              <CardTitle className="text-base text-slate-400 whitespace-nowrap">
                {job.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <p className="text-foreground font-bold">
                {job.currentPosition} • {job.place}
              </p>
              {job.previousPositions.map((position, index) => (
                <p key={index} className="text-slate-400 text-sm font-bold">
                  {position}
                </p>
              ))}
              <CardDescription className="py-3 text-muted-foreground">
                {job.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </>
      <div className="lg:px-12 mt-12">
        <a
          href="mailto:alexander@meikopoulos.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-medium leading-tight text-foreground group"
        >
          <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
            Reach out for Full Resume
          </span>
          <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </a>
      </div>
    </section>
  );
}
