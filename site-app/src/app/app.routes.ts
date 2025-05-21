import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import path from 'path';

export const routes: Routes = [
    {
        path: '', redirectTo:'home' , pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent
    },
];
