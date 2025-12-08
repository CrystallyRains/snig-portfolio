// src/app/data/projects.ts

export type Project = {
  title: string;
  slug: string;
  image: string;
  client?: string;
};

export const projects: Project[] = [
  {
    title: "Image Emotion Detector using Hugging Face + AWS",
    slug: "image-emotion-detector",
    image: "/images/projects/image-emotion.png",
  },
  {
    title: "AI-Powered Cloud Learning Assistant (Gemini API)",
    slug: "ai-cloud-tutor",
    image: "/images/projects/ai-cloud-tutor.png",
  },
  {
    title: "Highly Available Architecture on AWS (Reliability Pillar)",
    slug: "highly-available-architecture",
    image: "/images/projects/ha-architecture.png",
  },
  {
    title: "Real-Time AWS Operations from Slack (Operational Excellence)",
    slug: "aws-ops-from-slack",
    image: "/images/projects/slack-ops.gif",
  },
  {
    title: "Serverless Inventory Management on AWS (Performance Efficiency)",
    slug: "serverless-inventory-management",
    image: "/images/projects/serverless-inventory.png",
  },
  {
    title: "Predicting Customer Subscriptions with Amazon SageMaker",
    slug: "sagemaker-subscriptions",
    image: "/images/projects/sagemaker-subscriptions.png",
  },
];
