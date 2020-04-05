import {Directive, ElementRef, HostBinding} from '@angular/core';

@Directive({
  selector: 'bv-title-content',
  exportAs: 'bv-title-content'
})
export class TitleContentDirective {
  @HostBinding('class')
  public classes = 'title-container d-flex flex-column align-items-center';
  @HostBinding('style')
  public styles = 'height: 180px; padding: 40px; background: lightgray';
}
