import { Component } from '@angular/core';
import { AlbumService }from './services/album.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trainingexerciseangular';
  artistName: string = '';
  hasSearched: boolean = false;
  public albums :Array <any> = []
  constructor(private albumService:AlbumService) {    
  }
 
  onButtonClick() {    
    this.albumService.getAlbums(this.artistName).subscribe((resp: any) => {
      this.albums = resp.results
      // console.log(resp.results)
      this.hasSearched = true;
    })
  }
}
