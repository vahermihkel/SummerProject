import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ResolveEnd } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isHomeMenu: boolean = true;
  isBackMenu: boolean = false;
  isAdminMenu: boolean = false;

  

  constructor(private router: Router, private authService: AuthService ) { }

  

  ngOnInit(): void {
      this.router.events.subscribe((routerData) => {
        if(routerData instanceof ResolveEnd){ 
           if(routerData.url === '/new' || 
              routerData.url === '/admin' || 
              routerData.url === '/user' ){
              this.isBackMenu=true;
           } else {
            this.isBackMenu=false;
           }
           if(routerData.url === '/home' ||
              routerData.url === '/'){
            this.isHomeMenu=true;
           } else {
            this.isHomeMenu=false;
           }
           if(routerData.url === '/admin/projects' ||
              routerData.url === '/admin/projects/new' ||
              routerData.url === '/admin/previous' ||
              routerData.url === '/admin/projects/view/0' ||
              routerData.url === '/admin/projects/edit/0' ||
              routerData.url === '/admin/projects/view/1' ||
              routerData.url === '/admin/projects/edit/1') {
            this.isAdminMenu=true;
           } else {
            this.isAdminMenu=false;
           }
           if(routerData.url !== '/admin/projects' &&
              routerData.url !== '/admin/projects/new' &&
              routerData.url !== '/admin/previous' &&
              routerData.url !== '/admin/projects/view/0' &&
              routerData.url !== '/admin/projects/edit/0' &&
              routerData.url !== '/admin/projects/view/1' &&
              routerData.url !== '/admin/projects/edit/1' &&
              routerData.url !== '/new' && 
              routerData.url !== '/admin' && 
              routerData.url !== '/user' &&
              routerData.url !== '/user/projects') {
            this.isHomeMenu=true;
           } else {
            this.isHomeMenu=false;
           }
      } 
    })
  }

  onLogout() {
    this.authService.logout();
  }

}
