import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@feature/home/pages/home.component';
import { LoadGuard } from '@core/guards/load.guard';
import { AuthPreloadStrategyI } from '@core/interfaces/auth-preload-strategy.interface';

const routes: Routes = [
  {
    path: 'admin',
    canLoad: [LoadGuard],
    loadChildren: () =>
      import('@feature/admin/admin.module').then((m) => m.AdminModule),
  },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: AuthPreloadStrategyI,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
