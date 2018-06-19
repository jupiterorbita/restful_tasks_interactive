import { TestBed, inject } from '@angular/core/testing';

import { BobbyService } from './bobby.service';

describe('BobbyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BobbyService]
    });
  });

  it('should be created', inject([BobbyService], (service: BobbyService) => {
    expect(service).toBeTruthy();
  }));
});
