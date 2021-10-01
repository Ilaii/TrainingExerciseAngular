import { Component } from '@angular/core';
import { AlbumService }from './services/album.service'
import { SortPipe } from './pipes/sort.pipe'
import { PaginatePipe } from './pipes/paginate.pipe';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SortPipe,
  PaginatePipe]
})
export class AppComponent {
  title = 'trainingexerciseangular';
  constructor(
    private albumService:AlbumService,
    private sortpipe:SortPipe,
    private paginate:PaginatePipe
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
  ordAsc: boolean = false;
  public albums :Array <any> = []
  
  onAscDesc(){
    this.ordAsc = true;
    // console.log(this.ordAsc)
  }

  onButtonClick() {
    this.showAllSelected = false;
    this.pageSize = 10;    
    this.albumService.getAlbums(this.artistName).subscribe((resp: any) => {
      this.albums = resp.results
      // console.log(resp.results)
      this.hasSearched = true;
    })
  }
  onShowAll() {
    this.pageNumber = 1
    this.pageSize = this.albums.length
    this.showAllSelected = true
    // console.log('hello from orderClick')
  }
}
