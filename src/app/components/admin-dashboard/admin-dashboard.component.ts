import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';

interface Project {
  _id?: string; // Optional for creating new projects
  name: string;
  description: string; // Keep only name and description
}

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  projects: Project[] = []; // Use the Project interface for type safety
  newProject: Project = { name: '', description: '' }; // Initialize without image
  editingProject: Project | null = null; // Allow for null when not editing

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects().subscribe((data: Project[]) => {
      this.projects = data;
    });
  }

  addProject(): void {
    if (!this.newProject.name || !this.newProject.description) {
      alert('Please provide name and description.');
      return;
    }

    this.projectService.addProject(this.newProject).subscribe((project: Project) => {
      this.projects.push(project);
      this.resetForm();
    });
  }

  editProject(project: Project): void {
    this.editingProject = project;
    this.newProject = { name: project.name, description: project.description }; // Exclude image
  }

  updateProject(): void {
    if (!this.newProject.name || !this.newProject.description) {
      alert('Please provide name and description.');
      return;
    }

    if (this.editingProject) {
      this.projectService.updateProject(this.editingProject._id!, this.newProject).subscribe((updatedProject: Project) => {
        const index = this.projects.findIndex(p => p._id === updatedProject._id);
        if (index !== -1) {
          this.projects[index] = updatedProject; // Update the project in the list
        }
        this.resetForm();
      });
    }
  }

  deleteProject(id: string): void {
    this.projectService.deleteProject(id).subscribe(() => {
      this.projects = this.projects.filter(project => project._id !== id);
    });
  }

  resetForm(): void {
    this.editingProject = null;
    this.newProject = { name: '', description: '' }; // Reset to initial state
  }
}
