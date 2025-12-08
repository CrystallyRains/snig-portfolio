// src/app/projects/[slug]/page.tsx

import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { projects, type Project } from "@/data/projects";


type ProjectContent = {
  overview: ReactNode;
  about: ReactNode;
  steps: ReactNode;
  services: ReactNode;
  timeAndCost: ReactNode;
  architectureImage?: string;
  finalResultImage?: string;
};

/* -------------------------------------------------------
   Base text and list classes
-------------------------------------------------------- */
const textBase = "text-base md:text-lg leading-relaxed text-gray-800";
const listBase =
  "list-disc pl-5 space-y-2 text-base md:text-lg leading-relaxed text-gray-800";

/* -------------------------------------------------------
   ALL PROJECT CONTENT — 6 PROJECTS
-------------------------------------------------------- */
const projectContent: Record<string, ProjectContent> = {
  /* -------------------------------------------------------
     1. IMAGE EMOTION DETECTOR
  -------------------------------------------------------- */
  "image-emotion-detector": {
    overview: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-1">
          Overview of Project ☁️
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold">Scenario</h3>
        <p className={textBase}>
          This project is built for a fictional AI-driven SaaS startup called{" "}
          <strong>Cloudhour</strong>. They want to understand how users feel from
          uploaded images using a real-time AI workflow.
        </p>
        <p className={textBase}>
          The requirement is a <strong>serverless, real-time application</strong>{" "}
          that sends an image to a pre-trained ML model and returns the detected
          emotion instantly.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold">Solution</h3>
        <p className={textBase}>
          A fully serverless AI workflow using{" "}
          <strong>Hugging Face Inference API</strong>,{" "}
          <strong>AWS Lambda</strong>, <strong>API Gateway</strong> and{" "}
          <strong>S3</strong> for UI hosting.
        </p>
      </section>
    ),

    about: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">About this project</h2>
        <p className={textBase}>
          This project demonstrates how to combine AI API inference with AWS
          serverless for real-time computer-vision tasks.
        </p>

        <p className={textBase}>The app workflow includes:</p>
        <ul className={listBase}>
          <li>Frontend hosted on S3</li>
          <li>Lambda backend calling Hugging Face</li>
          <li>REST API via API Gateway</li>
          <li>Monitoring via CloudWatch</li>
        </ul>
      </section>
    ),

    steps: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Steps I followed 👩‍💻</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Created Hugging Face API token</li>
          <li>Built Lambda to call HF emotion model</li>
          <li>Created API Gateway endpoint</li>
          <li>Hosted UI in S3</li>
          <li>Tested end-to-end</li>
        </ol>
      </section>
    ),

    services: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Services used 🛠</h2>
        <ul className={listBase}>
          <li>Hugging Face API</li>
          <li>AWS Lambda</li>
          <li>API Gateway</li>
          <li>Amazon S3</li>
          <li>CloudWatch</li>
        </ul>
      </section>
    ),

    timeAndCost: (
      <section className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Estimated time & cost ⚙️
        </h2>
        <p className={textBase}>2–3 hours • Free tier</p>
      </section>
    ),

    architectureImage: "/images/projects/image-emotion-architecture.png",
    finalResultImage: "/images/projects/image-emotion.png",
  },

  /* -------------------------------------------------------
     2. AI CLOUD TUTOR
  -------------------------------------------------------- */
  "ai-cloud-tutor": {
    overview: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-1">
          Overview of Project ☁️
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold">Scenario</h3>
        <p className={textBase}>
          CloudQuery wants an AI-powered tutor for AWS learners using Gemini +
          AWS serverless.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold">Solution</h3>
        <p className={textBase}>
          Built a serverless chatbot using <strong>Gemini API</strong>,{" "}
          <strong>Lambda</strong>, <strong>API Gateway</strong>,{" "}
          <strong>DynamoDB</strong> and <strong>AWS Amplify</strong>.
        </p>
      </section>
    ),

    about: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">About this project</h2>
        <p className={textBase}>
          This AI assistant responds to AWS questions, generates quizzes and
          keeps conversation history.
        </p>

        <ul className={listBase}>
          <li>Gemini API for reasoning</li>
          <li>Lambda for backend logic</li>
          <li>DynamoDB for logs</li>
          <li>Secrets Manager for API keys</li>
        </ul>
      </section>
    ),

    steps: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Steps I followed 👩‍💻</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Stored API key in Secrets Manager</li>
          <li>Created DynamoDB table</li>
          <li>Built Lambda to call Gemini</li>
          <li>Configured API Gateway</li>
          <li>Deployed UI using Amplify</li>
        </ol>
      </section>
    ),

    services: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Services used 🛠</h2>
        <ul className={listBase}>
          <li>API Gateway</li>
          <li>AWS Lambda</li>
          <li>DynamoDB</li>
          <li>Secrets Manager</li>
          <li>Amplify</li>
        </ul>
      </section>
    ),

    timeAndCost: (
      <section className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Estimated time & cost ⚙️
        </h2>
        <p className={textBase}>2–3 hours • ~$1</p>
      </section>
    ),

    architectureImage: "/images/projects/ai-cloud-tutor-architecture.png",
    finalResultImage: "/images/projects/ai-cloud-tutor.png",
  },

  /* -------------------------------------------------------
     3. HIGHLY AVAILABLE ARCHITECTURE
  -------------------------------------------------------- */
  "highly-available-architecture": {
    overview: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Overview of Project ☁️</h2>
        <h3 className="text-xl md:text-2xl font-semibold">Scenario</h3>
        <p className={textBase}>
          Migrating a medical app into a fault-tolerant multi-AZ architecture.
        </p>
      </section>
    ),

    about: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">
          What this project covers
        </h2>
        <ul className={listBase}>
          <li>EC2 Auto Scaling</li>
          <li>ALB health checks</li>
          <li>Multi-AZ RDS</li>
          <li>Route 53 failover</li>
        </ul>
      </section>
    ),

    steps: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Steps I followed 👩‍💻</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Launch Template</li>
          <li>Auto Scaling Group</li>
          <li>ALB setup</li>
          <li>RDS Multi-AZ</li>
          <li>Route 53 failover</li>
        </ol>
      </section>
    ),

    services: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Services used 🛠</h2>
        <ul className={listBase}>
          <li>EC2</li>
          <li>ALB</li>
          <li>RDS Multi-AZ</li>
          <li>Route 53</li>
          <li>EFS</li>
        </ul>
      </section>
    ),

    timeAndCost: (
      <section className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Estimated time & cost ⚙️
        </h2>
        <p className={textBase}>3–4 hours • ~$3</p>
      </section>
    ),

    architectureImage: "/images/projects/ha-architecture-diagram.png",
    finalResultImage: "/images/projects/ha-architecture.png",
  },

  /* -------------------------------------------------------
     4. AWS OPS FROM SLACK
  -------------------------------------------------------- */
  "aws-ops-from-slack": {
    overview: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Overview of Project ☁️</h2>
        <p className={textBase}>
          ChatOps pipeline integrating AWS → Slack for ops automation.
        </p>
      </section>
    ),

    about: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">
          What this project covers
        </h2>
        <ul className={listBase}>
          <li>AWS Chatbot</li>
          <li>CloudWatch Alarms</li>
          <li>EventBridge routing</li>
          <li>Lambda remediation</li>
          <li>IAM access control</li>
        </ul>
      </section>
    ),

    steps: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Steps I followed 👩‍💻</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Connected Slack workspace</li>
          <li>Created Lambda/SSM actions</li>
          <li>Configured CloudWatch alarms</li>
          <li>Routed alarms to Slack</li>
          <li>IAM role configuration</li>
        </ol>
      </section>
    ),

    services: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Services used 🛠</h2>
        <ul className={listBase}>
          <li>AWS Chatbot</li>
          <li>CloudWatch</li>
          <li>EventBridge</li>
          <li>Lambda</li>
          <li>IAM</li>
        </ul>
      </section>
    ),

    timeAndCost: (
      <section className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Estimated time & cost ⚙️
        </h2>
        <p className={textBase}>3–4 hours • Free tier</p>
      </section>
    ),

    architectureImage: "/images/projects/slack-ops-architecture.png",
    finalResultImage: "/images/projects/slack-ops.gif",
  },

  /* -------------------------------------------------------
     5. SERVERLESS INVENTORY MANAGEMENT
  -------------------------------------------------------- */
  "serverless-inventory-management": {
    overview: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Overview of Project ☁️
        </h2>
        <p className={textBase}>
          Serverless inventory backend using API Gateway + Lambda + DynamoDB +
          Amplify.
        </p>
      </section>
    ),

    about: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">
          What this project covers
        </h2>
        <ul className={listBase}>
          <li>REST API using API Gateway</li>
          <li>Lambda CRUD backend</li>
          <li>DynamoDB storage</li>
          <li>Amplify frontend</li>
        </ul>
      </section>
    ),

    steps: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Steps I followed 👩‍💻</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>React UI hosted on Amplify</li>
          <li>Designed API Gateway routes</li>
          <li>Lambda CRUD operations</li>
          <li>DynamoDB table modeling</li>
          <li>CloudWatch monitoring</li>
        </ol>
      </section>
    ),

    services: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Services used 🛠</h2>
        <ul className={listBase}>
          <li>DynamoDB</li>
          <li>Lambda</li>
          <li>API Gateway</li>
          <li>Amplify</li>
          <li>IAM</li>
        </ul>
      </section>
    ),

    timeAndCost: (
      <section className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Estimated time & cost ⚙️
        </h2>
        <p className={textBase}>3–4 hours • Free tier</p>
      </section>
    ),

    architectureImage: "/images/projects/serverless-inventory-architecture.png",
    finalResultImage: "/images/projects/serverless-inventory.png",
  },

  /* -------------------------------------------------------
     6. SAGEMAKER SUBSCRIPTIONS
  -------------------------------------------------------- */
  "sagemaker-subscriptions": {
    overview: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-1">
          Overview of Project ☁️
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold">Scenario</h3>
        <p className={textBase}>
          Build + train + deploy a subscription prediction model using SageMaker.
        </p>
      </section>
    ),

    about: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">
          What this project covers
        </h2>
        <ul className={listBase}>
          <li>S3 dataset ingestion</li>
          <li>SageMaker training</li>
          <li>XGBoost binary classification</li>
          <li>Real-time endpoint deployment</li>
        </ul>
      </section>
    ),

    steps: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Steps I followed 👩‍💻</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Configured SageMaker + IAM roles</li>
          <li>Uploaded dataset to S3</li>
          <li>Prepared data in Notebook</li>
          <li>Trained XGBoost model</li>
          <li>Deployed endpoint</li>
          <li>Tested predictions</li>
          <li>Cleaned up resources</li>
        </ol>
      </section>
    ),

    services: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Services used 🛠</h2>
        <ul className={listBase}>
          <li>SageMaker</li>
          <li>S3</li>
          <li>IAM</li>
          <li>CloudWatch</li>
        </ul>
      </section>
    ),

    timeAndCost: (
      <section className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Estimated time & cost ⚙️
        </h2>
        <p className={textBase}>1.5–2.5 hours • ~$1–2</p>
      </section>
    ),

    architectureImage: "/images/projects/sagemaker-subscriptions-architecture.png",
    finalResultImage: "/images/projects/sagemaker-subscriptions.png",
  },
};

