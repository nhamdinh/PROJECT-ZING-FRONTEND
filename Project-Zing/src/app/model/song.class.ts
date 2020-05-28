export class Song {

  idSong: number;
  nameSong: string;
  infoSong: string;
  imageSong: string;
  fileSong: string;
  dateSong: string;
  nameSinger?: any;


  constructor(nameSong: string, infoSong: string, imageSong: string, fileSong: string, dateSong: string, nameSinger: any) {
    this.nameSong = nameSong;
    this.infoSong = infoSong;
    this.imageSong = imageSong;
    this.fileSong = fileSong;
    this.dateSong = dateSong;
    this.nameSinger = nameSinger;
  }
}
