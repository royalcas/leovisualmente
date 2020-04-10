import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

const matModules = [MatDialogModule, MatIconModule];

@NgModule({
  imports: matModules,
  exports: matModules
})
export class MaterialModule {}
