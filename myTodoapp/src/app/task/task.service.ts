import { Injectable } from '@angular/core';
import {Task} from "./task";
import {Observable, of} from "rxjs";
import {MessageService} from "../message/message.service";

import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map} from "rxjs/internal/operators";
import {taskTemplate} from "./taskTemplate";


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // connect to Backend
  private taskUrl = 'http://localhost:3000/api/tasks';
  constructor(private messageService: MessageService, private http: HttpClient) { }

  /** Get all Task*/
  getTasks(): Observable<Task[]> {
    this.messageService.add('load messages')
    //return of(TASKS);
    return this.http.get<Task[]>(this.taskUrl).pipe(map(response => response['data']));
  }
  /** Add new Task on Database*/
  addTask(task: taskTemplate){
    this.messageService.add('add task');
    return this.http.post(this.taskUrl, task).pipe(map (response => response['data']));
  }
  /** Get Single task by Id . Will 404 if it not found*/
  getTask(id: string): Observable<Task>{
    const singleTaskUrl = this.taskUrl + '/' + id;
    return this.http.get<Task>(singleTaskUrl).pipe(map( response => <Task>response['data']));
  }

  /** Update Task */
  updateTask(task: Task): Observable<any>{
    const singleTaskUrl = this.taskUrl + '/' + task._id;
    return this.http.put(singleTaskUrl, task).pipe();
  }

  /** Delete Task*/
  deleteTask(task: Task): Observable<any>{
    const singleTaskUrl = this.taskUrl + '/' + task._id;
    return this.http.delete(singleTaskUrl).pipe();
  }
}
