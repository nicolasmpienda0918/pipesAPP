import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  public menuItems: MenuItem[] = [];


  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
          label: 'Textos y Fecha',
          icon:'pi pi-alingn-left',
          routerLink: '/'
        },
        {
          label: 'Numeros',
          icon:'pi pi-dollar',
          routerLink: 'numbers'
        },
        {
          label: 'No Comunes',
          icon:'pi pi-globe',
          routerLink: 'uncommon'
        },
      ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Custom Pipes',
                  icon: 'pi pi-cog',
                   routerLink: 'custom'
          }
        ]
      }



    ];

}

}
