import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootScheduleComponent } from './root-schedule.component';

describe('RootScheduleComponent', () => {
  let component: RootScheduleComponent;
  let fixture: ComponentFixture<RootScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
