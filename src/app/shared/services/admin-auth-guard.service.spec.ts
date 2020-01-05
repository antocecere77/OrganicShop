import { TestBed, inject } from '@angular/core/testing';

import { AdminAuthGuard } from 'shared/services/admin-auth-guard.service';

describe('AdminAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminAuthGuard]
    });
  });

  it('should be created', inject([AdminAuthGuard], (service: AdminAuthGuard) => {
    expect(service).toBeTruthy();
  }));
});
