import { NgModule } from '@angular/core';

import { AuthGuard } from './guards/auth.guard';
import { FormGuard } from './guards/form.guard';
import { LoadGuard } from './guards/load.guard';
import { PermissionsGuard } from './guards/permissions.guard';

import { AuthService } from './services/auth.service';
import { MessageService } from './services/message.service';

@NgModule({
  providers: [
    AuthService, 
    MessageService,
    AuthGuard,
    FormGuard,
    LoadGuard,
    PermissionsGuard
  ],
})
export class CoreModule {}
