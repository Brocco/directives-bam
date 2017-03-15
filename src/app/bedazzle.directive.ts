import { Directive, Input, HostBinding, Output } from '@angular/core';

@Directive({
  selector: '[bling]'
})
export class BedazzleDirective {
  @Input() color;
  @Output() clicked;

  @HostBinding('style.color') get textColor() {
    return this.color;
  }
}
