import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { PageRoutingModule } from './page-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PageRoutingModule
  ],
  declarations: [
    PageNotFoundComponent,
    AccessDeniedComponent
  ]
})
export class PageModule { }
