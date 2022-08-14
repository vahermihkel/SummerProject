import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onNewUser() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onUsersList() {
    this.router.navigate(['list'], { relativeTo: this.route });
  }

}
