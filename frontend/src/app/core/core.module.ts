import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from '../app-material/app-material.module';
// import { NgZorroAntdModule } from 'ng-zorro-antd';

import { Ng2Webstorage } from 'ngx-webstorage';

import { NavMenuComponent } from './layout/nav-menu/nav-menu.component';

import { StateStorageService } from './auth/state-storage.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FlexLayoutModule,
    AppMaterialModule,
    // NgZorroAntdModule,

    Ng2Webstorage.forRoot({ prefix: 'app', separator: '-' })
  ],
  declarations: [
    NavMenuComponent
  ],
  entryComponents: [
  ],
  exports: [
  ],
  providers: [
    StateStorageService,
    AuthService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
