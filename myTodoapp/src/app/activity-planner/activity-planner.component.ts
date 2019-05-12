import {Component, Input, OnInit} from '@angular/core';
import {activityPlanner} from "./models/activityPlann";
import {ActivityService} from "./activity.service";

@Component({
  selector: 'app-activity-planner',
  templateUrl: './activity-planner.component.html',
  styleUrls: ['./activity-planner.component.scss']
})
export class ActivityPlannerComponent implements OnInit {
  @Input() acvitity : activityPlanner;
  constructor(private acvivityService : ActivityService) { }

  ngOnInit() {
  }
  formatDate(stringDate: string): string {
    const localeTime = new Date(stringDate);
    const month = ("0" + (localeTime.getMonth() + 1)).slice(-2);
    const date = ("0" + (localeTime.getDate())).slice(-2);

    const hour = ("0" + (localeTime.getHours())).slice(-2);
    const min = ("0" + (localeTime.getMinutes())).slice(-2);

    return [localeTime.getFullYear(), month, date].join("-") + " " + [hour, min].join(":");
  }

}
