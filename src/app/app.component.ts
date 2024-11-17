import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
      this.primengConfig.ripple = true;
  }




  title = 'nicolas aLfredo Meola PINEDA';
}
