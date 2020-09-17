import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// modules
import { MaterialModule } from './material.module';

// components
import { NavigationComponent } from './components/navigation/navigation.component';


const classesToInclude = [
  NavigationComponent
];

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
    NavigationComponent
  ],
  entryComponents: [],
  providers: []
})
export class SharedModule { }
