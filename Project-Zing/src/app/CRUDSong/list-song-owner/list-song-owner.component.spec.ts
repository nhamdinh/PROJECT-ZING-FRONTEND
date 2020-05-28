import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSongOwnerComponent } from './list-song-owner.component';

describe('ListSongOwnerComponent', () => {
  let component: ListSongOwnerComponent;
  let fixture: ComponentFixture<ListSongOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSongOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSongOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
