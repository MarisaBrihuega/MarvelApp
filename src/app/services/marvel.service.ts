import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  PUBLIC_KEY = 'd39a0a68529e1d6ac0129a59f9ecca26';
  HASH = '80fcb8758d38aca4f7935bc5ae0c3b96';
  URL_BASE = 'https://gateway.marvel.com';
  URL_API = `?limit=80&ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
  URL_API2 = `?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`

  private Array_paginas: any[] = [
    {titulo: 'Súper Héroes',
    descripcion: 'Descubre a todos los super héroes que componen la familia de Marvel.',
    img: '../../assets/images/familia.jpg',
    id: 'a'},
    {titulo: 'Cómics',
    descripcion: 'Aquí encontrarás los comics más populares de nuestra casa, junto con muchos datos interesantes. ',
    img: '../../assets/images/comics.jpg',
    id: 'b'},
    {titulo: 'Películas',
    descripcion: 'Las producciones cinematográficas más populares y vistas hasta el momento, junto con mucha información de interés. ',
    img: '../../assets/images/peliculas.jpg',
    id: 'c'},
  ];

  constructor(private httpCliente: HttpClient) { }

  getPaginas(){
    return this.Array_paginas;
  }

  getCharacters(){
    return this.httpCliente.get(`${this.URL_BASE}/v1/public/characters${this.URL_API}`).pipe(map (personajes => personajes['data'].results));
  }

  getComics(){
    return this.httpCliente.get(`${this.URL_BASE}/v1/public/comics${this.URL_API}`).pipe(map (comics => comics['data'].results));
  }

  getComic(id: number){
    return this.httpCliente.get(`${this.URL_BASE}/v1/public/comics/${id}${this.URL_API2}`).pipe(map (comic=> comic['data'].results[0]));
  }

  getSeries(){
    return this.httpCliente.get(`${this.URL_BASE}/v1/public/series${this.URL_API}`).pipe(map (series => series['data'].results));
  }
}
//b833c26c8cab91c4681963182622bce0d697cc81 privada