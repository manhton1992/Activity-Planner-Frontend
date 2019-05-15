import {Injectable } from '@angular/core';
import {MessageService} from "../message/message.service";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {activityPlannerTemplate} from "./models/temActivityPlanner";
import {catchError, filter, map, tap} from "rxjs/internal/operators";
import {activityPlanner} from "./models/activityPlann";
@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  // connect to Backend
  private activitiesUrl = 'http://localhost:3000/api/activityPlanners';

  constructor(private messageService: MessageService, private http: HttpClient) { }
  /** Log a AcvitivityService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`Activity Service: ${message}`);
  }
  /** Get all activities*/
  getActivities(): Observable<activityPlanner[]> {
    this.messageService.add('loaded Activities');
    return this.http.get<activityPlanner[]>(this.activitiesUrl).pipe(
      map(response => response['data']),
      tap(_ => this.log('fetched Avtivities')),
      catchError(this.handleError<activityPlanner[]>('get activities', []))
    );
  }
  /** Add new activityPlanner on Database*/
  addActivityPlanner(activity: activityPlannerTemplate){
    this.messageService.add('added Activity');
    return this.http.post(this.activitiesUrl, activity).pipe(
      map (response => response['data']),
      tap(_ => this.log('fetched Avtivity')),
      catchError(this.handleError<activityPlanner>('add new Activity'))
    );
  }
  /** Get Single activities by Id . Will 404 if it not found*/
  getActivityPlanner(id: string): Observable<activityPlanner>{
    const singleActivityUrl = this.activitiesUrl + '/' + id;
    return this.http.get<activityPlanner>(singleActivityUrl).pipe(
      map( response => <activityPlanner>response['data']),
      tap(_ => this.log('fetched Activity id=${id}')),
      catchError(this.handleError<activityPlanner>('get Activity id=${id}'))
    );
  }
  /** Update activitiy */
  updateActivityPlanner(activity: activityPlanner): Observable<any>{
    const singleTaskUrl = this.activitiesUrl + '/' + activity._id;
    return this.http.put(singleTaskUrl, activity).pipe(
      tap(_ => this.log('fetched update Activity')),
      catchError(this.handleError<any>('update Activity'))
    );
  }
  /** Delete activity*/
  deleteActivity(task: activityPlanner): Observable<any>{
    const singleTaskUrl = this.activitiesUrl + '/' + task._id;
    this.messageService.add('deleted Activity');
    return this.http.delete(singleTaskUrl).pipe(
      tap(_ => this.log('fetched delete Activity')),
      catchError(this.handleError<activityPlanner>('delete Activity'))
    );
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

