import { AuthService, AuthResponseData } from './../../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Project } from 'src/app/new-project/project.model';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  isLoading = false;
  error: string = null;
  projects: Project[] = [];

  constructor(private authService: AuthService, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.fetchProjects().subscribe(projects => {
      this.projects = projects;
    }, error => {
      this.error = error;
    });
  }

  onSignUp(signupForm) {
    if (!signupForm.valid) {
      return;
    }
    this.isLoading = true;
    let authObs: Observable<AuthResponseData>;
    authObs = this.authService.signUp(signupForm.value.username, signupForm.value.password);
    authObs.subscribe(resData => {
        this.isLoading = false;
    }, error => {
      this.error = error;
      this.isLoading = false;
    });
    signupForm.reset();
  }

}
