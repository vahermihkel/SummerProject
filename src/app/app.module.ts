import { MatDialogModule } from '@angular/material/dialog';
import { NewUserComponent } from './admin/admin-users/new-user/new-user.component';
import { UsersListComponent } from './admin/admin-users/users-list/users-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectService } from './project.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { Location } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatFaqModule } from '@angular-material-extensions/faq';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DOCUMENT } from '@angular/common';

// ********************** angular-modal-gallery *****************************
import 'hammerjs'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save hammerjs`)
import 'mousetrap'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save mousetrap`)
import { GalleryModule } from '@ks89/angular-modal-gallery'; // <----------------- angular-modal-gallery library import
// **************************************************************************

// ************************ optional font-awesome 5 ************************
// to install use both `npm i --save @fortawesome/fontawesome-svg-core` and `npm i --save @fortawesome/free-solid-svg-icons`
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt, faPlus, faTimes, faDownload } from '@fortawesome/free-solid-svg-icons';
library.add(faExternalLinkAlt, faPlus, faTimes, faDownload);
//dom.watch(); // Kicks off the process of finding <i> tags and replacing with <svg>
// *************************************************************************

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkDoneComponent } from './work-done/work-done.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './menu/menu.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectsComponent } from './admin/projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './user/user.component';
import { UserProjectsComponent } from './user/user-projects/user-projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectsListComponent } from './admin/projects/projects-list/projects-list.component';
import { ProjectsDetailComponent } from './admin/projects/projects-list/projects-detail/projects-detail.component';
import { ProjectsViewComponent } from './admin/projects/projects-list/projects-view/projects-view.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { FaqAddComponent } from './admin/faq-add/faq-add.component';
import { PreviousProjectsComponent } from './admin/projects/previous-projects/previous-projects.component';
import { ProjectsNewComponent } from './admin/projects/projects-new/projects-new.component';
import { AuthComponent } from './auth/auth.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { SuccessModalComponent } from './shared/success-modal/success-modal.component';
import { StickyNavModule } from 'ng2-sticky-nav';
import { ToastService, AngularToastifyModule } from 'angular-toastify';
import { FilterByYearPipe } from './admin/projects/previous-projects/filter-by-year.pipe';
import { UniquePipe } from './admin/projects/previous-projects/unique.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkDoneComponent,
    AboutUsComponent,
    ContactComponent,
    ProjectFormComponent,
    AdminComponent,
    MenuComponent,
    NewProjectComponent,
    ProjectsComponent,
    FooterComponent,
    UserComponent,
    UserProjectsComponent,
    ProjectsListComponent,
    ProjectsDetailComponent,
    ProjectsViewComponent,
    FaqAddComponent,
    PreviousProjectsComponent,
    ProjectsNewComponent,
    AuthComponent,
    AdminUsersComponent,
    UsersListComponent,
    NewUserComponent,
    LoadingSpinnerComponent,
    SuccessModalComponent,
    ScrollTopComponent,
    FilterByYearPipe,
    UniquePipe,
  ],
  imports: [
    GalleryModule.forRoot(),
    MatFaqModule.forRoot(),
    ScrollToModule.forRoot(),
    MatDividerModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatFaqModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    StickyNavModule,
    AngularToastifyModule
  ],
  providers: [ProjectService, ToastService, Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
