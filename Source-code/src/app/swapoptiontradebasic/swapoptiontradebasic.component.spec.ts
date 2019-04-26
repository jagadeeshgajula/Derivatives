import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapoptiontradebasicComponent } from './swapoptiontradebasic.component';

describe('SwapoptiontradebasicComponent', () => {
  let component: SwapoptiontradebasicComponent;
  let fixture: ComponentFixture<SwapoptiontradebasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapoptiontradebasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapoptiontradebasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
