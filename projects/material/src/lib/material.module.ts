import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DropzoneCdkModule } from '@aloysius-software-factory/ngx-dropzone-cdk';
import { MatDropzone } from './mat-dropzone.component';

@NgModule({
  declarations: [MatDropzone],
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, DropzoneCdkModule],
  exports: [MatDropzone],
})
export class DropzoneMaterialModule {}
