import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [LayoutComponent, SidebarComponent]
})
export class LayoutModule { }
