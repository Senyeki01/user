import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
// import personal details component
import { EditDetailsComponent } from "./edit-details/edit-details.component";



const routes: Routes = [
  { path: '', redirectTo: '/user/profile', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'profile', component: EditDetailsComponent },
  
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PersonalDetailsRoutingModule { }