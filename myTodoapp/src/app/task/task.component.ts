import { Component, OnInit, Input } from '@angular/core';
import  { Task } from "./task";
import {TaskService} from "./task.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }
  save(): void{
    this.taskService.updateTask(this.task).pipe().subscribe(() => console.log('Update' + this.task._id));
  }
  deleteTask(): void{
    this.taskService.deleteTask(this.task).pipe().subscribe(() => console.log('Delete' + this.task._id));
  }
  onSelected(): void{
    this.taskService.getTask(this.task._id).pipe();
  }
}
