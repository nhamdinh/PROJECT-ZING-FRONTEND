import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SongViewDetail} from '../../_model/SongViewDetail';
import {ViewDetailSongService} from '../../_service_not_authen/view-detail-song.service';
import {environment} from '@environments/environment';

@Component({
    selector: 'app-view-detail-song',
    templateUrl: './view-detail-song.component.html',
    styleUrls: ['./view-detail-song.component.less']
})
export class ViewDetailSongComponent implements OnInit {
    songDetail: SongViewDetail;
    srcImageSong = environment.srcImageSong;
    srcAudioSong = environment.srcAudioSong;

    constructor(private viewDetailSongService: ViewDetailSongService) {

    }

    ngOnInit(): void {
        this.getSongDetail();
    }

    getSongDetail() {
        this.viewDetailSongService.getSong().subscribe((song) => {
            this.songDetail = song;
        });
    }
}
