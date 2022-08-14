import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from './../shared/success-modal/modal.service';
import { ProjectService } from './../project.service';
import { Project } from './project.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  // projectForm: FormGroup;

  constructor(private projectService: ProjectService,
              private modalService: ModalService, 
              private route: ActivatedRoute, 
              private router: Router) { }

  ngOnInit(): void {
  }

  onAddNewProject(form: NgForm) {
    const formValue = form.value;
    const newProject = new Project(
      formValue.name, 
      formValue.phone,
      formValue.email,
      formValue.project_name,
      formValue.description,
      formValue.support,
      formValue.additional
      );
      this.projectService.uploadProject(newProject);
      this.modalService.showModal({title: "Projekt esitatud!", 
      description: "Aitäh, et toetad Tallinna Ülikooli tudengeid! Anname tagasisidet niipea, kui võimalik. Pane tähele, et projekt saab valmis alles juunikuu lõpus."
      });
      form.reset();
      this.router.navigate(["/"], {relativeTo: this.route});
  }

  
}
