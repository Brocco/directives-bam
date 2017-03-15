import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SecurityService } from "../security.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'security-demo',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SecurityComponent implements OnInit {
  currentRoles: Observable<string[]>;

  constructor(private security: SecurityService) { }

  ngOnInit() {
    this.currentRoles = this.security.getRoles();
  }

  toggleRole(role) {
    this.security.toggleRole(role);
  }

}
