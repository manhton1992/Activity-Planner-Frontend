import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDateiComponent } from './task-datei.component';

describe('TaskDateiComponent', () => {
  let component: TaskDateiComponent;
  let fixture: ComponentFixture<TaskDateiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskDateiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDateiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
