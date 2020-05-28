import {Component, OnInit} from '@angular/core';
import {SongService} from '../_service_not_authen/song.service';
import {Song} from '../_service_not_authen/song';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
    songs: Song[] = [];
    keyword = '';
    hitSongs: Song [] = [];
    daySongs: Song [] = [];
    pageOfItems: Array<any>;


    constructor(private songService: SongService) {
        this.getSongFromApi();
    }


    ngOnInit() {
        this.getSongFromApi();
    }

    getSongFromApi() {
        this.songService.fetchListSongApi().subscribe(song => {
            this.songs = song;
            console.log('dang lay du lieu tu api');
            this.hitSongs = song;
            this.hitSongs.sort((a, b) => {
                console.log('sap xep');
                return b.listenSong - a.listenSong;
            });
            this.daySongs = song;
            this.daySongs.sort((a, b) => {
                console.log('theo ngay');
                // @ts-ignore
                return new Date(b.dateSong) - new Date(a.dateSong);
            });
        });
    }

    searchSongByName() {
        if (this.keyword === '') {
            this.songs = this.songService.getAllSongs();
        } else {
            this.songs = this.songService.searchNewsByTitle(this.keyword);
        }
    }

    onChangePage(pageOfItems: Array<any>) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    }
}
