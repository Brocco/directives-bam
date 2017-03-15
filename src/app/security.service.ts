import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SecurityService {
  private _roles: string[];

  constructor() {
    this._roles = [];
  }

  toggleRole(role) {
    const idx = this._roles.indexOf(role);
    if (idx === -1) {
      this._roles = [...this._roles, role];
    } else {
      this._roles = this._roles
        .filter(r => r !== role);
    }
    this._rolesSubject.next(this._roles);
  }

  private _rolesSubject = new BehaviorSubject<string[]>([]);
  public getRoles(): Observable<string[]> {
    return this._rolesSubject.asObservable();
  }

}
