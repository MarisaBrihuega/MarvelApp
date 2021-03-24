import { SeriesComponent } from './components/series/series.component';
import { ComicsComponent } from './components/comics/comics.component';
import { SuperHeroeComponent } from './components/super-heroe/super-heroe.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { Routes } from '@angular/router';
import { ComicComponent } from './components/comic/comic.component';

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    {path: 'superHeroe', component: SuperHeroeComponent},
    {path: 'comics', component: ComicsComponent},
    {path: 'comic_info/:id', component: ComicComponent},
    {path: 'series', component: SeriesComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];