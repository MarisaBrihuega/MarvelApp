import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ArrayPag: any[];
  cargando: boolean = true;

  constructor(private _marvelService: MarvelService, private _route: Router) {
    this.ArrayPag = this._marvelService.getPaginas();
    this.cargando = false;
  }

  ngOnInit(): void {
  }


  /*verHeroes(){
    this._route.navigate(['superHeroe']);
  }*/

  funcion(id: any){
    if(id == 'a'){
      this._route.navigate(['superHeroe']);
    } else if(id == 'b'){
      this._route.navigate(['comics']);
    } else if(id == 'c'){
      this._route.navigate(['series']);
    }

  }
}
