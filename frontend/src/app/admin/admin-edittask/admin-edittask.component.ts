import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/shared/task.service';

@Component({
  selector: 'app-admin-edittask',
  templateUrl: './admin-edittask.component.html',
  styleUrls: ['./admin-edittask.component.css']
})
export class AdminEdittaskComponent implements OnInit {


  public tasks;
  id = '';
  public newTask = {
    project: '',
    task_name: '',
    email: '' ,
    Details: ''

  };

   constructor( private Task: TaskService) { }

   ngOnInit() {
    console.log(this.newTask);

    this.getTask();
   }

   getTask(){
    this.Task.getTasks().subscribe(res => {
       this.tasks = res;
     });
   }

   updateTask(id) {
    this.Task.updateTask(id, this.newTask).subscribe(res => {
      this.getTask();
    });
   }



  }
