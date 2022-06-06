import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable()
export class NoAuthGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthService) {}

  canActivate(): boolean {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
      return false;
    }
    return true;
  }
}
