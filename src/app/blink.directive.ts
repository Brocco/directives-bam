import { Directive, Input, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[blink]'
})
export class BlinkDirective {
  private show = true;
  @HostBinding() get hidden() {
    return this.show;
  }

  constructor(elem: ElementRef) {
    setInterval(() => { this.show = !this.show; }, 1000);
  }
}
