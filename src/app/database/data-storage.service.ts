// import { Project } from './../new-project/project.model';
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { ProjectService } from '../project.service';
// import { map, tap } from 'rxjs/operators';

// @Injectable({providedIn: 'root'})
// export class DataStorageService {
//     constructor(private http: HttpClient, private projectService: ProjectService){}

//     storeProjects() {
//         const projects = this.projectService.getProjects();
//         this.http.put(
//             'https://summerproject-a6747.firebaseio.com/projects.json',
//             projects)
//         .subscribe(response => {
//             console.log(response);
//         });
//     }

//     fetchProjects() {
//         return this.http
//         .get<Project[]>('https://summerproject-d48ac.firebaseio.com/projects.json')
//         .pipe(map(projects => {
//             return projects.map(project => {
//                 return {...project, projects: project.additional ? project.additional : ""}
//             });
//         }),
//         tap(projects => {
//             this.projectService.setProjects(projects);
//         }))
//     }
// }

