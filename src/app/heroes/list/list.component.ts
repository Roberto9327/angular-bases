import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroName:string[] =['Spiderman','Iron Man','Hulk','She Hulk','Thor'];
  public deleteHero?: string;

  removeLasthero():void {
    this.deleteHero =  this.heroName.pop();
  }


}
