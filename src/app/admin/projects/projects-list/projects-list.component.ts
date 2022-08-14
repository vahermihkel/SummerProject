import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from './../../../new-project/project.model';
import { Component, OnInit, OnDestroy, SimpleChanges } from '@angular/core';
import { ProjectService } from 'src/app/project.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit, OnDestroy {
  projects: Project[] = [];
  questionNeeded = false;
  isFetching = false;
  error = null;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
    this.isFetching = true;
    this.projectService.fetchProjects().subscribe(projects => {
      this.isFetching = false;
      let allProjects = projects;
      this.projects = allProjects.map(prj => ({...prj, commentButtonActive: false, comments: prj.comments ? prj.comments : []}))
    }, error => {
      this.isFetching = false;
      this.error = error;
    });
  }

  saveOnClick(project: Project) {
    project.visible = !project.visible;
    this.projectService.updateProject(project.firebaseId, project);
  }

  onDeleteProject(project: Project) {
    project.deleted = true;
    this.projectService.updateProject(project.firebaseId, project);
  }

  showCommentAdd(project) {
    project.commentButtonActive = !project.commentButtonActive;
  }

  onAddQuestion(project: Project, form: NgForm) {
    const itemQuestion = form.value.itemQuestion;
    this.projects.forEach(pr => {
      if (pr == project) {
        pr.comments.push(itemQuestion);
      }
    });
    form.reset();
    this.projectService.updateProject(project.firebaseId, project);
  }

  onDeleteComment(project: Project, index: number) {
    this.projects.forEach(pr => {
      if (pr == project) {
        pr.comments.splice(index, 1);
      }
    });
    this.projectService.updateProject(project.firebaseId, project);
  }

  ngOnDestroy(): void {
    this.projectService.saveProjects(this.projects);
  }
}
