import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CallbackComponent } from './components/callback/callback.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistDetailComponent } from './components/artist-details/artist-details.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'home', component: HomeComponent },
  { path: 'artist/:id', component: ArtistDetailComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];