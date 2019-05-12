import { Component, OnInit } from '@angular/core';
import {activityPlanner} from "../models/activityPlann";
import {ActivityService} from "../activity.service";

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {
  activities : activityPlanner[] = [];

  constructor(private  activityService : ActivityService) { }

  ngOnInit() {
    this.getActivities();
  }
  getActivities(): void {
    this.activityService.getActivities().subscribe(activities => this.activities = activities)
  }

}
