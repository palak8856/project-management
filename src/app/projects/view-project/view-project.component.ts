import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/interfaces/project';
import { ProjectServiceService } from 'src/app/services/project-service.service';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit{
project!:Project | undefined;

constructor(private router:Router, private projectService:ProjectServiceService, private route:ActivatedRoute){};

ngOnInit(): void {
  const projectId=this.route.snapshot.paramMap.get('id');
  if(projectId){
    this.project=this.projectService.getProjectById(projectId);
  }
  else{
    alert("Project not found");
  }
}

back(){
  this.router.navigate(['/home']);
}
}
