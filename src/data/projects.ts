import { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js and Tailwind CSS. A place for me to show off my projects and to overengineer any features I might want to make.",
    imageUrl: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=2940&auto=format&fit=crop",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/aalexzhang/aalexzhang_website",
  },
  {
    id: "dealicious",
    title: "Meal Planning and Budgeting App",
    description: "A full-stack web application that helps users generate personalized meal plans based on dietary preferences and available ingredients. Integrates the Spoonacular API to fetch recipes and nutritional information.",
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2940&auto=format&fit=crop",
    tags: ["Express.js", "React", "Render"],
    demoUrl: "https://dealicious-frontend.onrender.com/",
    githubUrl: "https://github.com/aalexzhang/dealicious",
  },
  {
    id: "travelai",
    title: "Travel Itinerary AI Planner",
    description: "An AI-driven travel itinerary planner that customizes trip recommendations based on budget, destination, and travel preferences. Uses a LLM backend to generate dynamic travel plans and integrates real-time flight data.",
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2944&auto=format&fit=crop",
    tags: ["Flask", "React", "Perplexity", "Langchain"],
    githubUrl: "https://github.com/aalexzhang/dubhacks24",
  },
  {
    id: "flairit",
    title: "Reddit Flair Classifier",
    description: "A machine learning project that predicts Reddit post flairs using NLP techniques. Built a classification model using preprocessed text data and trained it on real Reddit posts to recommend appropriate flairs.",
    imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2940&auto=format&fit=crop",
    tags: ["RoBERTa", "Flask", "SQLAlchemy", "HTML"],
    demoUrl: "https://www.youtube.com/watch?v=tQUGI0XSbwM",
    githubUrl: "https://github.com/aalexzhang/Info492_Flair_It",
  },
  {
    id: "sprout",
    title: "GPT Social Skills Chatbot",
    description: "A web-based chatbot powered by OpenAI’s GPT-3.5, designed for simulating engaging social interactions for younger children. Created with the goal of helping children impacted by two years of online school due to the pandemic.",
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2940&auto=format&fit=crop",
    tags: ["GPT-3.5", "Chatbot", "Next.js", "React"],
    demoUrl: "https://sprout-opal.vercel.app/",
    githubUrl: "https://github.com/aalexzhang/dubhacks23",
  },
];
