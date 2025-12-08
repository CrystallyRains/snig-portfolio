// src/app/projects/[slug]/page.tsx

import { type ReactNode, use } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects"; // adjust if your path is "@/data/projects"

/* -------------------------------------------------------
   Types
-------------------------------------------------------- */

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
   Styles
-------------------------------------------------------- */

const textBase = "text-base md:text-lg leading-relaxed text-gray-800";
const listBase =
  "list-disc pl-5 space-y-2 text-base md:text-lg leading-relaxed text-gray-800";

/* -------------------------------------------------------
   CONTENT FOR ALL 6 PROJECTS
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
          A fictional SaaS startup wants to detect emotion from uploaded images
          using a real-time AI workflow.
        </p>
        <h3 className="text-xl md:text-2xl font-semibold">Solution</h3>
        <p className={textBase}>
          A serverless workflow using <strong>Hugging Face API</strong>,{" "}
          <strong>Lambda</strong>, <strong>API Gateway</strong>, and{" "}
          <strong>S3</strong>.
        </p>
      </section>
    ),
    about: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">About this project</h2>
        <p className={textBase}>
          A real-time computer-vision workflow powered by serverless and
          Hugging Face inference.
        </p>
        <ul className={listBase}>
          <li>S3 UI hosting</li>
          <li>Lambda invoking HF inference API</li>
          <li>API Gateway for routing</li>
          <li>CloudWatch logging</li>
        </ul>
      </section>
    ),
    steps: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Steps I followed 👩‍💻</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Create Hugging Face API token</li>
          <li>Build Lambda to call HF model</li>
          <li>Configure API Gateway endpoint</li>
          <li>Host UI on S3</li>
          <li>Test workflow</li>
        </ol>
      </section>
    ),
    services: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Services used 🛠</h2>
        <ul className={listBase}>
          <li>Hugging Face API</li>
          <li>AWS Lambda</li>
          <li>Amazon S3</li>
          <li>API Gateway</li>
          <li>CloudWatch</li>
        </ul>
      </section>
    ),
    timeAndCost: (
      <section>
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
          Build an AI-powered AWS tutor using Gemini + AWS services.
        </p>
        <h3 className="text-xl md:text-2xl font-semibold">Solution</h3>
        <p className={textBase}>
          A serverless chatbot using <strong>Gemini API</strong>,{" "}
          <strong>Lambda</strong>, <strong>DynamoDB</strong>,{" "}
          <strong>API Gateway</strong> and <strong>Amplify</strong>.
        </p>
      </section>
    ),
    about: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">About this project</h2>
        <p className={textBase}>
          The chatbot answers AWS questions, generates quizzes, and stores
          conversation history.
        </p>
        <ul className={listBase}>
          <li>Gemini for reasoning</li>
          <li>DynamoDB for logs</li>
          <li>Secrets Manager for keys</li>
        </ul>
      </section>
    ),
    steps: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Steps I followed 👩‍💻</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Setup Secrets Manager</li>
          <li>Create DynamoDB table</li>
          <li>Build Lambda chatbot handler</li>
          <li>Create API Gateway routes</li>
          <li>Deploy UI via Amplify</li>
        </ol>
      </section>
    ),
    services: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Services used 🛠</h2>
        <ul className={listBase}>
          <li>Lambda</li>
          <li>DynamoDB</li>
          <li>API Gateway</li>
          <li>Amplify</li>
          <li>Secrets Manager</li>
        </ul>
      </section>
    ),
    timeAndCost: (
      <section>
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
        <h2 className="text-2xl md:text-3xl font-semibold">
          Overview of Project ☁️
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold">Scenario</h3>
        <p className={textBase}>
          Migrating a healthcare application into a fault-tolerant multi-AZ
          architecture.
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
          <li>Create Launch Template</li>
          <li>Set up Auto Scaling Group</li>
          <li>Configure ALB</li>
          <li>Deploy Multi-AZ RDS</li>
          <li>Configure Route 53 failover</li>
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
      <section>
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
        <h2 className="text-2xl md:text-3xl font-semibold">
          Overview of Project ☁️
        </h2>
        <p className={textBase}>
          A ChatOps pipeline that sends AWS alarms and commands directly into
          Slack.
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
          <li>CloudWatch alarms</li>
          <li>EventBridge routing</li>
          <li>Lambda remediation actions</li>
        </ul>
      </section>
    ),
    steps: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Steps I followed 👩‍💻</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Connect Slack workspace</li>
          <li>Create Lambda actions</li>
          <li>Configure CloudWatch alarms</li>
          <li>Route alarms to Slack</li>
          <li>Set IAM permissions</li>
        </ol>
      </section>
    ),
    services: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Services used 🛠</h2>
        <ul className={listBase}>
          <li>AWS Chatbot</li>
          <li>Lambda</li>
          <li>CloudWatch</li>
          <li>EventBridge</li>
          <li>IAM</li>
        </ul>
      </section>
    ),
    timeAndCost: (
      <section>
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
          A fully serverless REST API backend for managing inventory using AWS.
        </p>
      </section>
    ),
    about: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">
          What this project covers
        </h2>
        <ul className={listBase}>
          <li>API Gateway REST API</li>
          <li>Lambda CRUD logic</li>
          <li>DynamoDB data storage</li>
          <li>Amplify-hosted frontend</li>
        </ul>
      </section>
    ),
    steps: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Steps I followed 👩‍💻</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Build React UI & deploy to Amplify</li>
          <li>Design REST routes</li>
          <li>Implement CRUD handlers</li>
          <li>Model DynamoDB table</li>
          <li>Enable CloudWatch logs</li>
        </ol>
      </section>
    ),
    services: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Services used 🛠</h2>
        <ul className={listBase}>
          <li>API Gateway</li>
          <li>Lambda</li>
          <li>DynamoDB</li>
          <li>Amplify</li>
          <li>IAM</li>
        </ul>
      </section>
    ),
    timeAndCost: (
      <section>
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
          Build and deploy a machine learning subscription prediction model
          using Amazon SageMaker.
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
          <li>SageMaker training jobs</li>
          <li>XGBoost binary classification</li>
          <li>Real-time inference endpoint</li>
        </ul>
      </section>
    ),
    steps: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Steps I followed 👩‍💻</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Configure IAM roles for SageMaker</li>
          <li>Upload dataset into S3</li>
          <li>Prepare data in Notebook instance</li>
          <li>Train XGBoost model</li>
          <li>Deploy real-time endpoint</li>
          <li>Test predictions</li>
          <li>Cleanup resources</li>
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
      <section>
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
   STATIC PARAMS (SSG)
-------------------------------------------------------- */

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

/* -------------------------------------------------------
   MAIN PAGE (Next.js 15 – params is a Promise)
-------------------------------------------------------- */

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

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
              <h2 className="text-2xl md:text-3xl font-semibold">➡️ Final result</h2>
              <p className={textBase}>
                This is the final UI demonstrating the complete workflow.
              </p>
              <div className="relative w-full max-w-2xl rounded-lg overflow-hidden border border-gray-200 bg-black mx-auto">
                <Image
                  src={content.finalResultImage}
                  alt={`${project.title} final result`}
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
