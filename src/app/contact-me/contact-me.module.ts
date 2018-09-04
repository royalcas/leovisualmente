import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactMeComponent } from './contact-me/contact-me.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ContactMeComponent],
  bootstrap: [ContactMeComponent]
})
export class ContactMeModule {}
