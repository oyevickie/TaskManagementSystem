import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { TasklistComponent } from './user/tasklist/tasklist.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ChangepassComponent } from './user/changepass/changepass.component';
import { NotificatonComponent } from './user/notificaton/notificaton.component';
import { ContactComponent } from './user/contact/contact.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CreatetaskComponent } from './admin/createtask/createtask.component';
import { AdminTasklistComponent } from './admin/admin-tasklist/admin-tasklist.component';
import { AdminEdittaskComponent } from './admin/admin-edittask/admin-edittask.component';
import { EmployeeprofileComponent } from './admin/employeeprofile/employeeprofile.component';
import { SignupComponent } from './common/signup/signup.component';
import { SigninComponent } from './common/signin/signin.component';
import { ForgotComponent } from './common/forgot/forgot.component';
import { UserService } from './shared/user.service';
import { AdminTaskdetailsComponent } from './admin/admin-taskdetails/admin-taskdetails.component';
import { AdminpendingtaskComponent } from './admin/adminpendingtask/adminpendingtask.component';
import { AdmincompletetaskComponent } from './admin/admincompletetask/admincompletetask.component';
import { TaskdetailComponent } from './user/taskdetail/taskdetail.component';
import { EmployeedetailsComponent } from './admin/employeedetails/employeedetails.component';
import { PendingtaskComponent } from './user/pendingtask/pendingtask.component';
import { CompletetaskComponent } from './user/completetask/completetask.component';


const routes: Routes = [
  {
    path: 'user',
    component: HomeComponent,
    canActivate: [UserService],
    children: [
      { path : '', component: TasklistComponent, canActivate: [UserService]},
      { path : 'taskDetail/:id', component : TaskdetailComponent,  canActivate: [UserService]},
      { path : 'pendingtask', component : PendingtaskComponent,  canActivate: [UserService]},
      { path : 'completetask', component : CompletetaskComponent,  canActivate: [UserService]},
      { path : 'profile', component: ProfileComponent , canActivate: [UserService]},
      { path : 'change_password/:id', component: ChangepassComponent  , canActivate: [UserService]},
      { path : 'notification', component: NotificatonComponent  , canActivate: [UserService]},
      { path : 'contact', component : ContactComponent  , canActivate: [UserService]},
      { path : 'pendingtask', component : ContactComponent  , canActivate: [UserService]},
      { path : 'completetask', component : ContactComponent  , canActivate: [UserService]}
    ]
  },
  {
    path: 'task',
    component: AdminHomeComponent,
    canActivate: [UserService],
    children: [
      { path : '', component : AdminTasklistComponent,  canActivate: [UserService]},
      { path : 'pendingtask', component : AdminpendingtaskComponent,  canActivate: [UserService]},
      { path : 'completetask', component : AdmincompletetaskComponent,  canActivate: [UserService]},
      { path : 'taskDetail/:id', component : AdminTaskdetailsComponent,  canActivate: [UserService]},
      { path : 'createtask', component: CreatetaskComponent , canActivate: [UserService]},
      { path : 'edittask', component: AdminEdittaskComponent, canActivate: [UserService] },
      { path : 'profiles', component : ProfileComponent, canActivate: [UserService] },
      { path : 'change_password/:id', component: ChangepassComponent  , canActivate: [UserService]},
      { path : 'contactus', component: ContactComponent, canActivate: [UserService] },
      { path : 'employeeprofile', component: EmployeeprofileComponent , canActivate: [UserService] },
      { path : 'employeedet/:id', component: EmployeedetailsComponent , canActivate: [UserService] }

    ]
  },
  { path: 'register', component: SignupComponent },
  { path : 'login', component : SigninComponent },
  { path : 'forgotpassword', component : ForgotComponent },
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
