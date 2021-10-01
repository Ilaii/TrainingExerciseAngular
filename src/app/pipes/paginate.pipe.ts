import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(array: any[], page_size: number | string, pageNumber: number): any[] {
    if (!array.length) return []
    if (page_size === 'all')
    {
      return array
    }
    page_size = page_size || 5
    pageNumber = pageNumber || 1
    --pageNumber
    // @ts-ignore
    return array.slice(pageNumber * page_size, (pageNumber + 1) * page_size)
  }

}
