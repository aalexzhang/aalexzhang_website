"use client";

import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Plus } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Here are some of my recent projects. Each one is built with attention to
            detail and focus on user experience.
          </p>
          <Separator className="max-w-md mx-auto" />
        </div>

        {/* <div className="flex justify-end mb-6">
          <Button variant="outline" size="sm" asChild>
            <Link href="/add-project" className="flex items-center gap-1">
              <Plus className="h-4 w-4" />
              <span>Add Project</span>
            </Link>
          </Button>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
