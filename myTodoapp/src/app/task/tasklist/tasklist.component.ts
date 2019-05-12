import { Component, OnInit } from '@angular/core';

//import {TASKS} from "../tasklist";
import {Task} from  "../task";
import {TaskService} from "../task.service";

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) { }
  ngOnInit() {
    this.gettasks();
  }
  gettasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks)
  }

}
