import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeBasicComponent } from './trade-basic.component';

describe('TradeBasicComponent', () => {
  let component: TradeBasicComponent;
  let fixture: ComponentFixture<TradeBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
