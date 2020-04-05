import {Component, Input} from '@angular/core';

@Component({
  selector: 'bv-side-section',
  templateUrl: './side-section.component.html',
  styleUrls: ['./side-section.component.css']
})
export class SideSectionComponent {

  @Input()
  public header: string;

}
