import { Component, OnInit, Input, ɵbypassSanitizationTrustStyle } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {
  comic: any;
  id: number;
  cargando: boolean = true;
  imagenes: boolean = true;

  constructor(private _marvelService: MarvelService, private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe(param =>{
      this.id = param['id'];
      //console.log(this.id);
    });

    this.getComic();
   }

  ngOnInit(): void {
  }

  getComic(){
    this._marvelService.getComic(this.id).subscribe(comic=> {
      this.comic = comic;
      console.log(this.comic);
      this.cargando = false;

      if(this.comic.images.length === 0 || this.comic.images.length === 1){
        this.imagenes = false;
      }
    });
  }

}
