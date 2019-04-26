import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickTicketComponent } from './quick-ticket.component';

describe('QuickTicketComponent', () => {
  let component: QuickTicketComponent;
  let fixture: ComponentFixture<QuickTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
