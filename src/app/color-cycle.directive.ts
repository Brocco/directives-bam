import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[colorCycle]'
})
export class ColorCycleDirective {
  private colors = ['black', 'red', 'blue', 'green']
  private index = 0;
  textColor = this.colors[this.index];

  @HostListener('click')
  onClick () {
    this.textColor = this.getNextColor();
  }

  @HostBinding('style.color')
  get color() {
    return this.textColor;
  }

  private getNextColor(): string {
    this.index++;
    this.index = this.index < this.colors.length ? this.index : 0;
    return this.colors[this.index];
  }
}
