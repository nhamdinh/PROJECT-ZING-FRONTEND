import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {SongViewDetail} from '../_model/SongViewDetail';

@Injectable({
  providedIn: 'root'
})
export class ViewDetailSongService {

  song: BehaviorSubject<SongViewDetail> = new BehaviorSubject<SongViewDetail>(new class implements SongViewDetail {
    idSong: number;
    nameSong: string;
    infoSong: string;
    imageSong: string;
    dateSong: Date;
    likeSong: number;
    listenSong: number;
    downloadSong: number;
    commendSong?: string;
    author: string;
    linkSong: string;
    category: string;
    singer: any;
    album: any;
  }());

  constructor() {
  }

  getSong() {
    return this.song;
  }

  setSong(song: SongViewDetail) {
    this.song.next(song);
  }
}
