import { AuthService, AuthResponseData } from './../auth/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  isLoading = false;
  error: string = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.autoLogin();
  }

  onLogin(loginForm: NgForm) {
    if (!loginForm.valid) {
      return;
    }
    this.isLoading = true;
    let authObs: Observable<AuthResponseData>;
    authObs = this.authService.login(loginForm.value.username, loginForm.value.password);
    authObs.subscribe(
      resData => {
        this.isLoading = false;
        this.router.navigate(["projects"], { relativeTo: this.route });
      },
      errorMessage => {
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    loginForm.reset();
  }

}
