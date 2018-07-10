import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ErrorComponent } from './error/error.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ErrorComponent, ForbiddenComponent, NotFoundComponent]
})
export class PageModule { }
