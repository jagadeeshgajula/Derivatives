import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapoptionquickComponent } from './swapoptionquick.component';

describe('SwapoptionquickComponent', () => {
  let component: SwapoptionquickComponent;
  let fixture: ComponentFixture<SwapoptionquickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapoptionquickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapoptionquickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
