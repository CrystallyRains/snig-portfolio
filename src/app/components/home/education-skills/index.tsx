"use client";

import Image from "next/image";
import { getImgPath } from "@/utils/image";

const EducationSkills = () => {
  // --------------------------
  // EDUCATION SECTION CONTENT
  // --------------------------
  const education = [
    {
      title: "Diploma in Computer Engineering (2019–2022)",
      description:
        "Solid foundation in programming, operating systems, computer networks, and software engineering fundamentals.",
    },
    {
      title: "Bachelor of Computer Science (2022–2025)",
      description:
        "Expanded knowledge in algorithms, data structures, cloud computing, and system design principles.",
    },
    {
      title: "AWS Certifications & Cloud Learning Path",
      description:
        "Developing expertise in AWS architecture, security, DevOps, serverless, networking, and AI/ML workloads through real-world projects.",
    },
  ];

  // --------------------------
  // SKILLS SECTION CONTENT
  // --------------------------
  const skills = [
    { name: "AWS", icon: "/images/skills/aws.png", rating: 5 },
    { name: "VPC & Networking", icon: "/images/skills/network.png", rating: 5 },
    { name: "Serverless (Lambda)", icon: "/images/skills/lambda.jpeg", rating: 5 },
    { name: "DevOps / CI-CD", icon: "/images/skills/GIT.png", rating: 4 },
    { name: "Cloud Security", icon: "/images/skills/shield.png", rating: 5 },
    { name: "AI / ML on Cloud", icon: "/images/skills/aiml.jpeg", rating: 4 },
  ];

  return (
    <section>
      <div className="border-t border-softGray overflow-hidden">
        <div className="container relative z-10">
          {/* Background vector */}
          <Image
            src={getImgPath("/images/home/education-skill/edu-skill-vector.svg")}
            alt="vector"
            width={260}
            height={170}
            className="no-print absolute top-0 left-0 transform -translate-y-1/2"
          />

          <div className="relative z-10 py-16 md:py-32">
            {/* Heading */}
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 xl:mb-16">
              <h2>Education & Skills</h2>
              <p className="text-xl text-orange-500">( 04 )</p>
            </div>

            {/* Main layout */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 xl:gap-20">

              {/* Education List */}
              <div className="w-full lg:max-w-md flex flex-col gap-8">
                {education.map((item, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="no-print mt-2.5 w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center border-black">
                      <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                    </div>

                    <div className="flex-1 flex flex-col gap-2">
                      <h5>{item.title}</h5>
                      <p className="font-normal text-gray-700">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 xs:grid-cols-3 gap-5 xl:gap-7 w-full">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="p-4 xl:p-6 border border-softGray rounded-lg flex flex-col gap-5 sm:gap-10 items-center justify-between"
                  >
                    <div className="flex flex-col items-center gap-5">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={70}
                        height={70}
                        className="object-contain"
                      />
                      <p className="text-black font-normal">{skill.name}</p>
                    </div>

                    {/* Ratings */}
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          width="9"
                          height="9"
                          viewBox="0 0 9 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="9"
                            height="9"
                            rx="4.5"
                            fill={i < skill.rating ? "#FE4300" : "#C0D8E0"}
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;
