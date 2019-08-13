import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RecordsRoutingModule } from './records-routing.module';
import { RecordsComponent } from './records.component';

import { MaterialModule } from '../shared/modules/material/material.module';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    RecordsComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    RecordsRoutingModule,
    MaterialModule,
    FormsModule
  ],
})
export class RecordsModule { }