/* -------------------------------------------------------
   STATIC PARAMS
-------------------------------------------------------- */
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

/* -------------------------------------------------------
   MAIN PAGE COMPONENT
-------------------------------------------------------- */
export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const content = projectContent[slug];
  if (!content) return notFound();

  return (
    <section className="bg-softGray">
      <div className="container py-16 xl:py-24">
        {/* TITLE */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold">{project.title}</h1>
        </header>

        {/* HERO IMAGE */}
        <div className="relative w-full max-w-4xl aspect-[16/9] rounded-lg overflow-hidden mb-12">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* MAIN CONTENT */}
        <div className="max-w-4xl space-y-12">
          {content.overview}
          {content.about}
          {content.steps}
          {content.services}
          {content.timeAndCost}

          {content.architectureImage && (
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">
                ➡️ Architectural diagram
              </h2>
              <div className="relative w-full max-w-3xl rounded-lg overflow-hidden border border-gray-200 bg-white mx-auto">
                <Image
                  src={content.architectureImage}
                  alt={`${project.title} architecture diagram`}
                  width={1400}
                  height={700}
                  className="w-full h-auto"
                />
              </div>
            </section>
          )}

          {content.finalResultImage && (
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">
                ➡️ Final result
              </h2>
              <p className={textBase}>
                This is the final UI demonstrating the end-to-end workflow.
              </p>
              <div className="relative w-full max-w-2xl rounded-lg overflow-hidden border border-gray-200 bg-black mx-auto">
                <Image
                  src={content.finalResultImage}
                  alt={`${project.title} final interface`}
                  width={1000}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </section>
          )}
        </div>
      </div>
    </section>
  );
}
