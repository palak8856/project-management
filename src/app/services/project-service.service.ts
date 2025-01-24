import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';
import {Projects_List} from '../projects.data';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {
  projects=Projects_List;

  constructor(private router:Router) {
    const projects=localStorage.getItem("projects");

    if(projects){
      this.projects=JSON.parse(projects);
    }
   }

  addProject(taskName:string, projectName:string, assignedTo:string){
    const newProject:Project={
      id:(this.projects.length+1).toString(),
      Task:taskName,
      Project:projectName,
      AssignedTo:assignedTo,
      status: "pending",
    }
    this.projects.push(newProject);
    //this.router.navigate(["home"]);
  }

  getProjectById(id:string){
    return this.projects.find(project => project.id === id);
  }

  saveProjects(){
    localStorage.setItem("projects", JSON.stringify(this.projects));
  }

  getProjects(){
    return this.projects;
  }

  updateProject(project:Project){
    this.projects=this.projects.map((proj)=>(proj.id===project.id? project:proj));
    this.saveProjects();
  }
}
