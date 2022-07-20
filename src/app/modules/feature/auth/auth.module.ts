import { NgModule } from '@angular/core';
import { AuthComponent } from '@feature/auth/pages/auth.component';

const components = [AuthComponent];

@NgModule({
    declarations: [components]
})
export class AuthModule {}