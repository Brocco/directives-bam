import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BlinkDirective } from './blink.directive';
import { BedazzleDirective } from './bedazzle.directive';
import { ColorCycleDirective } from './color-cycle.directive';
import { ColorCycleEventDirective } from './color-cycle-event.directive';
import { SecurityComponent } from './security/security.component';
import { LockDownDirective } from './lock-down.directive';
import { SecurityService } from "./security.service";

@NgModule({
  declarations: [
    AppComponent,
    BlinkDirective,
    BedazzleDirective,
    ColorCycleDirective,
    ColorCycleEventDirective,
    SecurityComponent,
    LockDownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    SecurityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
