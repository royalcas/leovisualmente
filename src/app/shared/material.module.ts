import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

const matModules = [MatDialogModule, MatIconModule, MatProgressSpinnerModule, MatButtonModule];

@NgModule({
  imports: matModules,
  exports: matModules
})
export class MaterialModule {}
