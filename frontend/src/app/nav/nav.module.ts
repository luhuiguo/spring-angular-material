import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { NavComponent } from './nav.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [NavComponent]
})
export class NavModule { }
