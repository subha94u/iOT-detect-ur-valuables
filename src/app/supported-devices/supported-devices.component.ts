import { Component } from '@angular/core';

@Component({
  templateUrl: './supported-devices.component.html',
  styleUrls: ['./supported-devices.component.scss']
})
export class SupportedDevicesComponent {
  alert = false;
  public submitClaim(): void {
    this.alert = true;
  }
}
