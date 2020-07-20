import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/shared/web.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeeprofile',
  templateUrl: './employeeprofile.component.html',
  styleUrls: ['./employeeprofile.component.css']
})
export class EmployeeprofileComponent implements OnInit {

  public taskks;
  taskData;

  public newUser: any = {
    first_name: '',
    last_name: '',
    email: ''

  };



t = '';


 constructor( private taskservice: WebService, public router: Router) { }

 ngOnInit() {
  this.getTasks();


 }


 getTasks(){
  this.taskservice.getUser().subscribe(res => {
     this.taskks = res;


   });
 }

 viewTask(t){
  this.taskData = t;
  this.router.navigateByUrl('/task/employeedet/' + this.taskData);

 }

 deleteTask(id) {
  this.taskservice.deleteUser(id).subscribe(res => {
    this.getTasks();
    alert ('Deleted Successfully');

});
 }


 }
