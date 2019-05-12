import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TasklistComponent } from './task/tasklist/tasklist.component';
import { NewtaskComponent } from './task/newtask/newtask.component';

import {FormsModule} from "@angular/forms";
import { MessageComponent } from './message/message.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from "@angular/common/http";
import {CollapseModule} from "ngx-bootstrap";
import { TaskDateiComponent } from './task/task-dateil/task-datei.component';
import { ActivityPlannerComponent } from './activity-planner/activity-planner.component';
import { NewActivityPlannerComponent } from './activity-planner/new-activity-planner/new-activity-planner.component';
import { ActivityListComponent } from './activity-planner/activity-list/activity-list.component';
import { ActivityDateilComponent } from './activity-planner/activity-dateil/activity-dateil.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TasklistComponent,
    NewtaskComponent,
    MessageComponent,
    DashboardComponent,
    TaskDateiComponent,
    ActivityPlannerComponent,
    NewActivityPlannerComponent,
    ActivityListComponent,
    ActivityDateilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CollapseModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
