import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

    public nameLower: string = 'nicolas';
    public nameUpper: string = 'NICOLAS';
    public fullNaeme: string = 'niColAS MeOLa';


    public customeDate: Date = new Date();

}
