import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'square'
})
export class SquarePipe implements PipeTransform {
    transform(value: number, arg: Array<any>): any {
        return value * value;
    }
}
