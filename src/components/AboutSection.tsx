"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const skillsByCategory = {
  development: [
    "Full-Stack Development", "Frontend & Backend Development", "UI/UX Design", "React", "Next.js", "Express.js", "Spring Boot", "Flask",
  ],
  "Machine Learning": [
    "Machine Learning & AI", "Natural Language Processing", "Scikit-Learn", "TensorFlow", "Computer Vision", "NLTK", "XGBoost", "PyTorch",
  ],
  "Data Science": [
    "Data Science & Analytics", "Pandas", "NumPy", "Database Management", "SQL", "PostgreSQL", "MongoDB", "BI Tools (Tableau, Power BI)", "D3"
  ],
  tools: [
    "Git", "GitHub", "Firebase", "LLM API (GPT-3.5, Perplexity, Langchain)", "Cloud Computing", "Web Scraping",
  ],
};

export function AboutSection() {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof skillsByCategory>("development");

  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <Separator className="mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I’m a full-stack developer and data science enthusiast passionate about building intelligent, user-friendly applications.
                </p>
                <p>
                  With experience in React, Express.js, Next.js, Spring Boot, Flask, and MongoDB, I enjoy creating seamless, scalable web solutions. My work extends beyond development—I leverage machine learning and data analytics to extract meaningful insights and build AI-powered applications.
                </p>
                <p>
                  Outside of coding, I am an avid gamer and mechanical keyboard enthusiast. I also enjoy hiking, working out, and reading fantasy novels, webtoons, and manga.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">My Skills</h3>
              <div className="flex gap-4 mb-4">
                {Object.keys(skillsByCategory).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category as keyof typeof skillsByCategory)}
                    className={`px-4 py-2 rounded ${
                      selectedCategory === category ? "bg-secondary text-black" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {skillsByCategory[selectedCategory].map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm py-1">
                    {skill}
                  </Badge>
                ))}
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4">Experience</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Informatics Undergraduate Tutor</h4>
                  <p className="text-sm text-muted-foreground">University of Washington iSchool • 2024-2025</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">University of Washington Seattle</h4>
                  <p className="text-sm text-muted-foreground">BS Informatics • 2021-2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
