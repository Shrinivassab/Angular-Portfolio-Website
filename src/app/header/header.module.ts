import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LeftHeaderComponent} from './left-header/left-header.component';
import { RightHeaderComponent } from './right-header/right-header.component';
import {NbIconModule, NbSelectModule, NbSidebarModule} from '@nebular/theme';
import {MatRippleModule} from '@angular/material/core';

@NgModule({
  declarations: [
    LeftHeaderComponent,
    RightHeaderComponent
  ],
  exports: [
    LeftHeaderComponent,
    RightHeaderComponent
  ],
  imports: [
    CommonModule,
    NbIconModule,
    NbSelectModule,
    MatRippleModule,
    NbSidebarModule
  ]
})
export class HeaderModule { }
