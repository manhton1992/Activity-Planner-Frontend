import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewActivityPlannerComponent } from './new-activity-planner.component';

describe('NewActivityPlannerComponent', () => {
  let component: NewActivityPlannerComponent;
  let fixture: ComponentFixture<NewActivityPlannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewActivityPlannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewActivityPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
