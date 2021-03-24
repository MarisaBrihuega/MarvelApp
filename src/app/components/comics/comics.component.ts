import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  Comics: any[] = [];
  cargando: boolean = true;

  constructor(private _marvelService:MarvelService, private _router:Router) {
    this.getComics();
   }

  ngOnInit(): void {
  }

  getComics(){
    this._marvelService.getComics().subscribe(comics=> {
      this.Comics = comics.filter(comic => (comic.description !== null && comic.images.length >= 1));
      console.log(this.Comics);
      this.cargando = false;

    });
  }

  verMas(id: number){
    this._router.navigate(['comic_info', id]);
  }

}
