import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

import { AuthGuard } from './core/auth/auth.guard';

import { DefaultLayoutComponent } from './core/layout/default-layout/default-layout.component';
import { AccessDeniedComponent } from './core/page/access-denied/access-denied.component';
import { PageNotFoundComponent } from './core/page/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
        canLoad: [AuthGuard],
        data: {
          preload: true,
          authorities: ['ROLE_USER']
        }
      },
      {
        path: 'users',
        loadChildren: 'app/user/user.module#UserModule',
        canLoad: [AuthGuard],
        data: {
          authorities: ['ROLE_ADMIN']
        }
      }
    ]

  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {
        //enableTracing: true, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategy
      })
  ],
  exports: [
    RouterModule
  ],
  providers: [
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }
