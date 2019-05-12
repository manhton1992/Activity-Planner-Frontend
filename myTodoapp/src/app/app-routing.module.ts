import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TasklistComponent} from "./task/tasklist/tasklist.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {TaskDateiComponent} from "./task/task-dateil/task-datei.component";
import {ActivityListComponent} from "./activity-planner/activity-list/activity-list.component";
import {ActivityDateilComponent} from "./activity-planner/activity-dateil/activity-dateil.component";

const routes: Routes = [
  {
    path: 'tasks',
    component: TasklistComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'tasks/:id',
    component: TaskDateiComponent
  },
  {
    path: 'activityPlanners',
    component: ActivityListComponent
  },
  {
    path: 'activityPlanners/:id',
    component: ActivityDateilComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
