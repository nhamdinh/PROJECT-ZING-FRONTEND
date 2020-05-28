import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Song} from './song';

@Injectable({
    providedIn: 'root'
})
export class UpdateSongService {
    song: BehaviorSubject<Song> = new BehaviorSubject<Song>(new class implements Song {
        id?: number;
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
        idSinger: number;
        idAlbum: number;
    }());

    constructor() {
    }

    getSong() {
        return this.song;
    }

    setSong(song: Song) {
        this.song.next(song);
    }
}
