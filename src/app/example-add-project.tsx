"use client";

import { useState } from "react";
import { addProject, generateProjectId } from "@/utils/project-utils";
import { Project } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function AddProjectExample() {
  const router = useRouter();
  const [project, setProject] = useState<Partial<Project>>({
    title: "",
    description: "",
    imageUrl: "",
    tags: [],
    demoUrl: "",
    githubUrl: "",
  });

  const [tag, setTag] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProject((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddTag = () => {
    if (tag && !project.tags?.includes(tag)) {
      setProject((prev) => ({
        ...prev,
        tags: [...(prev.tags || []), tag],
      }));
      setTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setProject((prev) => ({
      ...prev,
      tags: prev.tags?.filter((t) => t !== tagToRemove),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!project.title || !project.description || !project.imageUrl || !project.tags?.length) {
      alert("Please fill in all required fields");
      return;
    }

    const id = generateProjectId(project.title);
    const newProject = {
      id,
      title: project.title,
      description: project.description,
      imageUrl: project.imageUrl,
      tags: project.tags,
      demoUrl: project.demoUrl || undefined,
      githubUrl: project.githubUrl || undefined,
    } as Project;

    const updatedProjects = addProject(newProject);
    console.log("Project added:", newProject);
    console.log("Updated projects:", updatedProjects);

    // In a real application, you would save the updated projects
    // to a database or file system here

    alert("Project added successfully! (Check the console for details)");
    router.push("/");
  };

  return (
    <div className="container py-20">
      <h1 className="text-3xl font-bold mb-8">Add New Project</h1>

      <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
        <div className="space-y-2">
          <label htmlFor="title" className="font-medium">
            Project Title *
          </label>
          <input
            id="title"
            name="title"
            value={project.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-border rounded-md bg-background"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="description" className="font-medium">
            Description *
          </label>
          <textarea
            id="description"
            name="description"
            value={project.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-border rounded-md bg-background"
            rows={4}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="imageUrl" className="font-medium">
            Image URL *
          </label>
          <input
            id="imageUrl"
            name="imageUrl"
            value={project.imageUrl}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            className="w-full px-3 py-2 border border-border rounded-md bg-background"
            required
          />
          <p className="text-sm text-muted-foreground">
            Provide a URL to an image for your project. Recommended size: 1200x630px
          </p>
        </div>

        <div className="space-y-2">
          <label className="font-medium">Tags *</label>
          <div className="flex items-center gap-2">
            <input
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className="flex-1 px-3 py-2 border border-border rounded-md bg-background"
              placeholder="Add a tag"
            />
            <Button type="button" onClick={handleAddTag}>
              Add
            </Button>
          </div>

          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag) => (
                <div key={tag} className="bg-muted rounded-full px-3 py-1 text-sm flex items-center gap-1">
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="demoUrl" className="font-medium">
            Demo URL (Optional)
          </label>
          <input
            id="demoUrl"
            name="demoUrl"
            value={project.demoUrl}
            onChange={handleChange}
            placeholder="https://demo-project.com"
            className="w-full px-3 py-2 border border-border rounded-md bg-background"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="githubUrl" className="font-medium">
            GitHub URL (Optional)
          </label>
          <input
            id="githubUrl"
            name="githubUrl"
            value={project.githubUrl}
            onChange={handleChange}
            placeholder="https://github.com/username/repo"
            className="w-full px-3 py-2 border border-border rounded-md bg-background"
          />
        </div>

        <div className="flex gap-4 pt-4">
          <Button type="submit">Add Project</Button>
          <Button type="button" variant="outline" onClick={() => router.push("/")}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
