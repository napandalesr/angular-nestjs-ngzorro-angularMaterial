import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromComponents from './index';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTableModule } from 'ng-zorro-antd/table'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    fromComponents.components
  ],
  imports: [
    CommonModule,
    NzFormModule,
    ReactiveFormsModule,
    NzTableModule,
    FormsModule
  ],
  exports:[...fromComponents.components]
})
export class ContainersModule { }
