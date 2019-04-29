import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetScheduleComponent } from './reset-schedule.component';

describe('ResetScheduleComponent', () => {
  let component: ResetScheduleComponent;
  let fixture: ComponentFixture<ResetScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
