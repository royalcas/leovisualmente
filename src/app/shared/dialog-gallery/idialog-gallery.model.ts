import { SafeHtml } from '@angular/platform-browser';
export interface IDialogGalleryModel {
  title: string;
  description: string | SafeHtml;
  tags?: string[];
  images?: string[];
}
