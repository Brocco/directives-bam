import { Directive, Input, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { SecurityService } from "./security.service";
import { Subscription } from 'rxjs/Subscription'

@Directive({
  selector: '[lockDown]'
})
export class LockDownDirective implements OnInit, OnDestroy {

  private roleSubscription: Subscription;
  @Input() lockDown;

  private userRoles = [];

  constructor(private security: SecurityService) {}

  @HostBinding() get disabled() {
    let hasRole = false;
    this.lockDown.forEach(req => {
      if (!hasRole) {
        const idx = this.userRoles.indexOf(req);
        if (idx !== -1) {
          hasRole = true;
        }
      }
    })

    return !hasRole;
  }

  ngOnInit() {
    this.roleSubscription = this.security.getRoles()
      .subscribe(r => this.userRoles = r);
  }
  ngOnDestroy(): void {
    this.roleSubscription.unsubscribe();
  }

}
