import { TestBed } from '@angular/core/testing';

import { UpdateSongService } from './update-song.service';

describe('UpdateSongService', () => {
  let service: UpdateSongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateSongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
