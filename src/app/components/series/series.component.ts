import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';


@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  Series: any[];
  Creadores: any[];

  constructor(private _marvelService: MarvelService) { 
    this.getSerie();
  }

  ngOnInit(): void {
  }

  getSerie(){
    this._marvelService.getSeries().subscribe(series => {
      //console.log(series);
      this.Series = series.filter(serie_filtrada => serie_filtrada.description !== null);
      console.log(this.Series);
    });
  }

}
