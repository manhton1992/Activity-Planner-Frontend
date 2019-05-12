import {Component, Input, OnInit} from '@angular/core';
import {activityPlanner} from "../models/activityPlann";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {ActivityService} from "../activity.service";

@Component({
  selector: 'app-activity-dateil',
  templateUrl: './activity-dateil.component.html',
  styleUrls: ['./activity-dateil.component.scss']
})
export class ActivityDateilComponent implements OnInit {
  @Input() activity: activityPlanner;

  constructor(
    private route: ActivatedRoute,
    private activityService: ActivityService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getActivity();
  }
  getActivity() : void{
    let stringToSplit = window.location.href;
    let x = stringToSplit.split("/");
    this.activityService.getActivityPlanner(x[x.length-1]).subscribe(activity => this.activity = activity);
  }
  goBack(): void{
    this.location.back();
  }
  save(): void {
    this.activityService.updateActivityPlanner(this.activity).subscribe(() => this.goBack());
  }
  deleteTask(): void{
    this.activityService.deleteActivity(this.activity).pipe().subscribe(() => this.goBack());
  }
  stringAsDate(dateStr: string) {
    return new Date(dateStr);
  }
}
