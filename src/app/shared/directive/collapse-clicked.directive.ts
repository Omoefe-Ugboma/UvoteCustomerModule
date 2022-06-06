import { Directive, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCollapseClicked]'
})
export class CollapseClickedDirective {

  constructor(private renderer: Renderer2) {}

  @HostListener('click', ['$event']) onClick(event: any) {
    const hasClass = event.target.classList.contains('fa-minus');

    if(hasClass) {
      this.renderer.removeClass(event.target, 'fa-minus');
      this.renderer.addClass(event.target, 'fa-plus');
    } else {
      this.renderer.addClass(event.target, 'fa-minus');
      this.renderer.removeClass(event.target, 'fa-plus');
    }
  }

}
