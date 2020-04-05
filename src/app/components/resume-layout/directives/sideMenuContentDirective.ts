import {Directive, ElementRef, HostBinding} from '@angular/core';

@Directive({
  selector: 'bv-side-menu-content',
  exportAs: 'bv-side-menu-content'
})
export class SideMenuContentDirective {
  @HostBinding('class')
  public classes = 'side-menu-container d-flex flex-column align-items-stretch p-4';
  @HostBinding('style')
  public styles = 'min-width: 300px; max-width: 300px; background: #3b4151; color: white;';
}
