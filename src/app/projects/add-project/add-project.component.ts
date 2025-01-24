import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjectServiceService } from 'src/app/services/project-service.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit{
projectForm!: FormGroup;

constructor(private formBuilder:FormBuilder, private projectservice: ProjectServiceService){};

ngOnInit(): void {
  this.projectForm=this.formBuilder.group({
    task: ['', [Validators.required]],
    project: ["", [Validators.required]],
    assignedTo: ["", [Validators.required]]
  })
}

submitform(){

  if(this.projectForm.invalid){
    return;
  }
const project=this.projectForm.value;

const taskName=project.task;
const projectName=project.project;
const assignedTo=project.assignedTo;

this.projectservice.addProject(taskName, projectName, assignedTo);
this.projectForm.reset();
}
}
