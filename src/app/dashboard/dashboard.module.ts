import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InfoComponent } from './components/info/info.component';
import { UserComponent } from './components/user/user.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
  
    DashboardComponent,
       InfoComponent,
       UserComponent,
       WrapperComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule { }
