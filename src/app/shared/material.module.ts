import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const matModules = [MatDialogModule, MatIconModule, MatProgressSpinnerModule];

@NgModule({
  imports: matModules,
  exports: matModules
})
export class MaterialModule {}
