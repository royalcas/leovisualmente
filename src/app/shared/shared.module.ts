import { ChartsModule } from './charts/charts.module';
import { GalleryComponent } from './gallery/gallery.component';
import { DialogGalleryComponent } from './dialog-gallery/dialog-gallery.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { PostalLayoutComponent } from './postal-layout/postal-layout.component';
import { PostalTitleComponent } from './postal-layout/postal-title/postal-title.component';
import { PostalTitleNoteComponent } from './postal-layout/postal-title-note/postal-title-note.component';
import { PostalOptionsComponent } from './postal-layout/postal-options/postal-options.component';
import { PostalContentComponent } from './postal-layout/postal-content/postal-content.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { TagSelectionComponent } from './tag-selection/tag-selection.component';
import { LoadingComponent } from './loading/loading.component';
import { MaterialModule } from './material.module';
import { BubbleComponent } from './charts/bubble/bubble.component';
import { SocialLinksComponent } from './postal-layout/social-links/social-links.component';
import { CfHtmlPipe } from './pipes/cf-html.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, MaterialModule, ChartsModule, RouterModule],
  declarations: [
    MainLayoutComponent,
    PostalLayoutComponent,
    PostalTitleComponent,
    PostalTitleNoteComponent,
    PostalOptionsComponent,
    PostalContentComponent,
    IconButtonComponent,
    TagSelectionComponent,
    LoadingComponent,
    DialogGalleryComponent,
    GalleryComponent,
    SocialLinksComponent,
    CfHtmlPipe
  ],
  exports: [
    MainLayoutComponent,
    FlexLayoutModule,
    PostalLayoutComponent,
    PostalTitleComponent,
    PostalTitleNoteComponent,
    PostalOptionsComponent,
    PostalContentComponent,
    TagSelectionComponent,
    LoadingComponent,
    MaterialModule,
    DialogGalleryComponent,
    GalleryComponent,
    ChartsModule,
    SocialLinksComponent,
    CfHtmlPipe
  ],
  entryComponents: [DialogGalleryComponent],
  providers: [CfHtmlPipe]
})
export class SharedModule {}
