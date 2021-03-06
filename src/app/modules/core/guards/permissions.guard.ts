import { Injectable } from '@angular/core';
import { CanActivateChild, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '@core/services/auth.service';

@Injectable()
export class PermissionsGuard implements CanActivateChild {
  constructor(private authSvc: AuthService) {}

  canActivateChild():
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    console.log('Permissions Guard');
    return this.authSvc.hasPermissions();
  }
}
