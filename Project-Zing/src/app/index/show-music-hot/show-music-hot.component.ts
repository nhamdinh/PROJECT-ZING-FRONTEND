import {Component, Input, OnInit} from '@angular/core';
import {Song} from '../../_service_not_authen/song';
import {SongViewDetail} from '../../_model/SongViewDetail';
import {Router} from '@angular/router';
import {ViewDetailSongService} from '../../_service_not_authen/view-detail-song.service';
import {environment} from '@environments/environment';

@Component({
    selector: 'app-show-music-hot',
    templateUrl: './show-music-hot.component.html',
    styleUrls: ['./show-music-hot.component.css']
})
export class ShowMusicHotComponent implements OnInit {
    paging = 1;
    songDetail: SongViewDetail = null;


    constructor(private viewDetailSongService: ViewDetailSongService, private router: Router) {
    }

    @Input() songsHot: Song[];

    srcImageSong = environment.srcImageSong;
    srcAudioSong = environment.srcAudioSong;

    ngOnInit(): void {
    }

    onViewSong(item: SongViewDetail) {
        this.viewDetailSongService.setSong(item);
        this.router.navigate(['/view-song']);
    }
}
