import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.css'
})
export class HeroListComponent {

  public heroNames: string[] = ['Spiderman', 'Superman', 'Batman', 'Wolverine'];
  public deletedHero?: string = '';

  public removeLastHero(): void{
    this.deletedHero = this.heroNames.pop();
  }
  
}
