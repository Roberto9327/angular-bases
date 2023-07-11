import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/form.interfaces';
import { DbzService } from "../services/dbz.service";


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent  {
constructor( private dbzService: DbzService ){
}

get characters(): Character[]{
  return [...this.dbzService.characters];
}
onDeleteCharacter( id: string ):void{

  this.dbzService.deleteCharacter(id)

}
onNewCharacter( form:Character ):void{
  this.dbzService.addNewCharacter( form )
}
}
