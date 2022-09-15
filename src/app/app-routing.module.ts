import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeviceListComponent } from './device-list/device-list.component';
import {SupportedDevicesComponent} from './supported-devices/supported-devices.component';
import {ClaimsComponent} from "./claim/claims.component";
import {DeviceDetailsComponent} from "./device-details/device-details.component";

const routes: Routes = [
  { path:  '', component:  DeviceListComponent},
  { path:  'lodge-a-claim', component:  SupportedDevicesComponent},
  { path:  'claim', component:  ClaimsComponent},
  {path: 'device-info', component: DeviceDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
