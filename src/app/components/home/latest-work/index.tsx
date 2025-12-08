"use client";

import Image from "next/image";
import Link from "next/link";
import { getImgPath } from "@/utils/image";
import { projects } from "@/data/projects";

const LatestWork = () => {
  return (
    <section>
      <div className="bg-softGray">
        <div className="container">
          <div className="py-16 xl:py-32">
            {/* Header */}
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
              <h2>Featured Projects</h2>
              <p className="text-xl text-orange-500">
                ( {projects.length.toString().padStart(2, "0")} )
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 xl:gap-y-10">
              {projects.map((project) => (
                <div
                  key={project.slug}
                  className="group flex flex-col gap-3 xl:gap-4"
                >
                  {/* Fixed-size image frame */}
                  <div className="relative w-full aspect-[9/4] overflow-hidden rounded-lg">
                    <Image
                      src={getImgPath(project.image)}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />

                    {/* Hover overlay */}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="absolute inset-0 hidden group-hover:flex w-full h-full rounded-lg bg-primary/15 backdrop-blur-xs"
                    >
                      <span className="flex justify-center items-center p-5 w-full">
                        <svg
                          width="65"
                          height="64"
                          viewBox="0 0 65 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.333374"
                            width="64"
                            height="64"
                            rx="32"
                            fill="#FE4300"
                          />
                          <path
                            d="M25.6667 25.3333H39M39 25.3333V38.6666M39 25.3333L25.6667 38.6666"
                            stroke="#FFFF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-0 xl:gap-2">
                    <div className="flex items-center justify-between">
                      <Link href={`/projects/${project.slug}`}>
                        <h5>{project.title}</h5>
                      </Link>
                      <Image
                        src={getImgPath("/images/icon/right-arrow-icon.svg")}
                        alt="right-arrow-icon"
                        width={30}
                        height={30}
                      />
                    </div>
                    {/* Intentionally no grey subtitle/client line */}
                  </div>
                </div>
              ))}
            </div>

            {/* No "View all" button for now */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
