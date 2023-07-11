import { Injectable } from '@angular/core'
import { v4 as uuid } from 'uuid'
import { Character } from '../interfaces/form.interfaces';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters: Character[]= [{
    id:uuid(),
    name: 'krillin',
    power: 1000
   },{
    id:uuid(),
    name: 'Goku',
    power: 9500
   },{
    id:uuid(),
    name: 'Vegeta',
    power: 7500
   }];

   addNewCharacter( form:Character ):void{
    const newForm: Character = { id:uuid(), ...form };


    this.characters.push(newForm);

   }
   //onDeleteCharacter(index:number): void{
   deleteCharacter(id:string){
  this.characters = this.characters.filter(character => character.id !== id);
   }

  constructor(){

  }

}

