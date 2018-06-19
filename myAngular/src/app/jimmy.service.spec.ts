import { TestBed, inject } from '@angular/core/testing';

import { JimmyService } from './jimmy.service';

describe('JimmyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JimmyService]
    });
  });

  it('should be created', inject([JimmyService], (service: JimmyService) => {
    expect(service).toBeTruthy();
  }));
});
