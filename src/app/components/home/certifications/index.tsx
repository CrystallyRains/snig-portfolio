"use client";

import Image from "next/image";
import { getImgPath } from "@/utils/image";

const Certifications = () => {
  const certifications = [
    {
      id: "aws-saa",
      icon: "/images/certs/aws-saa.jpeg",
      name: "AWS Solutions Architect Associate",
      code: "SAA-C03",
    },
    {
      id: "aws-aip",
      icon: "/images/certs/aws-aip.jpeg",
      name: "AWS Certified AI Practitioner",
      code: "AIF-C01",
    },
    {
      id: "aws-ccp",
      icon: "/images/certs/aws-ccp.jpeg",
      name: "AWS Certified Cloud Practitioner",
      code: "CLF-C02",
    },
    {
      id: "az-900",
      icon: "/images/certs/azure-fundamentals.png",
      name: "Azure Fundamentals",
      code: "AZ-900",
    },
    {
      id: "dp-203",
      icon: "/images/certs/azure-data-engineer.png",
      name: "Azure Data Engineer Associate",
      code: "DP-203",
    },
  ];

  return (
    <section className="py-20">
      <div className="container">

        {/* Header Line + Title + Section Number */}
        <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-12">
          <h2>Certifications</h2>
          <p className="text-xl text-primary">( 02 )</p>
        </div>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="flex flex-col items-center justify-start bg-white
              border border-gray-200 shadow-sm rounded-3xl py-8 px-6"
            >
              <Image
                src={getImgPath(cert.icon)}
                alt={cert.name}
                width={140}
                height={140}
                className="object-contain mb-4 w-[140px] h-[140px]"
              />

              <p className="text-center text-lg font-medium leading-snug">
                {cert.name}
              </p>

              {cert.code && (
                <p className="mt-1 text-sm text-gray-500 text-center">
                  {cert.code}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
