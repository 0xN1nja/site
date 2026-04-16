import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "0xN1nja // work",
  description: "Find a list of all my projects here.",
  openGraph: {
    title: "0xN1nja // work",
    description: "Find a list of all my projects here.",
    images: ["https://0xn1nja.dev/og/work.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "0xN1nja // work",
    description: "Find a list of all my projects here.",
    images: ["https://0xn1nja.dev/og/work.png"],
  },
};

type Experience = {
  company: string;
  logo: string;
  role: string;
  period: string;
  location: string;
  points: string[];
};

const experiences: Experience[] = [
  {
    company:
      '<b><a href="https://coldran.com" target="_blank" rel="noopener noreferrer" class="link">Coldran</a></b>',
    logo: "/images/work/coldran.webp",
    role: "Co-Founder",
    period: "Sep 2025 - Present",
    location: "Remote",
    points: [
      "Allow the customers to have autonomy to get help with bugs, outdated documentation, feature requests, etc. As Fast as Possible to reach Resolution.",
    ],
  },
  {
    company:
      '<b><a href="https://github.com/GDSC-Manipal-University-Jaipur" target="_blank" rel="noopener noreferrer" class="link">Google Developer Groups</a></b>',
    logo: "/images/work/gdg.webp",
    role: "Working Team",
    period: "Nov 2025 - Present",
    location: "On-Campus Manipal University Jaipur",
    points: [],
  },
];

const ExperienceCard = ({ exp }: { exp: Experience }) => (
  <div className="mb-6">
    <div className="flex items-center gap-3 mb-1">
      {exp.logo ? (
        <Image
          src={exp.logo}
          alt={`${exp.company} logo`}
          width={24}
          height={24}
          className="rounded-sm"
        />
      ) : (
        <div className="w-6 h-6 rounded-sm bg-text/20 flex items-center justify-center text-xs font-bold">
          ?
        </div>
      )}
      <h3
        className="text-md font-semibold"
        dangerouslySetInnerHTML={{ __html: exp.company }}
      />
    </div>
    <p className="text-sm text-text/70 ml-9">
      {exp.role} · {exp.period} · {exp.location}
    </p>
    <ul className="list-disc p-3 ml-6">
      {exp.points.map((point, idx) => (
        <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />
      ))}
    </ul>
  </div>
);

const workPage = () => {
  return (
    <section>
      <div className="pb-10">
        <h1 className="text-2xl font-bold pb-8">Work</h1>A summary of my
        professional journey so far - the teams I've worked with, technologies
        I've built with and the problems I've helped solve.
        <br />
        <br />
        <p>
          Always happy to discuss new ideas - hit me up at
          <a
            href="https://x.com/0xN1nja"
            className="link ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            @0xN1nja
          </a>
          {""}.
        </p>
      </div>

      <h2 className="text-xl font-bold pb-8">Experience</h2>

      {experiences.map((exp) => (
        <ExperienceCard key={exp.company} exp={exp} />
      ))}
    </section>
  );
};

export default workPage;
