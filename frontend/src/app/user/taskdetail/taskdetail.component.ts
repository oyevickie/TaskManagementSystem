import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../../shared/task.service';
import { ActivatedRoute } from '@angular/router';
import { WebService } from 'src/app/shared/web.service';


@Component({
  selector: 'app-taskdetail',
  templateUrl: './taskdetail.component.html',
  styleUrls: ['./taskdetail.component.css']
})
export class TaskdetailComponent implements OnInit {

// status
taskData;
  taskId: any;

update={
  status: ''
}


complete="complete";
pending="pending";

// comment

Update={
  comment: ''
}
usercomment;
  constructor(private activated: ActivatedRoute, private task: TaskService, public auth: WebService) {}

updateEmail = this.auth.getUserDetails().email;

  ngOnInit() {


    this.taskId = this.activated.snapshot.params;

    this.task.getone(this.taskId.id).subscribe(
      data => {
        this.taskData = data
      },
      err=> {
        console.log(err);
      }
    )

    this.getComment()

  }


  // status
  updateTask() {
    this.task.updatestatus(this.taskId, this.taskData).subscribe(res => {
    location.reload()
      alert("Status Updated")
    });
   }

// comment

updatecomment() {
  this.task.Updatecomment(this.taskId.id, this.updateEmail, this.Update).subscribe(res => {
    this.clearTask()
    this.ngOnInit();
  })
}

getComment() {
  this.task.getcomment(this.taskId.id).subscribe(
    data => {
      this.usercomment = data;
    },
    err=> {
      console.log(err);
    }
  )
}


clearTask() {
  this.Update={
    comment: ''
  }
 };

}


