import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AlbumService {
_url = 'https://itunes.apple.com/search?term=';
  constructor(
    private http:HttpClient
  ){}

  getAlbums(artistName) {
    let header = new HttpHeaders()
    .set('Type-content','aplication/json')
    return this.http.get(this._url+artistName+'&entity=album', {headers: header});
  }
}
