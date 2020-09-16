import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// modules
import { MaterialModule } from './material.module';

const classesToInclude = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [classesToInclude],
  exports: [
    MaterialModule,
  ],
  entryComponents: [],
  providers: []
})
export class SharedModule { }
