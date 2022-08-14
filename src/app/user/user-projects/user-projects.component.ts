import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Project } from './../../new-project/project.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjectService } from 'src/app/project.service';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-user-projects',
  templateUrl: './user-projects.component.html',
  styleUrls: ['./user-projects.component.css']
})
export class UserProjectsComponent implements OnInit {
  year = new Date().getFullYear();
  error = null;
  suunds = ['tarkvaraarendus', "digimeedia"];

  projects: Project[] = [];

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private _toastService: ToastService
    ) { }

  ngOnInit(): void {
    this.projectService.fetchProjects().subscribe(projects => {
      let allProjects = projects;
      this.projects = allProjects.map(prj => ({...prj, 
        addInfoButtonActive: false, 
        registrationButtonActive: false, 
        students: prj.students ? prj.students : [] }));
    }, error => {
      this.error = error;
    });
  }

  showCommentInfo(project) {
    project.registrationButtonActive = false;
    project.addInfoButtonActive = !project.addInfoButtonActive;
  }

  showRegisterButton(project) {
    project.addInfoButtonActive = false;
    project.registrationButtonActive = !project.registrationButtonActive;
  }

  onSubmitInfo(project: Project, form: NgForm) {
    let changed = false;
    let formValue = form.value;
    if (formValue.github != '' && formValue.github != null) {
      project.github = formValue.github;
      changed = true;
    }
    if (formValue.blog != '' && formValue.blog != null) {
      project.blog = formValue.blog;
      changed = true;
    }
    if (formValue.url != '' && formValue.url != null) {
      project.url = formValue.url;
      changed = true;
    }
    if (changed) {
      this._toastService.success('Info edukalt uuendatud! Info kustutamiseks ja uuesti sisestamiseks pöördu õppejõu poole.');
      this.projectService.updateProject(project.firebaseId, project);
    } else {
      this._toastService.error('Palun sisesta valitud lingid.');
    }
    form.reset();
  }

  onSubmitRegistration(project: Project, form: NgForm) {
    let tarkvaraarendus = 0;
    let digimeedia = 0;
    project.students.forEach(student => {
      if (student.suund == 'tarkvaraarendus') {
        tarkvaraarendus = tarkvaraarendus + 1;
      } else if (student.suund == 'digimeedia') {
        digimeedia = digimeedia + 1;
      }
    });
    if (tarkvaraarendus == 3 && digimeedia == 0 && form.value.suund == 'tarkvaraarendus') {
      this._toastService.warn('Projektist on puudu digimeedia üliõpilane, 4 üliõpilast ilma digimeedikuta ei saa ühes projektis olla.');
    } else if (digimeedia == 2 && form.value.suund == 'digimeedia') {
      this._toastService.warn('Meeskonnas on juba kaks digimeedia üliõpilast, palun vali teine projekt.');
    } else if (digimeedia + tarkvaraarendus == 5) {
      this._toastService.warn('Meeskond on täis!');
    } else {
      this._toastService.success('Edukalt projekti registreeritud');
      project.students.push({name: form.value.student, suund: form.value.suund});
      form.reset();
      // for form year in archive
      project.year = this.year.toString();
      this.projectService.updateProject(project.firebaseId, project);
    }
  }
  
}
