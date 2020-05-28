import {FormControl} from '@angular/forms';
import {FileUploader} from 'ng2-file-upload';

export class SongViewDetail {
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
    singer: any;
    album: any;

}
