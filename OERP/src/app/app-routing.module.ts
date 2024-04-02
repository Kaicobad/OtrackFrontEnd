
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { AuthGuard } from './authguard/auth.guard';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes =
[
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(mod => mod.SettingsModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'ordertrack',
    loadChildren: () => import('./ordertrack/ordertrack.module').then(mod => mod.OrdertrackModule),
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
