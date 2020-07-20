import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { WebService } from '../app/shared/web.service';
import { UserService } from '../app/shared/user.service';
import { TaskService } from '../app/shared/task.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './user/home/home.component';
import { TasklistComponent } from './user/tasklist/tasklist.component';
import { HeaderComponent } from './header/header/header.component';
import { LogoutComponent } from './header/logout/logout.component';
import { TaskdetailComponent } from './user/taskdetail/taskdetail.component';
import { ProfileComponent } from './user/profile/profile.component';
import { FilterComponent } from './user/filter/filter.component';
import { ChangepassComponent } from './user/changepass/changepass.component';
import { NotificatonComponent } from './user/notificaton/notificaton.component';
import { ContactComponent } from './user/contact/contact.component';
import { CreatetaskComponent } from './admin/createtask/createtask.component';
import { AdminTasklistComponent } from './admin/admin-tasklist/admin-tasklist.component';
import { AdminTaskdetailsComponent } from './admin/admin-taskdetails/admin-taskdetails.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminEdittaskComponent } from './admin/admin-edittask/admin-edittask.component';
import { EmployeeprofileComponent } from './admin/employeeprofile/employeeprofile.component';
import { EmployeedetailsComponent } from './admin/employeedetails/employeedetails.component';
import { SignupComponent } from './common/signup/signup.component';
import { SigninComponent } from './common/signin/signin.component';
import { ForgotComponent } from './common/forgot/forgot.component';
import { from } from 'rxjs';

import { RouterModule , Routes} from '@angular/router';
import { AdminfilterComponent } from './admin/adminfilter/adminfilter.component';
import { AdminpendingtaskComponent } from './admin/adminpendingtask/adminpendingtask.component';
import { AdmincompletetaskComponent } from './admin/admincompletetask/admincompletetask.component';
import { PendingtaskComponent } from './user/pendingtask/pendingtask.component';
import { CompletetaskComponent } from './user/completetask/completetask.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TasklistComponent,
    HeaderComponent,
    LogoutComponent,
    TaskdetailComponent,
    ProfileComponent,
    FilterComponent,
    ChangepassComponent,
    NotificatonComponent,
    ContactComponent,
    CreatetaskComponent,
    AdminTasklistComponent,
    AdminTaskdetailsComponent,
    AdminHomeComponent,
    AdminEdittaskComponent,
    EmployeeprofileComponent,
    EmployeedetailsComponent,
    SignupComponent,
    SigninComponent,
    ForgotComponent,
    AdminfilterComponent,
    AdminpendingtaskComponent,
    AdmincompletetaskComponent,
    PendingtaskComponent,
    CompletetaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [WebService, UserService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }


