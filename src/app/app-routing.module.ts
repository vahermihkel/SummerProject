import { NewUserComponent } from './admin/admin-users/new-user/new-user.component';
import { UsersListComponent } from './admin/admin-users/users-list/users-list.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { AdminComponent } from './admin/admin.component';
import { UserProjectsComponent } from './user/user-projects/user-projects.component';
import { ProjectsListComponent } from './admin/projects/projects-list/projects-list.component';
import { ProjectsDetailComponent } from './admin/projects/projects-list/projects-detail/projects-detail.component';
import { ProjectsNewComponent } from './admin/projects/projects-new/projects-new.component';
import { FaqAddComponent } from './admin/faq-add/faq-add.component';
import { PreviousProjectsComponent } from './admin/projects/previous-projects/previous-projects.component';
import { ProjectsViewComponent } from './admin/projects/projects-list/projects-view/projects-view.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';

const appRoutes: Routes = [
    {path: 'home', component: HomeComponent },
    {path: 'new', component: NewProjectComponent},
    // {path: 'user', component: UserComponent},
    {path: 'user/projects', component: UserProjectsComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'admin/projects', component: ProjectsListComponent, canActivate: [AuthGuard] },
    {path: 'admin/projects/new', component: ProjectsNewComponent, canActivate: [AuthGuard] },
    {path: 'admin/projects/edit/:id', component: ProjectsDetailComponent, canActivate: [AuthGuard] },
    {path: 'admin/projects/view/:id', component: ProjectsViewComponent, canActivate: [AuthGuard] },
    {path: 'admin/faq', component: FaqAddComponent, canActivate: [AuthGuard] },
    {path: 'admin/previous', component: PreviousProjectsComponent, canActivate: [AuthGuard] },
    // {path: 'admin/users', component: AdminUsersComponent, canActivate: [AuthGuard] },
    // {path: 'admin/users/list', component: UsersListComponent, canActivate: [AuthGuard] },
    // {path: 'admin/users/new', component: NewUserComponent, canActivate: [AuthGuard] },
    {path: '**', redirectTo: '/home' },
    {path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
