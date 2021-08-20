import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appChbgcolor]'
})
export class ChangeBgColorDirective {
  constructor(private ele: ElementRef, private renderer: Renderer2) {
    this.changeBackgroundColor('red');
    this.border = '0px solid green';
    this.talign = "center";
    this.padding = "20px";
  }

  @HostBinding('style.border') border: string;
  @HostBinding('style.text-align') talign: string;
  @HostBinding('style.padding') padding: string;

  @HostListener('mouseover') onMouseOver() {
    this.changeBackgroundColor('red');
    this.border = '15px solid green';
    this.talign = "center";
    this.padding = "20px";
  }

  @HostListener('click') onClick() {
    window.alert('This is HostBinding!');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor('green');
    this.border = '15px solid blue';
    this.talign = "center";
    this.padding = "20px";
  }

  changeBackgroundColor(color: string) {
    this.renderer.setStyle(this.ele.nativeElement, 'color', color);
  }
}
