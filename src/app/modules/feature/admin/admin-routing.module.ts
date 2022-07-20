import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FormGuard } from '@app/modules/core/guards/form.guard';
import { PermissionsGuard } from '@app/modules/core/guards/permissions.guard';

import { ListComponent } from './pages/list/list.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { AddProductComponent } from './pages/add-product/add-product.component';

const routes: Routes = [
  {
    path: '',
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
];

const modules = [CommonModule, RouterModule.forChild(routes)];

@NgModule({
  imports: [modules],
  exports: [modules],
})
export class AdminRoutingModule {}

export const AdminComponents = [
  ListComponent,
  WelcomeComponent,
  AddUserComponent,
  AddProductComponent
];

