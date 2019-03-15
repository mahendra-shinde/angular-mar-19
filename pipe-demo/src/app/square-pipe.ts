import { PipeTransform } from '@angular/core';

export class SquarePipe implements PipeTransform {
    transform(value: number, arg: Array<any>): any {
        return value * value;
    }
}
