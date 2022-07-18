import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './services/auth.guard';
import { FormGuard } from './services/form.guard';
import { PermissionsGuard } from './services/permissions.guard';

import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { AddUserComponent } from './components/admin/add-user/add-user.component';
import { WelcomeComponent } from './components/admin/welcome/welcome.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/admin/list/list.component';

const routes: Routes = [
  {
    path: 'admin',
    canActivate: [AuthGuard],
    component: WelcomeComponent,
    children: [
      {
        path: '',
        canActivateChild: [PermissionsGuard],
        children: [
          {
            path: 'add-user',
            canDeactivate: [FormGuard],
            component: AddUserComponent,
          },
          {
            path: 'add-product',
            canDeactivate: [FormGuard],
            component: AddProductComponent,
          },
        ],
      },
      { path: 'list', component: ListComponent },
    ],
  },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
