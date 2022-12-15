import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '../../core/models/tracks.model';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  transform(value: TrackModel[], arg: string | null = null, sort: string = 'asc'): TrackModel[] {
    return value;
  }

}
