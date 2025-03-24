"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React",
  "Next.js", "Node.js", "Express", "MongoDB", "SQL",
  "Git", "Tailwind CSS", "Redux", "REST API", "GraphQL"
];

export function AboutSection() {
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
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">My Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
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
