import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cfHtml'
})
export class CfHtmlPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
