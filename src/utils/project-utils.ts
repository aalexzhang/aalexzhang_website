import { Project } from "@/components/ProjectCard";
import { projects as initialProjects } from "@/data/projects";

/**
 * Add a new project to the projects list
 * @param project The project to add
 * @returns The updated list of projects
 */
export function addProject(project: Project): Project[] {
  // In a real application, this would store the project in a database or file
  // For now, we'll just return a new array with the added project
  return [...initialProjects, project];
}

/**
 * Remove a project from the projects list
 * @param projectId The ID of the project to remove
 * @returns The updated list of projects
 */
export function removeProject(projectId: string): Project[] {
  // In a real application, this would remove the project from a database or file
  // For now, we'll just return a new array without the removed project
  return initialProjects.filter((project) => project.id !== projectId);
}

/**
 * Update an existing project in the projects list
 * @param projectId The ID of the project to update
 * @param updatedProject The updated project data
 * @returns The updated list of projects
 */
export function updateProject(projectId: string, updatedProject: Partial<Project>): Project[] {
  // In a real application, this would update the project in a database or file
  // For now, we'll just return a new array with the updated project
  return initialProjects.map((project) => {
    if (project.id === projectId) {
      return { ...project, ...updatedProject };
    }
    return project;
  });
}

/**
 * Generate a unique ID for a new project
 * @param title The project title
 * @returns A unique ID
 */
export function generateProjectId(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
