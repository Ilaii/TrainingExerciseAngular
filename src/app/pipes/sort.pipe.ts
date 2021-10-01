import { Pipe, PipeTransform } from '@angular/core';
// import * as _ from 'underscore';
@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  // transform(value: Array<any>, ordertype:boolean): Array<any> {
  transform(value: Array<any>, ordertype:boolean): unknown {
    return ('greetings from pipe')
    // if (!value) return[]

  
    // if (ordertype)
    // {
    //   return _.sortBy(value,function(album){return album.collectionCensoredName}) //normal

    // }else{
    //       return _.sortBy(value,function(album){return album.collectionCensoredName}).reverse //inverse

    // }
  }

}
