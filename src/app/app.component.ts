import { Component, OnInit } from '@angular/core';
import {environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Directives... BAM!!!';
  view: 'blink' | 'bedazzle' | 'colors' | 'colorEvent' | 'security';
  color: string = '';

  constructor() {
    this.title = environment.production.toString();
  }

  ngOnInit(): void {
    this.view = 'blink';
  }

  setState(state) {
    this.view = state;
  }

  colorChanged($event) {
    this.color = $event;
  }
}
