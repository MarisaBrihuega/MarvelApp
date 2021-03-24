import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { SuperHeroeComponent } from './components/super-heroe/super-heroe.component';

//Importar rutas
import { ROUTES } from './app.routes';
import { ComicsComponent } from './components/comics/comics.component';
import { ComicComponent } from './components/comic/comic.component';
import { NoCharactersPipe } from './pipes/no-characters.pipe';
import { NoPricePipe } from './pipes/no-price.pipe';
import { SeriesComponent } from './components/series/series.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    LoadingComponent,
    SuperHeroeComponent,
    ComicsComponent,
    ComicComponent,
    NoCharactersPipe,
    NoPricePipe,
    SeriesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
