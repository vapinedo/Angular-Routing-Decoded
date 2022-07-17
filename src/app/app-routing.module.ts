import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { AddUserComponent } from './components/admin/add-user/add-user.component';
import { WelcomeComponent } from './components/admin/welcome/welcome.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'admin',
    component: WelcomeComponent,
    children: [
      { path: 'add-user', component: AddUserComponent },
      { path: 'add-product', component: AddProductComponent },
    ]
  },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
