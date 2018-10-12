import { NgModule } from '@angular/core';
import { MatDialogModule, MatIconModule } from '@angular/material';

const matModules = [MatDialogModule, MatIconModule];

@NgModule({
  imports: matModules,
  exports: matModules
})
export class MaterialModule {}
