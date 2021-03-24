import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-super-heroe',
  templateUrl: './super-heroe.component.html',
  styleUrls: ['./super-heroe.component.css']
})
export class SuperHeroeComponent implements OnInit {
  ArrayPersonajes: any[] = [];
  cargando: boolean = true;

  constructor(private _marvelService: MarvelService) {
    this.getCharacterss();
    //this.getDescription();

   }

  ngOnInit(): void {
  }

  getCharacterss(){
    this._marvelService.getCharacters().subscribe(personajes=>{
      this.ArrayPersonajes = personajes.filter(personaje => personaje.thumbnail.path !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available");
      console.log(this.ArrayPersonajes);
      this.cargando = false;
    });
  }
}
