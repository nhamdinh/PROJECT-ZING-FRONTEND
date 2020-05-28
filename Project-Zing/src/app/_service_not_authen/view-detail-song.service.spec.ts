import { TestBed } from '@angular/core/testing';

import { ViewDetailSongService } from './view-detail-song.service';

describe('ViewDetailSongService', () => {
  let service: ViewDetailSongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewDetailSongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
