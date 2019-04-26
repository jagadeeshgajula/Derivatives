import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapoptionquickticketComponent } from './swapoptionquickticket.component';

describe('SwapoptionquickticketComponent', () => {
  let component: SwapoptionquickticketComponent;
  let fixture: ComponentFixture<SwapoptionquickticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapoptionquickticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapoptionquickticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
