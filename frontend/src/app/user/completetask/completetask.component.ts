import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/shared/web.service';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/shared/task.service';

@Component({
  selector: 'app-completetask',
  templateUrl: './completetask.component.html',
  styleUrls: ['./completetask.component.css']
})
export class CompletetaskComponent implements OnInit {


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

  constructor(public auth: WebService, public router: Router, public task: TaskService) { }

  ngOnInit() {




    this.email = this.auth.getUserDetails().email;

    this.task.taskComplete(this.email).subscribe(
      user => {
        this.details = user;
        console.log(this.details);

      },
      err => {
        console.error(err);
      }
    );


  }

  viewTask(obj){
    this.taskData = obj;
    console.log(this.taskData);
    this.router.navigateByUrl('/user/taskDetail/' + this.taskData);


   }

}
