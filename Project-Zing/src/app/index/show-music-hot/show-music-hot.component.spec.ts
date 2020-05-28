import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMusicHotComponent } from './show-music-hot.component';

describe('ShowMusicHotComponent', () => {
  let component: ShowMusicHotComponent;
  let fixture: ComponentFixture<ShowMusicHotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMusicHotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMusicHotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
