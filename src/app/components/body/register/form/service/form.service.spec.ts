import { TestBed } from '@angular/core/testing';

import { FormService } from './form.service';

describe('FormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormService = TestBed.get(FormService);
    expect(service).toBeTruthy();
  });

  it('should add user', () => {
    const service = new FormService();
    const mockUser: any = {
      email: 'sj@gmail.com',
      password: '12345'
    };

    service.addUser(mockUser);

    expect(service.users).toContain(mockUser);
  });
});
