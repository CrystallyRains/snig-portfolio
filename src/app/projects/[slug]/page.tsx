// src/app/projects/[slug]/page.tsx
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { projects, type Project } from "@/data/projects";

type ProjectPageProps = {
  params: { slug: string };
};


type ProjectContent = {
  overview: ReactNode;
  about: ReactNode;
  steps: ReactNode;
  services: ReactNode;
  timeAndCost: ReactNode;
  architectureImage?: string;
  finalResultImage?: string;
};

const textBase =
  "text-base md:text-lg leading-relaxed text-gray-800";

const listBase =
  "list-disc pl-5 space-y-2 text-base md:text-lg leading-relaxed text-gray-800";

const projectContent: Record<string, ProjectContent> = {
  "image-emotion-detector": {
    overview: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-1">
          Overview of Project ☁️
        </h2>

        <h3 className="text-xl md:text-2xl font-semibold">
          Scenario
        </h3>
        <p className={textBase}>
          This project is built for a fictional AI-driven SaaS startup
          called <strong>Cloudhour</strong>. They want to understand
          how users feel from profile photos and marketing images, so
          they can measure engagement during campaigns and feedback
          sessions.
        </p>
        <p className={textBase}>
          The requirement is a <strong>serverless, real-time
          application</strong> that can accept an image, run it through
          a pre-trained model, and return the dominant emotion
          instantly—without managing any ML infrastructure.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold">
          Solution
        </h3>
        <p className={textBase}>
          To solve this, I designed a fully serverless{" "}
          <strong>Image Emotion Detection</strong> workflow using the{" "}
          <strong>Hugging Face Inference API</strong> for model
          inference, with <strong>AWS Lambda</strong> and{" "}
          <strong>Amazon API Gateway</strong> handling the backend.
          Users upload an image from a simple frontend hosted on{" "}
          <strong>Amazon S3</strong>; the browser sends the image to an
          API, Lambda calls Hugging Face’s facial emotion model, and
          the emotion is returned in real time.
        </p>
      </section>
    ),

    about: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">
          About this project
        </h2>

        <p className={textBase}>
          This build is a compact case study of how AI APIs and AWS
          serverless services can be combined to create a real feature
          that would sit inside a SaaS product. The UI is intentionally
          simple so the focus stays on the integration and
          architecture.
        </p>

        <p className={textBase}>
          In this project, the application:
        </p>

        <ul className={listBase}>
          <li>
            Uses the <strong>Hugging Face Inference API</strong> to run
            facial emotion recognition on uploaded images.
          </li>
          <li>
            Handles image parsing and API calls in an{" "}
            <strong>AWS Lambda</strong> function secured with an API
            token.
          </li>
          <li>
            Exposes the backend through a{" "}
            <strong>REST endpoint</strong> using{" "}
            <strong>Amazon API Gateway</strong>.
          </li>
          <li>
            Serves a lightweight <strong>HTML/CSS/JS</strong> frontend
            from <strong>Amazon S3</strong> for image uploads.
          </li>
          <li>
            Logs and monitors execution with{" "}
            <strong>Amazon CloudWatch</strong>.
          </li>
        </ul>

        <p className={textBase}>
          The result is a small, production-style feature that
          demonstrates how to wire together Hugging Face and AWS
          serverless for real-time computer-vision use cases.
        </p>
      </section>
    ),

    steps: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Steps I followed 👩‍💻
        </h2>

        <ol className="list-decimal pl-5 space-y-2 text-base md:text-lg leading-relaxed text-gray-800">
          <li>
            Created a <strong>Hugging Face</strong> account and
            generated an Inference API token.
          </li>
          <li>
            Implemented an <strong>AWS Lambda</strong> function to
            accept an image payload, call the Hugging Face emotion
            model, and return the prediction.
          </li>
          <li>
            Connected Lambda to <strong>Amazon API Gateway</strong> to
            expose a secure HTTPS endpoint for the frontend.
          </li>
          <li>
            Built a minimal, responsive{" "}
            <strong>HTML/CSS/JavaScript</strong> interface and hosted
            it on <strong>Amazon S3</strong> as a static website.
          </li>
          <li>
            Tested end-to-end with multiple images and used{" "}
            <strong>CloudWatch</strong> logs to validate and debug the
            flow.
          </li>
        </ol>
      </section>
    ),

    services: (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Services used 🛠
        </h2>

        <ul className={listBase}>
          <li>
            <strong>Hugging Face Inference API</strong> – pre-trained
            facial emotion recognition model.
          </li>
          <li>
            <strong>AWS Lambda</strong> – executes the backend logic
            for processing and inference calls.
          </li>
          <li>
            <strong>Amazon API Gateway</strong> – exposes the REST
            endpoint for the web application.
          </li>
          <li>
            <strong>Amazon S3</strong> – hosts the static web UI for
            image uploads and displaying results.
          </li>
          <li>
            <strong>Amazon CloudWatch</strong> – logging and basic
            monitoring of Lambda executions.
          </li>
        </ul>
      </section>
    ),

    timeAndCost: (
      <section className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Estimated time & cost ⚙️
        </h2>

        <p className={textBase}>
          <strong>Estimated time:</strong> 2–3 hours
        </p>
        <p className={textBase}>
          <strong>Estimated cost:</strong> ~₹0 (comfortably within AWS
          Free Tier for S3, API Gateway and Lambda).
        </p>
        <p className="text-sm md:text-base leading-relaxed text-gray-600">
          Hugging Face&apos;s hosted models can be used under their
          community plan with a limited request rate, which is more
          than enough for learning and portfolio-level usage.
        </p>
      </section>
    ),

    architectureImage: "/images/projects/image-emotion-architecture.png",
    finalResultImage: "/images/projects/image-emotion.png",
  },
  "ai-cloud-tutor": {
  overview: (
    <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-semibold mb-1">
        Overview of Project ☁️
      </h2>

      <h3 className="text-xl md:text-2xl font-semibold">Scenario</h3>
      <p className={textBase}>
        CloudQuery, an online cloud-learning platform, wants to introduce an
        intelligent AI-powered tutor that can answer AWS questions instantly,
        explain complex concepts, and generate practice quizzes for learners.
      </p>
      <p className={textBase}>
        The assistant must support natural conversations and respond to prompts
        such as:
      </p>

      <ul className={listBase}>
        <li>“What is the difference between an IAM Role and Policy?”</li>
        <li>“Explain S3 bucket versioning.”</li>
        <li>“Generate 3 quiz questions on Amazon EC2.”</li>
      </ul>

      <p className={textBase}>
        The goal is to make cloud learning more interactive while reducing the
        need for human support. Learners should be able to get answers instantly
        anytime through a simple web interface.
      </p>

      <h3 className="text-xl md:text-2xl font-semibold">Solution</h3>
      <p className={textBase}>
        To meet this requirement, I designed a fully serverless{" "}
        <strong>AI Cloud Tutor</strong> using the <strong>Gemini API</strong>{" "}
        for reasoning and natural language generation. The backend relies on{" "}
        <strong>AWS Lambda</strong>, <strong>API Gateway</strong>, and{" "}
        <strong>DynamoDB</strong>, while the frontend is deployed on{" "}
        <strong>AWS Amplify</strong>.
      </p>
      <p className={textBase}>
        This architecture provides scalability, low maintenance overhead, and
        near-instant AI responses—ideal for an always-available learning
        assistant.
      </p>
    </section>
  ),

  about: (
    <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-semibold">
        About this project
      </h2>

      <p className={textBase}>
        This build demonstrates how Generative AI can be integrated into a
        modern serverless workflow. The system connects Gemini with AWS services
        to process user queries, store interaction history, and deliver
        contextual answers in real time.
      </p>

      <p className={textBase}>In this project, the application:</p>

      <ul className={listBase}>
        <li>
          Connects <strong>AWS Lambda</strong> with the{" "}
          <strong>Gemini API</strong> to generate explanations and quizzes.
        </li>
        <li>
          Stores questions and responses in{" "}
          <strong>Amazon DynamoDB</strong> for analytics and future insights.
        </li>
        <li>
          Secures the Gemini API key using{" "}
          <strong>AWS Secrets Manager</strong>.
        </li>
        <li>
          Exposes the backend via <strong>Amazon API Gateway</strong>.
        </li>
        <li>
          Deploys a clean, responsive web interface on{" "}
          <strong>AWS Amplify</strong>.
        </li>
      </ul>

      <p className={textBase}>
        The result is a production-style AI tutor that showcases practical skills
        in serverless architecture, Generative AI integration, and secure API
        orchestration.
      </p>
    </section>
  ),

  steps: (
    <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-semibold">
        Steps I followed 👩‍💻
      </h2>

      <ol className="list-decimal pl-5 space-y-2 text-base md:text-lg leading-relaxed text-gray-800">
        <li>
          Stored the <strong>Gemini API key</strong> securely in{" "}
          <strong>AWS Secrets Manager</strong>.
        </li>
        <li>
          Created a <strong>DynamoDB</strong> table for logging questions and
          AI-generated answers.
        </li>
        <li>
          Developed a <strong>Lambda function</strong> to call the Gemini API
          and generate responses.
        </li>
        <li>
          Configured <strong>Amazon API Gateway</strong> to expose the backend as
          an HTTPS endpoint.
        </li>
        <li>
          Built and deployed the web app using <strong>AWS Amplify</strong>.
        </li>
      </ol>
    </section>
  ),

  services: (
    <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-semibold">Services used 🛠</h2>

      <ul className={listBase}>
        <li>
          <strong>Amazon API Gateway</strong> – Exposes the HTTP endpoint used
          by the web client.
        </li>
        <li>
          <strong>AWS Lambda</strong> – Handles API logic and calls the Gemini
          model.
        </li>
        <li>
          <strong>Amazon DynamoDB</strong> – Stores questions and AI responses.
        </li>
        <li>
          <strong>AWS Secrets Manager</strong> – Secures Gemini API keys.
        </li>
        <li>
          <strong>Amazon CloudWatch</strong> – Provides logs and performance
          tracking.
        </li>
        <li>
          <strong>AWS Amplify</strong> – Hosts and deploys the web application.
        </li>
        <li>
          <strong>Gemini API</strong> – Generates explanations, summaries, and
          quizzes.
        </li>
      </ul>
    </section>
  ),

  timeAndCost: (
    <section className="space-y-2">
      <h2 className="text-2xl md:text-3xl font-semibold">
        Estimated time & cost ⚙️
      </h2>

      <p className={textBase}>
        <strong>Estimated time:</strong> 2–3 hours
      </p>
      <p className={textBase}>
        <strong>Estimated cost:</strong> ~$1–$2 (within AWS Free Tier + Gemini
        free usage limits).
      </p>

      <p className="text-sm md:text-base leading-relaxed text-gray-600">
        Gemini API provides a generous free tier, which keeps this project
        cost-effective and ideal for experimentation.
      </p>
    </section>
  ),

  architectureImage: "/images/projects/ai-cloud-tutor-architecture.png",
  finalResultImage: "/images/projects/ai-cloud-tutor.png",
},
"highly-available-architecture": {
  overview: (
    <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-semibold mb-1">
        Overview of Project ☁️
      </h2>

      <h3 className="text-xl md:text-2xl font-semibold">Scenario</h3>
      <p className={textBase}>
        MediCare Hub is a lightweight medical application used by clinics to
        manage patient records and appointments. It originally ran on a
        traditional, single-stack setup, where an EC2 or database failure could
        cause downtime and block access to critical medical data.
      </p>
      <p className={textBase}>
        To improve reliability, the application is lifted and shifted to AWS
        using practices from the <strong>Reliability Pillar</strong> of the AWS
        Well-Architected Framework. The goal is to build an infrastructure that
        can automatically recover from failures and continue serving users even
        during instance crashes or Availability Zone (AZ) outages.
      </p>
      <p className={textBase}>
        The final architecture uses Auto Scaling, Multi-AZ RDS, Route 53 health
        checks and shared storage to keep MediCare Hub online even when parts of
        the system fail.
      </p>
    </section>
  ),

  about: (
    <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-semibold">
        What this project covers
      </h2>

      <p className={textBase}>
        This project is all about turning a fragile, single-stack deployment
        into a <strong>resilient, production-ready architecture</strong> on AWS.
        It focuses heavily on redundancy, health checks and automated recovery.
      </p>

      <p className={textBase}>Key reliability skills demonstrated:</p>

      <ul className={listBase}>
        <li>Designing fault-tolerant, Multi-AZ architectures.</li>
        <li>
          Using <strong>Auto Scaling Groups</strong> and health checks to
          auto-heal EC2 instances.
        </li>
        <li>
          Configuring <strong>Route 53</strong> DNS failover with health checks.
        </li>
        <li>
          Deploying <strong>Multi-AZ Amazon RDS</strong> for a resilient
          database layer.
        </li>
        <li>
          Adding <strong>Amazon EFS</strong> for shared storage across instances.
        </li>
      </ul>

      <p className={textBase}>
        Together, these pieces turn MediCare Hub into an architecture that
        aligns closely with the AWS Well-Architected Reliability Pillar.
      </p>
    </section>
  ),

  steps: (
    <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-semibold">
        Steps I followed 👩‍💻
      </h2>

      <ol className="list-decimal pl-5 space-y-2 text-base md:text-lg leading-relaxed text-gray-800">
        <li>
          Created an <strong>EC2 Launch Template</strong> with User Data to
          install and configure the MediCare Hub application.
        </li>
        <li>
          Deployed an <strong>Auto Scaling Group</strong> across two
          Availability Zones to run multiple EC2 instances.
        </li>
        <li>
          Configured an <strong>Application Load Balancer (ALB)</strong> to
          distribute traffic and perform health checks on instances.
        </li>
        <li>
          Launched a <strong>Multi-AZ Amazon RDS</strong> database for
          resilient, managed storage.
        </li>
        <li>
          Set up <strong>Amazon Route 53</strong> DNS with health checks and
          failover behaviour to keep the app reachable during failures.
        </li>
      </ol>
    </section>
  ),

  services: (
    <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-semibold">Services used 🛠</h2>

      <ul className={listBase}>
        <li>
          <strong>Amazon EC2</strong> – Application instances managed by an Auto
          Scaling Group across multiple AZs.
        </li>
        <li>
          <strong>Application Load Balancer (ALB)</strong> – Distributes
          incoming traffic and monitors instance health.
        </li>
        <li>
          <strong>Amazon RDS (Multi-AZ)</strong> – Highly available relational
          database for patient and appointment data.
        </li>
        <li>
          <strong>Amazon Route 53</strong> – DNS routing with health checks and
          failover policies.
        </li>
        <li>
          <strong>Amazon S3</strong> – Optional backup target for static assets
          or DNS failover content.
        </li>
        <li>
          <strong>Amazon EFS</strong> – Shared file storage across EC2 instances
          where needed.
        </li>
      </ul>
    </section>
  ),

  timeAndCost: (
    <section className="space-y-2">
      <h2 className="text-2xl md:text-3xl font-semibold">
        Estimated time & cost ⚙️
      </h2>

      <p className={textBase}>
        <strong>Estimated time:</strong> ~3–4 hours
      </p>
      <p className={textBase}>
        <strong>Estimated cost:</strong> ~${"2–5"} (depending on how long the
        Multi-AZ resources stay running).
      </p>
    </section>
  ),

  architectureImage: "/images/projects/ha-architecture-diagram.png",
  finalResultImage: "/images/projects/ha-architecture.png",
},
"aws-ops-from-slack": {
  overview: (
    <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-semibold mb-1">
        Overview of Project ☁️
      </h2>

      <h3 className="text-xl md:text-2xl font-semibold">Scenario</h3>
      <p className={textBase}>
        ChatOpsBot is a lightweight DevOps assistant that brings AWS
        operations directly into Slack. Traditionally, engineers bounce
        between the AWS Console, CloudWatch and dashboards during incidents,
        which slows down response time and increases stress.
      </p>
      <p className={textBase}>
        With ChatOpsBot, teams receive <strong>real-time alerts in Slack</strong> and
        can trigger fixes—such as restarting a Lambda function or checking
        logs—without leaving the chat interface.
      </p>
      <p className={textBase}>
        The workflow uses <strong>AWS Chatbot, CloudWatch, EventBridge, Lambda, IAM</strong>{" "}
        and <strong>CloudFormation</strong> to build a secure, automated
        operations pipeline aligned with the{" "}
        <strong>Operational Excellence Pillar</strong> of the AWS
        Well-Architected Framework.
      </p>

      <h3 className="text-xl md:text-2xl font-semibold">Role in this project</h3>
      <p className={textBase}>
        The focus here is on acting as a{" "}
        <strong>Solutions Architect for operational excellence</strong>—designing
        a system that connects alerts into the tools engineers use daily and
        enables secure, auditable response through chat.
      </p>
      <p className={textBase}>
        Slack is integrated with AWS services to enable automated,
        permission-controlled actions that improve visibility and reduce mean
        time to recovery.
      </p>
    </section>
  ),

  about: (
    <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-semibold">
        What this project covers
      </h2>

      <p className={textBase}>
        This project shows how to implement a practical{" "}
        <strong>ChatOps workflow</strong> on AWS using Slack as the main
        interface. The system ties monitoring, alerts and automation together
        so operational tasks can be handled quickly and safely from a shared
        channel.
      </p>

      <p className={textBase}>Key skills demonstrated:</p>

      <ul className={listBase}>
        <li>Integrating Slack with AWS using <strong>AWS Chatbot</strong>.</li>
        <li>
          Monitoring and alerting with <strong>Amazon CloudWatch</strong> and{" "}
          <strong>EventBridge</strong>.
        </li>
        <li>
          Automating remediation using <strong>AWS Lambda</strong> or{" "}
          <strong>AWS Systems Manager (SSM)</strong>.
        </li>
        <li>
          Controlling operational access via <strong>IAM roles</strong>.
        </li>
        <li>
          Optionally deploying a read-only dashboard using{" "}
          <strong>CloudFormation</strong>, <strong>S3</strong> and{" "}
          <strong>CloudFront</strong>.
        </li>
      </ul>

      <p className={textBase}>
        The result is a chat-first operations workflow that improves
        collaboration and response time while keeping strong security
        boundaries in place.
      </p>
    </section>
  ),

  steps: (
    <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-semibold">
        Steps I followed 👩‍💻
      </h2>

      <ol className="list-decimal pl-5 space-y-2 text-base md:text-lg leading-relaxed text-gray-800">
        <li>
          Connected a Slack workspace to AWS using{" "}
          <strong>AWS Chatbot</strong>.
        </li>
        <li>
          Created <strong>Lambda functions</strong> or{" "}
          <strong>SSM documents</strong> to perform common operational tasks.
        </li>
        <li>
          Defined <strong>CloudWatch Alarms</strong> for key metrics and
          failure conditions.
        </li>
        <li>
          Routed relevant events and alarms to Slack using{" "}
          <strong>Amazon EventBridge</strong>.
        </li>
        <li>
          Configured <strong>IAM roles and policies</strong> so only authorised
          users can run commands from Slack.
        </li>
        <li>
          Tested the full flow with a sample alert and a recovery action
          triggered from Slack.
        </li>
        <li>
          (Optional) Deployed a read-only status/dashboard frontend using{" "}
          <strong>CloudFormation</strong>, <strong>Amazon S3</strong> and{" "}
          <strong>CloudFront</strong>.
        </li>
      </ol>
    </section>
  ),

  services: (
    <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-semibold">Services used 🛠</h2>

      <ul className={listBase}>
        <li>
          <strong>AWS Chatbot</strong> – Connects Slack channels to AWS for
          commands and notifications.
        </li>
        <li>
          <strong>Amazon CloudWatch</strong> – Provides metrics, alarms and
          logs for systems being monitored.
        </li>
        <li>
          <strong>AWS Lambda / AWS Systems Manager (SSM)</strong> – Runs
          automated remediation tasks and operational commands.
        </li>
        <li>
          <strong>Amazon EventBridge</strong> – Routes events and alarms into
          Chatbot and Slack.
        </li>
        <li>
          <strong>AWS IAM</strong> – Controls which users and channels can
          perform which actions.
        </li>
        <li>
          <strong>AWS CloudFormation</strong> – (Optional) Defines and deploys
          infrastructure and dashboard resources as code.
        </li>
        <li>
          <strong>Amazon S3 + Amazon CloudFront</strong> – (Optional) Hosts a
          read-only status dashboard.
        </li>
      </ul>
    </section>
  ),

  timeAndCost: (
    <section className="space-y-2">
      <h2 className="text-2xl md:text-3xl font-semibold">
        Estimated time & cost ⚙️
      </h2>

      <p className={textBase}>
        <strong>Estimated time:</strong> ~3–4 hours
      </p>
      <p className={textBase}>
        <strong>Estimated cost:</strong> ~${"0.10–0.50"} (mostly within the AWS
        Free Tier).
      </p>
    </section>
  ),

  architectureImage: "/images/projects/slack-ops-architecture.png",
  finalResultImage: "/images/projects/slack-ops.gif",
},
"serverless-inventory-management": {
  overview: (
    <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-semibold mb-1">
        Overview of Project ☁️
      </h2>

      <h3 className="text-xl md:text-2xl font-semibold">Scenario</h3>
      <p className={textBase}>
        CoffeeShop Manager is a lightweight inventory management backend designed
        for real-world coffee shops. Traditional systems rely on always-on
        servers that need manual scaling, constant maintenance and careful
        availability planning.
      </p>
      <p className={textBase}>
        In this project, the entire backend is reimagined using{" "}
        <strong>Amazon API Gateway, AWS Lambda, DynamoDB, IAM and CloudWatch</strong>{" "}
        to create a secure, scalable and cost-efficient serverless architecture
        that can handle real traffic without managing any servers.
      </p>
      <p className={textBase}>
        The design aligns with the <strong>Operational Excellence Pillar</strong>{" "}
        of the AWS Well-Architected Framework by implementing automated
        operations, event-driven patterns and comprehensive monitoring.
      </p>

      <h3 className="text-xl md:text-2xl font-semibold">Role in this project</h3>
      <p className={textBase}>
        The focus here is on acting as a{" "}
        <strong>Solutions Architect for a serverless inventory backend</strong>.
        The goal is to design and deploy an architecture that is:
      </p>

      <ul className={listBase}>
        <li>Easy to manage and maintain.</li>
        <li>Fully serverless and event-driven.</li>
        <li>Integrated with monitoring and security services.</li>
        <li>Capable of handling traffic spikes without downtime.</li>
        <li>Cost-effective with pay-per-use pricing.</li>
      </ul>

      <p className={textBase}>
        The system combines business logic, secure API access and a React
        frontend that talks seamlessly to the backend.
      </p>
    </section>
  ),

  about: (
    <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-semibold">
        What this project covers
      </h2>

      <p className={textBase}>
        This project is a complete example of building a{" "}
        <strong>serverless REST API</strong> and connecting it to a modern
        frontend for a realistic inventory management use case.
      </p>

      <p className={textBase}>Core areas covered include:</p>

      <ul className={listBase}>
        <li>
          Designing a REST API using <strong>API Gateway + Lambda</strong>.
        </li>
        <li>
          Persisting coffee inventory data in <strong>Amazon DynamoDB</strong>{" "}
          using best practices.
        </li>
        <li>
          Creating reusable <strong>Lambda Layers</strong> for shared
          dependencies and utilities.
        </li>
        <li>
          Implementing <strong>IAM roles and policies</strong> for secure access.
        </li>
        <li>
          Building full <strong>CRUD operations</strong> for inventory items.
        </li>
        <li>
          Configuring <strong>CORS</strong> for cross-origin access from the
          frontend.
        </li>
        <li>
          Monitoring usage and performance through{" "}
          <strong>Amazon CloudWatch</strong>.
        </li>
        <li>
          Hosting a React-based frontend on <strong>AWS Amplify</strong>.
        </li>
      </ul>

      <p className={textBase}>
        Together, these components form a production-style, low-maintenance
        backend that is optimised for scalability and cost.
      </p>
    </section>
  ),

  steps: (
    <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-semibold">
        Steps I followed 👩‍💻
      </h2>

      <ol className="list-decimal pl-5 space-y-2 text-base md:text-lg leading-relaxed text-gray-800">
        <li>
          Built a React-based management portal and deployed it using{" "}
          <strong>AWS Amplify</strong>.
        </li>
        <li>
          Designed a <strong>REST API</strong> in{" "}
          <strong>Amazon API Gateway</strong> for inventory operations.
        </li>
        <li>
          Implemented <strong>Lambda functions</strong> for:
          <ul className="list-disc pl-6 mt-1">
            <li>Listing inventory (GET).</li>
            <li>Adding new coffee items (POST).</li>
            <li>Updating existing items (PUT).</li>
            <li>Removing sold-out items (DELETE).</li>
          </ul>
        </li>
        <li>
          Modelled the inventory table in <strong>DynamoDB</strong> with keys
          such as <code>coffeeId</code>, name, price and availability.
        </li>
        <li>
          Created <strong>Lambda Layers</strong> for shared code and
          dependencies.
        </li>
        <li>
          Configured <strong>CORS</strong> on API Gateway so the Amplify-hosted
          frontend can call the API securely.
        </li>
        <li>
          Used <strong>CloudWatch logs and metrics</strong> to validate and
          monitor the overall flow.
        </li>
      </ol>
    </section>
  ),

  services: (
    <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-semibold">Services used 🛠</h2>

      <ul className={listBase}>
        <li>
          <strong>Amazon DynamoDB</strong> – Stores coffee inventory data (ID,
          name, price, availability).
        </li>
        <li>
          <strong>AWS Lambda</strong> – Implements backend logic for inventory
          CRUD operations.
        </li>
        <li>
          <strong>AWS Lambda Layers</strong> – Hosts shared dependencies and
          utilities across functions.
        </li>
        <li>
          <strong>Amazon API Gateway</strong> – Provides the HTTP REST API layer
          with CORS support.
        </li>
        <li>
          <strong>Amazon CloudWatch</strong> – Logs, monitoring and debugging
          for Lambda and API Gateway.
        </li>
        <li>
          <strong>AWS IAM</strong> – Secures Lambda execution roles and
          DynamoDB access.
        </li>
        <li>
          <strong>Amazon Amplify</strong> – Hosts and deploys the React
          frontend.
        </li>
        <li>
          <strong>React.js</strong> – Frontend framework used for the inventory
          management UI.
        </li>
      </ul>
    </section>
  ),

  timeAndCost: (
    <section className="space-y-2">
      <h2 className="text-2xl md:text-3xl font-semibold">
        Estimated time & cost ⚙️
      </h2>

      <p className={textBase}>
        <strong>Estimated time:</strong> ~3–4 hours
      </p>
      <p className={textBase}>
        <strong>Estimated cost:</strong> ~${"0.10–0.50"} (mostly within AWS Free
        Tier).
      </p>
    </section>
  ),

  architectureImage: "/images/projects/serverless-inventory-architecture.png",
  finalResultImage: "/images/projects/serverless-inventory.png",
},
"sagemaker-subscriptions": {
  overview: (
    <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-semibold mb-1">
        Overview of Project ☁️
      </h2>

      <h3 className="text-xl md:text-2xl font-semibold">Scenario</h3>
      <p className={textBase}>
        Cloudhour is preparing to launch a new subscription-based product, and
        the marketing team wants to automatically estimate whether a new user is
        likely to subscribe to the premium plan.
      </p>
      <p className={textBase}>
        The prediction is based on demographic and interaction features such as
        age, job, account balance and contact history. They need a{" "}
        <strong>real-time prediction API</strong> that the website can call as
        soon as a user signs up.
      </p>

      <h3 className="text-xl md:text-2xl font-semibold">Solution</h3>
      <p className={textBase}>
        To support this, the project builds, trains and deploys a{" "}
        <strong>binary classification model</strong> that predicts whether a
        user will subscribe to the service. The full workflow runs on{" "}
        <strong>Amazon SageMaker</strong>, from data ingestion to model
        training and deployment.
      </p>
      <p className={textBase}>
        The trained model is exposed through a SageMaker <strong>Real-Time
        Endpoint</strong>, which acts as a live API that can respond to
        prediction requests in real time.
      </p>
    </section>
  ),

  about: (
    <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-semibold">
        What this project covers
      </h2>

      <p className={textBase}>
        This project walks through the full lifecycle of an ML model on AWS—from
        data preparation to deployment. It focuses on turning an experiment into
        a production-style prediction API.
      </p>

      <p className={textBase}>Key areas covered:</p>

      <ul className={listBase}>
        <li>
          Importing and preprocessing data using{" "}
          <strong>Amazon S3</strong> and <strong>SageMaker Notebooks</strong>.
        </li>
        <li>
          Training a <strong>binary classification model</strong> in SageMaker
          using algorithms like <strong>XGBoost</strong>.
        </li>
        <li>
          Deploying the trained model to a{" "}
          <strong>Real-Time Endpoint</strong> for low-latency inference.
        </li>
        <li>
          Testing the endpoint from Python using JSON payloads to simulate API
          calls.
        </li>
      </ul>

      <p className={textBase}>
        The end result is an ML-powered API that predicts customer subscription
        likelihood on demand, forming a foundation for future MLOps and
        automation work.
      </p>
    </section>
  ),

  steps: (
    <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-semibold">
        Steps I followed 👩‍💻
      </h2>

      <ol className="list-decimal pl-5 space-y-2 text-base md:text-lg leading-relaxed text-gray-800">
        <li>
          Set up the <strong>SageMaker environment</strong> and required{" "}
          <strong>IAM roles</strong>.
        </li>
        <li>
          Imported and uploaded the subscription dataset to{" "}
          <strong>Amazon S3</strong>.
        </li>
        <li>
          Explored and prepared the data in a{" "}
          <strong>SageMaker Notebook</strong> (feature selection, cleaning,
          splits).
        </li>
        <li>
          Trained a classification model (e.g.{" "}
          <strong>XGBoost</strong>) using SageMaker training jobs.
        </li>
        <li>
          Deployed the best model to a <strong>Real-Time Endpoint</strong>.
        </li>
        <li>
          Tested live predictions by sending JSON requests to the endpoint from
          Python.
        </li>
        <li>
          Cleaned up endpoints and other resources to avoid ongoing cost.
        </li>
      </ol>
    </section>
  ),

  services: (
    <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-semibold">Services used 🛠</h2>

      <ul className={listBase}>
        <li>
          <strong>Amazon SageMaker</strong> – Builds, trains and hosts the ML
          model and endpoint.
        </li>
        <li>
          <strong>Amazon S3</strong> – Stores datasets and model artefacts.
        </li>
        <li>
          <strong>AWS IAM</strong> – Provides secure, role-based permissions for
          SageMaker and S3 access.
        </li>
        <li>
          <strong>Amazon CloudWatch</strong> (optional) – Monitors endpoint
          logs, latency and performance metrics.
        </li>
      </ul>
    </section>
  ),

  timeAndCost: (
    <section className="space-y-2">
      <h2 className="text-2xl md:text-3xl font-semibold">
        Estimated time & cost ⚙️
      </h2>

      <p className={textBase}>
        <strong>Estimated time:</strong> 1.5–2.5 hours
      </p>
      <p className={textBase}>
        <strong>Estimated cost:</strong> ~${"1–2"} (for short-lived training and
        endpoint usage on instances like <code>ml.t2.medium</code> or{" "}
        <code>ml.m5.large</code>).
      </p>
      <p className="text-sm md:text-base leading-relaxed text-gray-600">
        Endpoints should always be deleted after testing to avoid ongoing
        hourly charges.
      </p>
    </section>
  ),

  architectureImage: "/images/projects/sagemaker-subscriptions-architecture.png",
  finalResultImage: "/images/projects/sagemaker-subscriptions.png",
},
};

