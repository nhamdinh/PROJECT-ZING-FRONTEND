import {Component, Input, OnInit} from '@angular/core';
import {Song} from '../../_service_not_authen/song';
import {SongViewDetail} from '../../_model/SongViewDetail';
import {ViewDetailSongService} from '../../_service_not_authen/view-detail-song.service';
import {Router} from '@angular/router';
import {environment} from '@environments/environment';

@Component({
    selector: 'app-music-new',
    templateUrl: './music-new.component.html',
    styleUrls: ['./music-new.component.css']
})
export class MusicNewComponent implements OnInit {
    p = 1;

    constructor(private viewDetailSongService: ViewDetailSongService, private router: Router) {
    }

    @Input() songNew: Song [];

    srcImageSong = environment.srcImageSong;
    srcAudioSong = environment.srcAudioSong;

    ngOnInit(): void {
    }
    onViewSong(item: SongViewDetail) {
        this.viewDetailSongService.setSong(item);
        this.router.navigate(['/view-song']);
    }
}
