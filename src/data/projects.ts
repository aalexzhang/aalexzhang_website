import { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js and Tailwind CSS. A place for me to show off my projects and to overengineer any features I might want to make.",
    imageUrl: "/portfolio_website.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "dealicious",
    title: "Dealicious",
    description: "A full-stack web application that helps users generate personalized meal plans based on dietary preferences and available ingredients. Integrates the Spoonacular API to fetch recipes and nutritional information.",
    imageUrl: "/meal_planner.png",
    tags: ["Express.js", "React", "Render"],
    demoUrl: "https://dealicious-frontend.onrender.com/",
    githubUrl: "https://github.com/aalexzhang/dealicious",
  },
  {
    id: "travelai",
    title: "TravelAI",
    description: "An AI-driven travel itinerary planner that customizes trip recommendations based on budget, destination, and travel preferences. Uses a LLM backend to generate dynamic travel plans and integrates real-time flight data.",
    imageUrl: "/travel_itinerary.png",
    tags: ["Flask", "React", "Perplexity", "Langchain"],
    githubUrl: "https://github.com/aalexzhang/dubhacks24",
  },
  {
    id: "flairit",
    title: "Flair-It",
    description: "A machine learning project that predicts Reddit post flairs using NLP techniques. Built a classification model using preprocessed text data and trained it on real Reddit posts to recommend appropriate flairs.",
    imageUrl: "/reddit_flairing_website.png",
    tags: ["RoBERTa", "Flask", "SQLAlchemy", "HTML"],
    demoUrl: "https://www.youtube.com/watch?v=tQUGI0XSbwM",
    githubUrl: "https://github.com/aalexzhang/Info492_Flair_It",
  },
  {
    id: "sprout",
    title: "Sprout",
    description: "A web-based chatbot powered by OpenAI’s GPT-3.5, designed for simulating engaging social interactions for younger children. Created with the goal of helping children impacted by two years of online school due to the pandemic.",
    imageUrl: "/social_skills_chatbot.png",
    tags: ["GPT-3.5", "Chatbot", "Next.js", "React"],
    demoUrl: "https://sprout-opal.vercel.app/",
    githubUrl: "https://github.com/aalexzhang/dubhacks23",
  },
];
