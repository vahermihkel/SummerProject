import { Component, OnInit, OnDestroy } from '@angular/core';
import { Project } from 'src/app/new-project/project.model';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-previous-projects',
  templateUrl: './previous-projects.component.html',
  styleUrls: ['./previous-projects.component.css']
})
export class PreviousProjectsComponent implements OnInit, OnDestroy {
  projects: Project[] = [];
  isFetching = false;
  error = null;
  chosenYear: string;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.isFetching = true;
    this.projectService.fetchProjects().subscribe(projects => {
      this.isFetching = false;
      let allProjects = projects;
      this.projects = allProjects.map(prj => ({...prj, year: prj.year ? prj.year : 'Pole alustatud'}));
    }, error => {
      this.isFetching = false;
      this.error = error;
    });
  }

  saveOnClick(project: Project) {
    project.deleted = !project.deleted;
    this.projectService.updateProject(project.firebaseId, project);
  }

  ngOnDestroy(): void {
    this.projectService.saveProjects(this.projects);
  }
}
