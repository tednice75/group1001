import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis',
  standalone: true
})
export class EllipsisPipe implements PipeTransform {

  transform(value: string, limit: number): unknown {
    if(limit && value.length > limit) {
      return value.substring(0, limit).concat('...');
    }
    return value;
  }

}
