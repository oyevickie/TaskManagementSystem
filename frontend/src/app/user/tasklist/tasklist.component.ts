import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/shared/web.service';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {


  details;
  email;
  taskid : string;

  public newTask: any = {
    _id: '',
    project: '',
    task_name: '',
    email: '' ,
    Details: ''

  };
  taskData: any;
  taskID: string;

  constructor(public auth: WebService, public router: Router) { }

  ngOnInit() {
    this.email = this.auth.getUserDetails().email;

    this.auth.tasklist(this.email).subscribe(
      user => {
        this.details = user;
      },
      err => {
        console.error(err);
      }
    );


  }



  viewTask(obj){
    this.taskData = obj;
    this.router.navigateByUrl('/user/taskDetail/' + this.taskData);


   }


}
