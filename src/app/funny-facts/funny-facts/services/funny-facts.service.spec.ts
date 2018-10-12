import { TestBed, inject } from '@angular/core/testing';

import { FunnyFactsService } from './funny-facts.service';

describe('FunnyFactsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FunnyFactsService]
    });
  });

  it('should be created', inject([FunnyFactsService], (service: FunnyFactsService) => {
    expect(service).toBeTruthy();
  }));
});
