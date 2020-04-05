import {Component, ContentChild, Directive, ElementRef, HostBinding, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'bv-resume-layout',
  templateUrl: './resume-layout.component.html',
  styleUrls: ['./resume-layout.component.css']
})
export class ResumeLayoutComponent {
  @Input()
  public showHeader = true;
}


