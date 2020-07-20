import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../shared/task.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

pending;

  constructor(public task: TaskService) { }

  ngOnInit(): void {
  }

}
