import { Injectable } from '@angular/core';
import {MessageService} from "../message/message.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {activityPlannerTemplate} from "./models/temActivityPlanner";
import {catchError, filter, map} from "rxjs/internal/operators";
import {activityPlanner} from "./models/activityPlann";
@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  // connect to Backend
  private activitiesUrl = 'http://localhost:3000/api/activityPlanners';

  constructor(private messageService: MessageService, private http: HttpClient) { }
  /** Get all activities*/
  getActivities(): Observable<activityPlanner[]> {
    this.messageService.add('loaded Activities');
    return this.http.get<activityPlanner[]>(this.activitiesUrl).pipe(map(response => response['data']));
  }
  /** Add new activityPlanner on Database*/
  addActivityPlanner(activity: activityPlannerTemplate){
    this.messageService.add('added Activity');
    return this.http.post(this.activitiesUrl, activity).pipe(map (response => response['data']));
  }
  /** Get Single activities by Id . Will 404 if it not found*/
  getActivityPlanner(id: string): Observable<activityPlanner>{
    const singleActivityUrl = this.activitiesUrl + '/' + id;
    return this.http.get<activityPlanner>(singleActivityUrl).pipe(map( response => <activityPlanner>response['data']));
  }
  /** Update activitiy */
  updateActivityPlanner(activity: activityPlanner): Observable<any>{
    const singleTaskUrl = this.activitiesUrl + '/' + activity._id;
    return this.http.put(singleTaskUrl, activity).pipe();
  }
  /** Delete activity*/
  deleteActivity(task: activityPlanner): Observable<any>{
    const singleTaskUrl = this.activitiesUrl + '/' + task._id;
    this.messageService.add('deleted Activity');
    return this.http.delete(singleTaskUrl).pipe();
  }
}

