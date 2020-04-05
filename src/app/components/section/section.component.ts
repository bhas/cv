import {Component, Input} from '@angular/core';

@Component({
  selector: 'bv-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {

  @Input()
  public title: string;

}
