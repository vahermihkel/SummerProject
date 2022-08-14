import { Project } from './new-project/project.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';

@Injectable()
export class ProjectService {
    projectsChanged = new Subject<Project[]>();
    error = new Subject<string>();;
    private projects: Project[] = [];

    constructor(private http: HttpClient){}

    updateProject(index: string, updatedProject: Project) {
        this.projects[index] = updatedProject;
        this.projectsChanged.next(this.projects.slice());
        this.saveProjects(this.projects);
    }

    getProjects() {
      return this.projects.slice();
    }

    getProject(index: string) {
        this.fetchProjects();
        return this.projects.find(project => project.firebaseId === index);
    }

    uploadProject(newProject: Project) {
        this.http.post('https://summerproject-a6747.firebaseio.com/projects.json', newProject).subscribe(
        responseData => {
        }),
        error => {
            this.error.next(error.message);
        }
        //end
    }

    fetchProjects() {
        return this.http.get<{ [key: string]: Project }>('https://summerproject-a6747.firebaseio.com/projects.json')
            // .pipe((map(projects => {
            //     return projects.map(project => {
            //         return {...project, comments: project.comments ? project.comments : []}
            //     })
            // })))
            .pipe(map(responseData=> {
              const projectsArray: Project[] = [];
              for (const key in responseData) {
                if(responseData.hasOwnProperty(key)) {
                  projectsArray.push({ ...responseData[key], firebaseId: key})
                }
              }
              this.projects = projectsArray;
              return projectsArray;
            }));
    }

    saveProjects(projects) {
      this.http.put(
          'https://summerproject-a6747.firebaseio.com/projects.json',
          projects)
      .subscribe(response => {
      });
      this.projects = projects;
    }
}