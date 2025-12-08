"use client";

import Image from "next/image";
import Link from "next/link";
import { getImgPath } from "@/utils/image";

/**
 * Static list of 8 projects
 * Each will link to Medium (placeholder "#" for now)
 */
const PROJECT_CARDS = [
  {
    title: "Image Emotion Detector using Hugging Face + AWS",
    image: "/images/projects/image-emotion.png",
    link: "#",
  },
  {
    title: "AI-Powered Cloud Learning Assistant (Gemini API)",
    image: "/images/projects/ai-cloud-tutor.png",
    link: "#",
  },
  {
    title: "Highly Available Architecture on AWS",
    image: "/images/projects/ha-architecture.png",
    link: "#",
  },
  {
    title: "Real-Time AWS Operations from Slack (ChatOps)",
    image: "/images/projects/slack-ops.gif",
    link: "#",
  },
  {
    title: "Serverless Inventory Management on AWS",
    image: "/images/projects/serverless-inventory.png",
    link: "#",
  },
  {
    title: "Predicting Subscriptions with Amazon SageMaker",
    image: "/images/projects/sagemaker-subscriptions.png",
    link: "#",
  },
];

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
                ( {PROJECT_CARDS.length.toString().padStart(2, "0")} )
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
              {PROJECT_CARDS.map((project, index) => (
                <Link
                  key={index}
                  href={project.link}
                  className="group flex flex-col gap-4 rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Image */}
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={getImgPath(project.image)}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col gap-2">
                    <h5 className="text-lg font-semibold leading-snug group-hover:text-primary transition-colors">
                      {project.title}
                    </h5>
                    <p className="text-secondary text-sm">
                      Read full project → (Medium link coming soon)
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
