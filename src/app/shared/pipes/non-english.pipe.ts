import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nonEnglish'
})
export class NonEnglishPipe implements PipeTransform {

  transform(str: string, args?: any): any {
    return str.replace(/[^A-Za-z\.]+/g, ' ');
  }
}
