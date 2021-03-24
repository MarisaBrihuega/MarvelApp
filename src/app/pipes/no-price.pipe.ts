import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noPrice'
})
export class NoPricePipe implements PipeTransform {

  transform(value: any[]): String {
    if(value.length == 0){
      return "Fuera de stock (no en venta)"
    } else if (value.length == 1 && value[0].price == 0){
      return "No disponible";
    } else if (value.length == 1 && value[0].price > 0){
      return "$" + `${value[0].price}`;
    }
  }

}
