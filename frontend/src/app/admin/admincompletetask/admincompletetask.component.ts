import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/shared/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admincompletetask',
  templateUrl: './admincompletetask.component.html',
  styleUrls: ['./admincompletetask.component.css']
})
export class AdmincompletetaskComponent implements OnInit {


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



  complete;

  profilee() {
    this.taskservice.completee().subscribe(res => {
      this.complete = res;
      console.log(this.complete);
    });
  }

  ngOnInit(): void {
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
    console.log('deleted');

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
  console.log(this.taskID);

  this.router.navigateByUrl("/task/taskDetail/" + this.taskID)

  // console.log(this.taskData);


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
