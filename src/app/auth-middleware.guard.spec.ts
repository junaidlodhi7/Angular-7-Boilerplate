import { TestBed, async, inject } from '@angular/core/testing';

import { AuthMiddlewareGuard } from './auth-middleware.guard';

describe('AuthMiddlewareGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthMiddlewareGuard]
    });
  });

  it('should ...', inject([AuthMiddlewareGuard], (guard: AuthMiddlewareGuard) => {
    expect(guard).toBeTruthy();
  }));
});
