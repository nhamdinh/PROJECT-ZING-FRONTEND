import {Component, OnInit} from '@angular/core';
import {User} from '@app/JWT-ROLE/_models';
import {HttpClient} from '@angular/common/http';
import {SongService} from '../../_service_not_authen/song.service';
import {AuthenticationService} from '@app/JWT-ROLE/_services';
import {Song} from '../../_service_not_authen/song';
import {UpdateSongService} from '../../_service_not_authen/update-song.service';
import {Singer} from '../../_model/Singer';
import {Album} from '../../_model/Album';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {environment} from '@environments/environment';
// @ts-ignore
@Component({
    selector: 'app-edit-song',
    templateUrl: './edit-song.component.html',
    styleUrls: ['./edit-song.component.less']
})
// @ts-ignore
export class EditSongComponent implements OnInit {

    currentUser: User;
    songForm: FormGroup;
    nameSong: string;
    keywordSinger = 'nameSinger';
    keywordAlbum = 'nameAlbum';
    songEdit: Song;
    srcImageSinger = 'assets/images/singer/';
    srcAlbum = 'assets/images/album/';
    isCannotCreate = true;
    formSongData: FormData;
    listSinger: Singer[] = [];
    listSingerName: string[] = [];
    listAlbum: Album[] = [];

    constructor(private  httpClient: HttpClient, private songService: SongService, private authenticationService: AuthenticationService,
                private updateSongService: UpdateSongService) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    ngOnInit() {
        this.getSong();
        this.getAllSinger();
        this.getAllAlbum();
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

        this.songForm = new FormGroup({
            nameSong: new FormControl(this.songEdit.nameSong, Validators.required),
            infoSong: new FormControl(this.songEdit.infoSong, Validators.required),
            imageSong: new FormControl(),
            dateSong: new FormControl(this.songEdit.dateSong, Validators.required),
            likeSong: new FormControl(this.songEdit.likeSong, Validators.required),
            listenSong: new FormControl(this.songEdit.listenSong, Validators.required),
            downloadSong: new FormControl(this.songEdit.downloadSong, Validators.required),
            commendSong: new FormControl(this.songEdit.commendSong, Validators.required),
            category: new FormControl(this.songEdit.category, Validators.required),
            author: new FormControl(this.songEdit.author, Validators.required),
            linkSong: new FormControl(this.songEdit.linkSong, Validators.required),
            singer: new FormControl(this.songEdit.idSinger, Validators.required),
            album: new FormControl(this.songEdit.idAlbum, Validators.required),
        });
        this.formSongData = new FormData();
    }

    getSong() {
        this.updateSongService.getSong().subscribe(song => this.songEdit = song);
    }

    submit() {
        const song: any = this.songForm.value;
        // console.log(song.nameSong);
        this.formSongData.append('nameSong', song.nameSong);
        this.formSongData.append('infoSong', song.infoSong);
        this.formSongData.append('dateSong', song.dateSong);
        this.formSongData.append('likeSong', song.likeSong);
        this.formSongData.append('listenSong', song.listenSong);
        this.formSongData.append('downloadSong', song.downloadSong);
        this.formSongData.append('commendSong', song.commendSong);
        this.formSongData.append('category', song.category);
        this.formSongData.append('author', song.author);
        this.formSongData.append('singer', song.singer.nameSinger);
        this.formSongData.append('album', song.album.nameAlbum);
        this.formSongData.append('idUser', this.currentUser.id.toString());
        // console.log(song.imageSong.value);

        this.creatSong(this.formSongData);
        // window.location.reload();

    }

    onChangeImage(event) {
        this.formSongData.append('imageSong', event.target.files[0]);
    }

    onChangeAudio(event) {
        // this.imageSong = event.target.files[0];
        // console.log('dsfds');
        this.formSongData.append('linkSong', event.target.files[0]);
    }

    creatSong(song: any) {
        // console.log(song.get('linkSong'));
        this.httpClient.post(`${environment.apiUrl}/create-song`, song).subscribe((result) => {
            console.log('Thêm bai hat thành công');
            // alert('ADD SUCCESS!');
        }, (error) => {
            console.log('Gặp lỗi khi thêm song');
            console.error(error);
        });
    }

    getAllSinger() {
        this.songService.fetchListSingerApi().subscribe((newItem) => {
            this.listSinger = newItem;
        }, error => {
            console.log('SongService.getAllSingerFromAPI() :: Gặp lỗi khi lấy danh sách ca si từ Back and');
        });
    }

    getAllAlbum() {
        this.songService.fetchListAlbumApi().subscribe((newItem) => {
            this.listAlbum = newItem;
        }, error => {
            console.log('SongService.getAllAlbumFromAPI() :: Gặp lỗi khi lấy danh sách album từ Back and');
        });
    }

    selectEvent(item) {
        // do something with selected item
    }

    onChangeSearchSinger(val: string) {
        // this.checkCanCreate();
    }

    onChangeSearchAlbum(val: string) {
        // this.checkCanCreate();

    }

    checkCanCreate() {
        // console.log(this.songForm.value.singer);
        const singer: any = this.songForm.value.singer;
        const album: any = this.songForm.value.album;


        if (this.listAlbum.includes(album) && this.listSinger.includes(singer)) {
            this.isCannotCreate = false;

        } else {
            this.isCannotCreate = true;
        }
    }


    onFocused(e) {
        console.log('focus0');
        // do something when input is focused
    }

}
