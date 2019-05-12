import { Component, OnInit } from '@angular/core';
import {activityPlannerTemplate} from "../models/temActivityPlanner";
import {ActivityService} from "../activity.service";

@Component({
  selector: 'app-new-activity-planner',
  templateUrl: './new-activity-planner.component.html',
  styleUrls: ['./new-activity-planner.component.scss']
})
export class NewActivityPlannerComponent implements OnInit {

  newActivity: activityPlannerTemplate = {
    name: '',
    description: '',
    startTime: new Date(2019, 5, 2, 12, 0, 0, 0),
    endTime: new Date(),
    place: '',
     priority: 1,
    participant: '',
    category: ''
  }
  constructor(private activityService : ActivityService) { }

  ngOnInit() {
  }
  addnewActivity(){
    let tmpNewActivity = Object.assign({}, this.newActivity);
    this.activityService.addActivityPlanner(tmpNewActivity).subscribe();
  }

}
