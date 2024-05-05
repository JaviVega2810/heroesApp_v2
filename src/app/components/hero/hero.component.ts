import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Spiderman';
  public age: number = 38;
  public power: string = "Powerful Claws";
  public country: string = "USA";

  public changeH2(): void{
    this.age = 54;

    document.querySelectorAll('h2').forEach(element => {
      element.innerHTML = '<h2>Desde Angular</h2>'
    });
  }

}
