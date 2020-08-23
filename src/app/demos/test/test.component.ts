import {AfterViewInit, Component, Directive, HostBinding, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

// #region js methods
declare function UnityProgress(unityInstance, progress): any;
declare var UnityLoader: any;
// #endregion

@Component({
  selector: 'demo-test',
  templateUrl: './test.component.html',
  styleUrls: []
})
export class TestComponent implements AfterViewInit {
  unityInstance: any;

  constructor(private _route: ActivatedRoute) {
  }

  public ngAfterViewInit(): void {
    const project = this._route.snapshot.paramMap.get('project').toLowerCase();
    switch (project) {
      case 'tic-tac-toe':
      case 'connect-4':
      case 'car-ai':
        const projectPath = `assets/unity/${project}/Build/Build.json`;
        this.unityInstance = UnityLoader.instantiate("unityContainer", projectPath, {onProgress: UnityProgress});
        break;
      default:
        throw new Error("Uknown page")
    }
  }
}


