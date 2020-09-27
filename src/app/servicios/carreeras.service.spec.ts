import { TestBed } from '@angular/core/testing';

import { CarreerasService } from './carreeras.service';

describe('CarreerasService', () => {
  let service: CarreerasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarreerasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
