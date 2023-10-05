import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LogOutComponent } from './components/log-out/log-out.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo:'/auth/login', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'user', 
  loadChildren: () => import('./personal-details/personal-details.module').then(m => m.PersonalDetailsModule) 
  , canActivate: [AuthGuard]},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'contact-us', component: ContactUsComponent}, 
  { path: 'log-out', component: LogOutComponent},
  { path: '**', redirectTo: '/user' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
