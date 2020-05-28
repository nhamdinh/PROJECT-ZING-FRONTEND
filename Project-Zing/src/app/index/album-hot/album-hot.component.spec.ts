import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumHotComponent } from './album-hot.component';

describe('AlbumHotComponent', () => {
  let component: AlbumHotComponent;
  let fixture: ComponentFixture<AlbumHotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumHotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumHotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
