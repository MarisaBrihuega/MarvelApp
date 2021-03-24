import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noCharacters'
})
export class NoCharactersPipe implements PipeTransform {

  transform(characters: any): String {
    if(characters.available == 0){
      return "No hay protagonista"
    } else if(characters.available != 0){
      return characters.items[0].name;
    } 
  }

}
