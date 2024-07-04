import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'iron man';
  public age: number = 25;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void{
    this.name = 'Wolverine';
  }

  changeAge(): void{
    this.age = 35;
  }

  resetForm(): void {
    this.name = 'iron man';
    this.age = 25;
    // document.querySelectorAll('h1')!.forEach( e => {
    //   e.innerHTML ='<h1>Desde Angular</h1>';
    // });
  }
}
