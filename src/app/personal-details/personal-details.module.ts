import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditDetailsComponent } from './edit-details/edit-details.component';

import { PersonalDetailsRoutingModule } from './personal-details-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module'



@NgModule({
  declarations: [
    EditDetailsComponent
  ],
  imports: [
    CommonModule,
    PersonalDetailsRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class PersonalDetailsModule { }
