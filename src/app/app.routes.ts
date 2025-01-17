import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ListadoVComponent } from './pages/listado-v/listado-v.component';
export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'not-found', component: NotFoundComponent},
    {path: 'listado-v', component: ListadoVComponent},
    {path: '**', redirectTo: 'not-found'}
];
