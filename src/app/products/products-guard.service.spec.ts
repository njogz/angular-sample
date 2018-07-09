import { TestBed, inject } from '@angular/core/testing';

import { ProductsGuardService } from './products-guard.service';

describe('ProductsGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsGuardService]
    });
  });

  it('should be created', inject([ProductsGuardService], (service: ProductsGuardService) => {
    expect(service).toBeTruthy();
  }));
});
