import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from 'src/app/project.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Project } from 'src/app/new-project/project.model';

@Component({
  selector: 'app-admin-projects-view',
  templateUrl: './projects-view.component.html',
  styleUrls: ['./projects-view.component.css']
})
export class ProjectsViewComponent implements OnInit {
  project: Project;
  id: string;

  editMode = false;

  constructor(private projectService: ProjectService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.project = this.projectService.getProject(this.id);
          this.editMode = params['id'] != null;
        }
    )
  }

  onDeleteStudent(project: Project, i: number) {
    project.students.splice(i, 1);
    this.projectService.updateProject(this.id, project);
  }

  onDeleteGithub(project: Project) {
    delete project.github;
    this.projectService.updateProject(this.id, project);
  }

  onDeleteBlog(project: Project) {
    delete project.blog;
    this.projectService.updateProject(this.id, project);
  }

  onDeleteURL(project: Project) {
    delete project.url;
    this.projectService.updateProject(this.id, project);
  }
  
  onDeleteReviewer(project: Project) {
    delete project.overviewer;
    this.projectService.updateProject(this.id, project);
  }
}
