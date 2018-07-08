import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Feature Modules */
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { NavModule } from './nav/nav.module';
import { PageModule } from './page/page.module';
import { LoginModule } from './login/login.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';
import { HasAnyAuthorityDirective } from './core/auth/has-any-authority.directive';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    NavModule,
    PageModule,
    LoginModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
