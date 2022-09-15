import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent {
  title = 'home-device-detection';
  selected = false;
  refresh = false;
  public constructor(
    private readonly _router: Router,
    private readonly _route: ActivatedRoute
  ) {
  }

  public deviceDetails(): void {
    this._router.navigate(['./', 'device-info'],{
      relativeTo: this._route,
    });
  }

  public refreshFn() {
    console.log('selected', this.selected);
    this.refresh = true;
  }
}
