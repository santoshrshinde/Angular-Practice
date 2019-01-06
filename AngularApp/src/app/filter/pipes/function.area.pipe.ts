import { Injectable, Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
@Pipe({
  name: 'functionAreaPipe',
  pure: false
})
@Injectable()
export class FunctionAreaPipe implements PipeTransform {
  transform(items: any[], param: any[]): any {
    // filter items array, items which match and return true will be kept, false will be filtered out
    if (param.length === 0) {
      return items;
    }
    if (items) {
        return  _.filter(items, (v) => _.includes(param, v.FunctionArea));
    }
  }
}
