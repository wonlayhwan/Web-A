import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCompletenessSummaryComponent } from './order-completeness-summary.component';

describe('OrderCompletenessSummaryComponent', () => {
  let component: OrderCompletenessSummaryComponent;
  let fixture: ComponentFixture<OrderCompletenessSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCompletenessSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCompletenessSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
