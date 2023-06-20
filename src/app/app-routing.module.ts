import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { SigninComponent } from './Components/signin/signin.component';
import { ApplicationComponent } from './Components/application/application.component';
import { SignupComponent } from './Components/signup/signup.component';
import { ProfilComponent } from './Components/profil/profil.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path:'app', component:ApplicationComponent},
  {path:'login',component:SigninComponent},
  {path:'register', component:SignupComponent},
  {path:'profil', component:ProfilComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
