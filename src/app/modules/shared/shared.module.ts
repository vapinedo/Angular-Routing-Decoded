import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';

const components = [
    NavbarComponent
];

const modules = [
    CommonModule
];

@NgModule({
    declarations: [components],
    imports: [modules],
    exports: [components, modules],
})
export class SharedModule {}