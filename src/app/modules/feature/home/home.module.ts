import { NgModule } from '@angular/core';
import { HomeComponent } from "@feature/home/pages/home.component";

const components = [HomeComponent];

@NgModule({
    declarations: [components]
})
export class HomeModule {}