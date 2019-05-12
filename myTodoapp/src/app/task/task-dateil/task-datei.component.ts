import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../task";
import  {TaskService} from "../task.service";
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-task-datei',
  templateUrl: './task-datei.component.html',
  styleUrls: ['./task-datei.component.scss']
})
export class TaskDateiComponent implements OnInit {
  @Input() task: Task;
  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private location: Location
  ) {}

  ngOnInit() {
   this.getTask();
  }
  getTask() : void{
    let stringToSplit = window.location.href;
    let x = stringToSplit.split("/");
    this.taskService.getTask(x[x.length-1]).subscribe(task => this.task = task);
  }
  goBack(): void{
    this.location.back();
  }
  save(): void {
    this.taskService.updateTask(this.task).subscribe(() => this.goBack());
  }
  deleteTask(): void{
    this.taskService.deleteTask(this.task).pipe().subscribe(() => this.goBack());
  }
}
