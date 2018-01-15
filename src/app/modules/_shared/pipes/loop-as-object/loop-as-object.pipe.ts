import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'loopAsObject'})
export class LoopAsObjectPipe implements PipeTransform {
  transform(value, args: string[]): any {
    const keys = [];
    for (const key in value) {
      if ( value.hasOwnProperty([key]) ) {
        keys.push(key);
      }
    }
    return keys;
  }
}
