import { TestBed, inject } from '@angular/core/testing';

import { OrderCompletenessService } from './-order-completeness.service';

describe('OrderCompletenessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderCompletenessService]
    });
  });

  it('should be created', inject([OrderCompletenessService], (service: OrderCompletenessService) => {
    expect(service).toBeTruthy();
  }));
});
