import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { AddUserComponent } from './components/admin/add-user/add-user.component';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { WelcomeComponent } from './components/admin/welcome/welcome.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListComponent } from './components/admin/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    HomeComponent,
    AddUserComponent,
    AddProductComponent,
    WelcomeComponent,
    NavbarComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
