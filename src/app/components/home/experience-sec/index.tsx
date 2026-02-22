import React from "react";

const ExperienceSec = () => {
  const experiences = [
    {
      year: "2025 - Present",
      title: "Cloud Engineer",
      company: "Zero To Cloud",
      type: "Remote",
      description:
        "Designing AWS architectures across networking, serverless, AI/ML, and HA/DR while creating hands-on projects and documentation used by 5000+ learners. Provide technical guidance and production-style best practices to the Zero To Cloud community.",
    },
    {
      year: "2022 - 2025",
      title: "Cloud Engineer | Analyst III - Infrastructure Services",
      company: "DXC Technology",
      type: "Remote",
      description:
        "Resolved infra issues, improving reliability, analyzing logs, and producing clear technical documentation for smooth operations.",
    },
  ];

  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>Experience</h2>
            <p className="text-xl text-primary">( 03 )</p>
          </div>

          {/* Timeline */}
          <div className="space-y-7 md:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative"
              >
                {/* Left Section */}
                <div>
                  <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                  <h4 className="text-lg font-normal">{exp.title}</h4>
                </div>

                {/* Middle Section — Timeline */}
                <div className="relative">
                  {index < experiences.length && (
                    <div
                      className={`absolute left-0 top-3 w-px ${
                        index < experiences.length - 1 ? "h-40" : "h-30"
                      } bg-softGray`}
                    ></div>
                  )}

                  {/* Dot */}
                  <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                    <div
                      className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${
                        index === 0 ? "border-primary" : "border-black"
                      }`}
                    >
                      {index === 0 && (
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      )}
                    </div>
                  </div>

                  {/* Company */}
                  <div className="pl-4 lg:pl-7">
                    <span className="text-xl text-black font-normal">
                      {exp.company}
                    </span>
                    <p className="text-base font-normal">{exp.type}</p>
                  </div>
                </div>

                {/* Right Section — Description */}
                <div className="pl-8 sm:pl-0">
                  <p className="leading-relaxed text-base">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;
