import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AuthGuard } from './core/auth/auth.guard';

import {NavComponent} from './nav/nav.component';
import {ForbiddenComponent} from './page/forbidden/forbidden.component';
import {NotFoundComponent} from './page/not-found/not-found.component';
import {ErrorComponent} from './page/error/error.component';
import {LoginComponent} from './login/login.component';

export const routes: Routes = [

  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: '',
    component: NavComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        canLoad: [AuthGuard],
        data: {
          preload: true,
          authorities: ['ROLE_USER']
        }
      },
      //     {
      //       path: 'users',
      //       loadChildren: 'app/user/user.module#UserModule',
      //       canLoad: [AuthGuard],
      //       data: {
      //         authorities: ['ROLE_ADMIN']
      //       }
      //     },
      //     {
      //       path: 'test',
      //       loadChildren: 'app/test/test.module#TestModule',
      //       canLoad: [AuthGuard],
      //       data: {
      //         authorities: ['ROLE_USER']
      //       }
      //     }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {
        //enableTracing: true, // <-- debugging purposes only
      })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
