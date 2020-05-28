export interface Song {
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
}
