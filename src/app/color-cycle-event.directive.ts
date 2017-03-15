import { Directive, HostListener, HostBinding, Output, EventEmitter, OnInit } from '@angular/core';

@Directive({
  selector: '[colorCycleEvent]'
})
export class ColorCycleEventDirective implements OnInit {
  private colors = ['black', 'red', 'blue', 'green']
  private index = 0;
  textColor = this.colors[this.index];

  @Output() colorChanged = new EventEmitter<string>();

  ngOnInit() {
    this.colorChanged.next(this.textColor);
  }

  @HostListener('click')
  onClick () {
    this.textColor = this.getNextColor();
    this.colorChanged.next(this.textColor);
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
