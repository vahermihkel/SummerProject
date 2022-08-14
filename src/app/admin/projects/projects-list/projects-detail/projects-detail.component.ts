import { Subscription } from 'rxjs';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProjectService } from 'src/app/project.service';
import { Project } from './../../../../new-project/project.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-projects-detail',
  templateUrl: './projects-detail.component.html',
  styleUrls: ['./projects-detail.component.css']
})
export class ProjectsDetailComponent implements OnInit, OnDestroy {
  projects: Project[];
  project: Project;
  id: string;
  error: string;
  isSaving = false;
  paramSub: Subscription

  editMode = false;
  projectForm: FormGroup;

  constructor(private projectService: ProjectService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.paramSub = this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.project = this.projectService.getProject(this.id);
          this.editMode = params['id'] != null;
          this.initForm();
        }
    )
    // this.projectService.fetchProjects().subscribe(projects => {
    //   this.projects = projects;
    //   this.project = this.projects.find(project => project.firebaseId === this.id);
    //   this.initForm();
    // }, error => {
    //   this.error = error;
    // });
  }

  initForm() {
    console.log(this.project);
    let projectName = '';
    let projectDescription = '';
    let additional = "";
    let support = "";
    let contactName = "";
    let contactPhone = "";
    let contactEmail = "";
    let overviewer = "";

    if(this.editMode) {
      const project = this.projectService.getProject(this.id);
      projectName = project.name;
      projectDescription = project.description;
      additional = project.additional;
      support = project.support;
      contactName = project.contactName;
      contactEmail = project.contactEmail;
      contactPhone = project.contactPhone;
      overviewer = project.overviewer;
  
      this.projectForm = new FormGroup({
        contactName: new FormControl(contactName, Validators.required),
        contactEmail: new FormControl(contactEmail, Validators.required),
        contactPhone: new FormControl(contactPhone),
        name: new FormControl(projectName, Validators.required),
        description: new FormControl(projectDescription, Validators.required),
        support: new FormControl(support),
        additional: new FormControl(additional),
        overviewer: new FormControl(overviewer)
      })
    }
  }

  onSubmit(projectForm) {
    let updateProjectForm = projectForm.value;
    let updatedProject = new Project(
      updateProjectForm.contactName,
      updateProjectForm.contactPhone,
      updateProjectForm.contactEmail,
      updateProjectForm.name,
      updateProjectForm.description,
      updateProjectForm.additional,
      updateProjectForm.support
      );
    updatedProject.insertedDate = this.project.insertedDate;
    updatedProject.deleted = this.project.deleted;
    updatedProject.visible = this.project.visible;
    updatedProject.comments = this.project.comments;
    updatedProject.students = this.project.students;
    updatedProject.github = this.project.github;
    updatedProject.blog = this.project.blog;
    updatedProject.url = this.project.url;
    updatedProject.overviewer = updateProjectForm.overviewer;
    updatedProject.year = this.project.year;
    updatedProject.firebaseId = this.project.firebaseId;

    this.projectService.updateProject(this.id, updatedProject);
    this.isSaving = true;
    setTimeout(() => {
      this.isSaving = false;
      this.router.navigate(['/admin/projects'], {relativeTo: this.route});
    }, 1000);
    
  }

  ngOnDestroy(): void {
    this.paramSub.unsubscribe();
  }

}
