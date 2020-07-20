import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService  } from '../../shared/task.service';
import { WebService } from 'src/app/shared/web.service';

@Component({
  selector: 'app-admin-taskdetails',
  templateUrl: './admin-taskdetails.component.html',
  styleUrls: ['./admin-taskdetails.component.css']
})
export class AdminTaskdetailsComponent implements OnInit {

taskId;
taskdata;

Status = {
  status: ''
  };

complete = 'complete';
pending = 'pending';


Update = {
  comment: ''
};
usercomment;
updateEmail = this.auth.getUserDetails().email;


 constructor(private activated: ActivatedRoute, private task: TaskService, public auth: WebService) {
 }

 ngOnInit() {

this.taskId = this.activated.snapshot.params;

this.task.getone(this.taskId.id).subscribe(
  data => {
    this.taskdata = data;
  },
  err => {
    console.log(err);
  }
);

this.getComment();

 }



 updateTask() {
  console.log(this.Status);

  this.task.updatestatus(this.taskId, this.taskdata).subscribe(res => {
    location.reload();
    alert('Status Updated');
  });
 }

 // comment

updatecomment() {
  this.task.Updatecomment(this.taskId.id, this.updateEmail, this.Update).subscribe(res => {
    this.clearTask();
    this.ngOnInit();
  });
}

getComment() {
  this.task.getcomment(this.taskId.id).subscribe(
    data => {
      this.usercomment = data;
    },
    err => {
      console.log(err);
    }
  );
}


clearTask() {
  this.Update = {
    comment: ''
  };
 }

}
