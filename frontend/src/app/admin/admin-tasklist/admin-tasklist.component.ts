import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/shared/task.service';
import { Router, Routes } from '@angular/router';
import { WebService } from 'src/app/shared/web.service';

@Component({
  selector: 'app-admin-tasklist',
  templateUrl: './admin-tasklist.component.html',
  styleUrls: ['./admin-tasklist.component.css']
})
export class AdminTasklistComponent implements OnInit {

  property;

  taskID;
  public taskks;
  taskData;

  id = '';
public newTask: any = {
  project: '',
  task_name: '',
  email: '' ,
  Details: ''

};

userdetail = {
  email: ''
};

t = '';


 constructor( public taskservice: TaskService, private router: Router , public user: WebService) { }


 ngOnInit() {


  this.getEmail();
  this.getTasks();


 }

 gettaskDetails() {
   this.taskservice.gettaskDetails(this.userdetail).subscribe(res => {
    this.taskks = res;

   });
 }

getEmail() {
  this.user.getUser().subscribe(arg =>
    this.property = arg);


}

 getTasks(){
  this.taskservice.getTasks().subscribe(res => {
     this.taskks = res;


   });
 }

 createTask() {
  this.taskservice.createTask(this.newTask).subscribe(res => {
    this.getTasks();

  });
}


deleteTask(id) {
  this.taskservice.deleteTask(id).subscribe(res => {
    this.getTasks();
    alert("Task Deleted")

});
 }


 setupDate(t) {
  this.id = t._id;
  this.newTask.project = t.project;
  this.newTask.task_name = t.task_name;
  this.newTask.email = t.email;
  this.newTask.Details = t.Details;

 }

viewTask(t){

  this.taskID = t;
  this.router.navigateByUrl('/task/taskDetail/' + this.taskID);

 }

clearTask() {
   this.id = '';
   this.newTask = {
    project: '',
    task_name: '',
    email: '' ,
    Details: ''

  };

 }

updateTask(id) {
  this.taskservice.updateTask(this.id, this.newTask).subscribe(res => {
    this.clearTask();
    this.getTasks();
  });
 }
}


