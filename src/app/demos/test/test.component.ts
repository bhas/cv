import {AfterViewInit, Component, Directive, HostBinding, OnInit} from '@angular/core';

// #region js methods
declare function loadConnect4(): void;
// declare function UnityProgress(unityInstance, progress): any;
//declare var UnityLoader: any;
// #endregion

@Component({
  selector: 'demo-test',
  templateUrl: './test.component.html',
  styleUrls: []
})
export class TestComponent implements AfterViewInit {
  unityInstance: any;


  public ngAfterViewInit(): void {
    // loadConnect4();
    // this.unityInstance = UnityLoader.instantiate("unityContainer", './src/assets/unity/connect-4/Build/Built-connect-4.json');
    loadConnect4();
  }



}


