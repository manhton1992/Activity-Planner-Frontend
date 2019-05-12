import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityDateilComponent } from './activity-dateil.component';

describe('ActivityDateilComponent', () => {
  let component: ActivityDateilComponent;
  let fixture: ComponentFixture<ActivityDateilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityDateilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityDateilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