export function generateStaticParams(): { slug: string }[] {
  return projects.map((project: Project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {

  const project = projects.find((p: Project) => p.slug === params.slug);

  if (!project) return notFound();

  const content = projectContent[params.slug] as ProjectContent | undefined;

if (!content) {
  return notFound();
}

  return (
    <section className="bg-softGray">
      <div className="container py-16 xl:py-24">
        {/* Title */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold">
            {project.title}
          </h1>
        </header>

        {/* Hero image */}
        <div className="relative w-full max-w-4xl aspect-[16/9] rounded-lg overflow-hidden mb-12">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-4xl space-y-12">
          {content ? (
            <>
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
                    The final UI allows a user to upload a face image
                    and instantly see the predicted dominant emotion
                    rendered on the page.
                  </p>
                  <div className="relative w-full max-w-2xl rounded-lg overflow-hidden border border-gray-200 bg-black mx-auto">
                    <Image
                      src={content.finalResultImage}
                      alt={`${project.title} final UI`}
                      width={1000}
                      height={800}
                      className="w-full h-auto"
                    />
                  </div>
                </section>
              )}
            </>
          ) : (
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">
                About this project
              </h2>
              <p className={textBase}>
                This project page is coming soon. The build is already
                live in my portfolio; detailed notes and diagrams will
                be added here shortly.
              </p>
            </section>
          )}
        </div>
      </div>
    </section>
  );
}
