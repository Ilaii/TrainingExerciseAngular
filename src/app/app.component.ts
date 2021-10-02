import { Component } from '@angular/core';
import { AlbumService }from './services/album.service'
import { SortPipe } from './pipes/sort.pipe'
import { PaginatePipe } from './pipes/paginate.pipe';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SortPipe]
})
export class AppComponent {
  title = 'trainingexerciseangular';
  constructor(
    private albumService:AlbumService,
    private sortpipe:SortPipe
    ) {    
  }
  
  pageSize: Number = 10;
  pageNumber:Number = 1;
  pageSizeOptions : [5,10,20, 'all']
  handlePage(e: PageEvent){
    this.pageSize = e.pageSize
    this.pageNumber = e.pageIndex + 1
  }


  artistName: string = '';

  showAllSelected: boolean = false;
  hasSearched: boolean = false;
  public ordAsc: boolean = false;
  public albums :Array <any> = []
  
  onAscDesc(){
    if (this.ordAsc === false)    
    {
      this.ordAsc = true;
      this.albumService.getAlbums(this.artistName).subscribe((resp: any) => {
        this.albums = resp.results.sort((a,b) => a.collectionCensoredName.localeCompare(b.collectionCensoredName)) })
      // return(null);
    }
    else
    {
      this.ordAsc = false;  
      this.albumService.getAlbums(this.artistName).subscribe((resp: any) => {
        this.albums = resp.results.sort((a,b) => b.collectionCensoredName.localeCompare(a.collectionCensoredName)) })         
    }
    return this.albums;
  }

  onButtonClick() {
    this.showAllSelected = false;
    this.ordAsc = false;
    this.pageSize = 10;    
    this.albumService.getAlbums(this.artistName).subscribe((resp: any) => {
      this.albums = resp.results
      // console.log(resp.results)
      
    })
    this.hasSearched = true;
  }
  onShowAll() {
    this.pageNumber = 1
    this.pageSize = this.albums.length
    this.showAllSelected = true
    // console.log('hello from orderClick')
  }
}
