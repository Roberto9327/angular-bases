import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/form.interfaces';

@Component({
  selector: 'app-dbz-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
@Output()
  public onNewCharacter:EventEmitter<Character> = new EventEmitter();


  public form:Character={
    name:'',
    power:0
  };
  emitForm():void{
    //debugger //Depurar codigo

    //console.log(this.form);

    if ( this.form.name.length === 0 ) return;

    this.onNewCharacter.emit(this.form);


    this.form = { name: '', power: 0 };
  }
}
