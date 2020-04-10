import { ContentfulService } from './shared/services/contentful.service';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'leovisualmente';

  constructor(private contentful: ContentfulService, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.matIconRegistry.addSvgIcon('behance', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/Be.svg'));
    this.matIconRegistry.addSvgIcon('clubs-off', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/ClubsOff.svg'));
    this.matIconRegistry.addSvgIcon('clubs-on', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/ClubsOn.svg'));
    this.matIconRegistry.addSvgIcon('diamonds-off', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/DiamondsOff.svg'));
    this.matIconRegistry.addSvgIcon('diamonds-on', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/DiamondsOn.svg'));
    this.matIconRegistry.addSvgIcon('duck-off', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/DuckOff.svg'));
    this.matIconRegistry.addSvgIcon('duck-on', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/DuckOn.svg'));
    this.matIconRegistry.addSvgIcon('gp', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/GP.svg'));
    this.matIconRegistry.addSvgIcon('hearths-off', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/HeartsOff.svg'));
    this.matIconRegistry.addSvgIcon('hearths-on', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/HeartsOn.svg'));
    this.matIconRegistry.addSvgIcon('ig', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/Ig.svg'));
    this.matIconRegistry.addSvgIcon('leo', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/LeoIcon.svg'));
    this.matIconRegistry.addSvgIcon('spades-off', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/SpadesOff.svg'));
    this.matIconRegistry.addSvgIcon('spades-on', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/SpadesOn.svg'));
    this.matIconRegistry.addSvgIcon('vi', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/Vi.svg'));
    this.contentful.getProjects().pipe(tap(console.log)).subscribe();
  }
}
