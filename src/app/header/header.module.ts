import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LeftHeaderComponent} from './left-header/left-header.component';
import { RightHeaderComponent } from './right-header/right-header.component';
import {NbIconModule, NbSelectModule} from '@nebular/theme';



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
    NbSelectModule
  ]
})
export class HeaderModule { }
