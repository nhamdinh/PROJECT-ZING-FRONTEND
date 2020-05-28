import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Song} from './song';
import {Singer} from '../_model/Singer';
import {Album} from '../_model/Album';

@Injectable({
    providedIn: 'root'
})
export class SongService {

    songs: Song [] = [];
    url = 'http://localhost:8080/';
    listSinger: Singer[] = [];
    listAlbum: Album[] = [];

    constructor(private httpClient: HttpClient) {
        this.fetchListSongApi().subscribe((newItem) => {
            this.songs = newItem;
        }, error => {
            console.log('SongService.getAllSongsFromAPI() :: Gặp lỗi khi lấy danh sách bài hat từ Back and');
        });
        this.fetchListSingerApi().subscribe((newItem) => {
            this.listSinger = newItem;
        }, error => {
            console.log('SongService.getAllSingerFromAPI() :: Gặp lỗi khi lấy danh sách ca si từ Back and');
        });
        this.fetchListAlbumApi().subscribe((newItem) => {
            this.listAlbum = newItem;
        }, error => {
            console.log('SongService.getAllAlbumFromAPI() :: Gặp lỗi khi lấy danh sách album từ Back and');
        });
    }

    fetchListSingerApi() {
        return this.httpClient.get<Singer[]>(this.url + 'api/singer');
    }

    fetchListAlbumApi() {
        return this.httpClient.get<Album[]>(this.url + 'api/album');
    }

    fetchListSongApi() {
        return this.httpClient.get<Song[]>(this.url + 'api/songs');
    }

    fetchListSongUsersApi(idUser: number) {
        return this.httpClient.post<Song[]>(this.url + 'user-song', idUser);
    }

    getAllSongs() {
        console.log('b');
        return this.songs;
    }

    getAllSingers() {
        return this.listSinger;
    }

    getAllAlbums() {
        return this.listAlbum;
    }

    searchNewsByTitle(keyword: string): Song[] {
        const foundSongs = this.songs.filter(item => item.nameSong.includes(keyword));
        return foundSongs;
    }

    saveSong(songs: Song) {
        // @ts-ignore
        this.httpClient.post(this.url + 'api/home', songs).subscribe();
    }

    remoreSong(id: number) {
        // @ts-ignore
        this.httpClient.post(this.url + 'api/delete', id).subscribe();
    }
}
