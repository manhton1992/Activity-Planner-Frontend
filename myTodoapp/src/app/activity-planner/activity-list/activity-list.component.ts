import { Component, OnInit } from '@angular/core';
import {activityPlanner} from "../models/activityPlann";
import {ActivityService} from "../activity.service";
import {MessageService} from "../../message/message.service";

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {
  activities : activityPlanner[] = [];
  constructor(private  activityService : ActivityService, private messageService : MessageService) { }

  ngOnInit() {
    this.getActivities();
  }
  getActivities(): void {
    this.activityService.getActivities().subscribe(activities => this.activities = activities)
  }
  /** Get Upcomming Activities*/
  getUpComingActivities(): activityPlanner[]{
    const now = new Date();
    return this.activities.filter( value => !this.timeCompare(value.startTime.toString()));
  }
  /** Get Pass Activities */
  getPassActivities(): activityPlanner[]{
    const now = new Date();
    //this.messageService.add( now.toString());
    return this.activities.filter( value => this.timeCompare(value.startTime.toString()));
  }
  timeCompare(stringDate: string): boolean{
    const date1 = new  Date(stringDate);
    const now = new Date();
    if (date1 < now){
      return true;
    } else {
      return false;
    }
  }

}
