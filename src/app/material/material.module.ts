import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';


// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
@NgModule({
  declarations: [],
  exports: [
    MatSidenavModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
