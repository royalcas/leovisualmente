import { NgModule } from '@angular/core';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';

const matModules = [MatDialogModule, MatIconModule, MatProgressSpinnerModule, MatButtonModule];

@NgModule({
  imports: matModules,
  exports: matModules
})
export class MaterialModule {}
