import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '../../core/models/tracks.model';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  transform(value: Array<any>, arg: string | null = null, sort: string = 'asc'): TrackModel[] {
    try {
      if (arg === null) {
        return value
      } else {
        const tmpList = value.sort((a, b) => {
          if (a[arg] < b[arg]) {
            return -1
          }
          else if (a[arg] === b[arg]) {
            return 0;
          }
          else if (a[arg] > b[arg]) {
            return 1;
          }
          return 1
        });
        return (sort === 'asc') ? tmpList : tmpList.reverse()
      }


    } catch (error) {
      console.log('Error' + error);
      return value;

    }
  }


}
