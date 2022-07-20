import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable()
export class AuthService {
  constructor() {}

  isLoggedIn() {
    return of(true).pipe(delay(500));
  }

  hasPermissions() {
    return of(true);
  }
}
