import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {


    //i18n Select
 public name: string = 'Nicolas';
 public gender: 'male'| 'female' = 'male'
 public invitationMap= {
    male: 'invitarlo', 'female': 'invitarla'
 }


 changeClient(): void {
    this.name = 'Melisa',
    this.gender = 'female';

 }


  //i18n Plural

  public clientes : string[] = ['Marica', 'Pedro', 'Camila','Fernando', 'Melisa','Yesica', 'Karina', 'Nicolas']

  public clientsMap = {
    '=0': 'No tenemos ningun cliente esperando.',
    '=1': 'Tenemos un cliente esperando.',
    '=2': 'Tenemos 2 clientes esperando.',
    'other': 'Tenemos # clientes esperando.'
  }

  delectCliente(): void {
 this.clientes.shift();
  }


  // KeyValue Pipe

  public person = {
    name: 'Nicolas',
    age: 32,
    address: 'Medellin - Colombia'
  }
  

    // Async Pipe
    public myObservableTimer = interval( 2000)



}    
