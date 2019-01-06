import { Injectable, Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
@Pipe({
    name: 'locationInitialPipe',
    pure: false
})
@Injectable()
export class LocationInitialsPipe implements PipeTransform {
    transform(items: any, param: any): any {
        if (param.length === 0) {
            return items;
        }
        if (items) {
            const arr = _.filter(items, loc => eval(this.createString(param)));
            return arr;
        }
    }
    createString(params: any): string {
        let conditionstr = '';
        for (let i = 0; i < params.length; i++) {
            if (i < params.length - 1) {
                conditionstr += 'loc.Location.CityName.charAt(0) == ' + '"' + params[i] + '"' + ' || ';
            } else {
                conditionstr += 'loc.Location.CityName.charAt(0) == ' + '"' + params[i].toString() + '"';
            }
        }
        return conditionstr;
    }
}
