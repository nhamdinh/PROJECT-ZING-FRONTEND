import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailSongComponent } from './view-detail-song.component';

describe('ViewDetailSongComponent', () => {
  let component: ViewDetailSongComponent;
  let fixture: ComponentFixture<ViewDetailSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDetailSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
