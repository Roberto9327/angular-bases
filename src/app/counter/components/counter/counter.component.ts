import { Component } from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <p>
      Bienvenidos a angular
    </p>
    <button (click)="increaBy(+1)">+1</button>
    <button (click)="resetBy()">Reset</button>
    <button (click)="increaBy(-1)">-1</button>

  `,
})
export class CounterComponent{
  public counter:number =10;

  increaBy( value: number ):void{
    this.counter +=value;
  }
  resetBy():void{
    this.counter = 10;
  }
}

