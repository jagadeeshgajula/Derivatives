import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapoptionComponent } from './swapoption.component';

describe('SwapoptionComponent', () => {
  let component: SwapoptionComponent;
  let fixture: ComponentFixture<SwapoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
