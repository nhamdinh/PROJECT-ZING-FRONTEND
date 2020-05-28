import {Component, OnInit} from '@angular/core';
import {Role, User} from '@app/JWT-ROLE/_models';
import {Router} from '@angular/router';
import {AuthenticationService} from '@app/JWT-ROLE/_services';
import {HttpClient} from '@angular/common/http';
import {SongService} from '../_service_not_authen/song.service';
import {Song} from '../_service_not_authen/song';
import {environment} from '@environments/environment';
import {SongViewDetail} from '../_model/SongViewDetail';
import {ViewDetailSongService} from '../_service_not_authen/view-detail-song.service';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

    currentUser: User;
    listSong: Song[] = [];
    keyWordSong = 'nameSong';
    srcImageSong = environment.srcImageSong;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private httpClient: HttpClient,
        private songService: SongService,
        private viewDetailSongService: ViewDetailSongService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        this.getAllSong();
    }

    get isAdmin() {
        return this.currentUser && this.currentUser.role === Role.Admin;
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/signin']);
    }

    ngOnInit() {
        this.getAllSong();
    }

    getAllSong() {
        this.songService.fetchListSongApi().subscribe((data) => {
            this.listSong = data;
        }, error => {
            console.log('error when get song!');
        });
    }

    onFocused(e) {
        console.log('focus0');
        // do something when input is focused
    }

    redirectViewSong(event: SongViewDetail) {
        this.viewDetailSongService.setSong(event);
        this.router.navigate(['/view-song']);
    }

    showKey(e) {
        console.log(e);
    }

    onViewSong(item: SongViewDetail) {
        this.viewDetailSongService.setSong(item);
        this.router.navigate(['/view-song']);
    }
}
