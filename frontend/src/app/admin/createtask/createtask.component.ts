import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router'
import { TaskService } from '../../shared/task.service';
import { WebService } from 'src/app/shared/web.service';


@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.css']
})
export class CreatetaskComponent implements OnInit {


  public taskks;
  property;

  id = '';
public newTask = {
  project: '',
  task_name: '',
  email: '' ,
  Details: '',
  date: '',
  // productImage: ''
};

image;
alert = 'Created successfully';

 constructor( private taskservice: TaskService, public user: WebService) { }

 ngOnInit() {
this.getEmail();
 }

 selectImage(event) {
   if (event.target.files.length > 0) {
     const file = event.target.files[0];
     this.image = file;
     
   }
 }


 clearTask() {
  this.id = '';
  this.newTask = {
   project: '',
   task_name: '',
   email: '' ,
   Details: '',
   date: '',
 };

}


// view() {

//   const formData = new FormData();
//   formData.append('productImage', this.image);
//   return formData;
// }
 createTask() {

  // console.log(this.view());

  // this.newTask.productImage = formData;

  this.taskservice.createTask(this.newTask).subscribe(res => {
    this.clearTask();
    alert(this.alert);
    console.log(res);



  });
}

getEmail() {
  this.user.getUser().subscribe(arg =>
    this.property = arg);


}




}
