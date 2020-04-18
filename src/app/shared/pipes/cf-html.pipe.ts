import { Pipe, PipeTransform } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

@Pipe({
  name: 'cfHtml'
})
export class CfHtmlPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {}

  transform(value: any): SafeHtml {
    const htmlString = documentToHtmlString(value);
    return this.domSanitizer.bypassSecurityTrustHtml(htmlString);
  }

  transformLongText(value: string): SafeHtml {
    const htmlString = value.replace(new RegExp('\n', 'g'), '<br />');
    return this.domSanitizer.bypassSecurityTrustHtml(htmlString);
  }

}
