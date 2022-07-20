import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from "./admin-routing.module";

import { AdminComponents } from "./admin-routing.module";

const modules = [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
];

@NgModule({
    declarations: [AdminComponents],
    imports: [modules],
    exports: [modules],
})
export class AdminModule {}