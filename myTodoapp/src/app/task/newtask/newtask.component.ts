import { Component, OnInit } from '@angular/core';
import {Task} from '../task';
import {TASKS} from "../tasklist";
import {TaskService} from "../task.service";
import {taskTemplate} from "../taskTemplate";

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.scss']
})
export class NewtaskComponent implements OnInit {
  newTask: taskTemplate = {
    title: '',
    description: '',
    priority: 1,
    done: false
  }
  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }
  addTask(){
    let tmpNewTask = Object.assign({}, this.newTask);
    this.taskService.addTask(tmpNewTask).subscribe();
  }
}
