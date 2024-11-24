import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {

    transform(value: string, ... argrs:any[]): string {
        return value.toUpperCase();
        
    }
}