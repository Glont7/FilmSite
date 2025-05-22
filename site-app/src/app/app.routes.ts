import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddFilmComponent } from './add-film/add-film.component';

export const routes: Routes = [
    { path: '', redirectTo:'home' , pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {path: 'add-film',component: AddFilmComponent},
];
