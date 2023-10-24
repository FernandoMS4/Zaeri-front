import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { SessionService } from './session.service';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {
    constructor(private sessionService: SessionService, public router: Router) { }
    canActivate(): boolean {
        if (!this.sessionService.isAuthenticated()) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}