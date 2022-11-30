import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { KøbeFilmComponent } from './pages/købe-film/købe-film.component';
import { LoginComonent } from './pages/login/login.component';
import { RentComponent } from './pages/rent/rent.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'købeFilm',
    component: KøbeFilmComponent
  },
  {
    path: 'rent',
    component: RentComponent
  },
  {
    path: 'login',
    component: LoginComonent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
