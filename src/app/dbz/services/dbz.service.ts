import { Injectable } from '@angular/core'
import { Character } from '../interfaces/form.interfaces';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters: Character[]= [{
    name: 'krillin',
    power: 1000
   },{
    name: 'Goku',
    power: 9500
   },{
    name: 'Vegeta',
    power: 7500
   }];

   onNewCharacter( form:Character ):void{
   this.characters.push(form);

   }

   onDeleteCharacter(index:number): void{
  this.characters.splice(index,1);
   }

  constructor(){

  }

}

