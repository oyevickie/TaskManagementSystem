import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/shared/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpendingtask',
  templateUrl: './adminpendingtask.component.html',
  styleUrls: ['./adminpendingtask.component.css']
})
export class AdminpendingtaskComponent implements OnInit {


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

t='';


 constructor( public taskservice: TaskService, private router: Router) { }



 pending;

 profilee() {
   this.taskservice.pendings().subscribe(res => {
     this.pending = res;
     console.log(this.pending);
   });
 }



 ngOnInit() {
  this.profilee();



 }


 getTasks(){
  this.taskservice.getTasks().subscribe(res => {
     this.taskks = res;
     console.log(this.taskks.date);


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

  this.router.navigateByUrl("/task/taskDetail/" + this.taskID)

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
