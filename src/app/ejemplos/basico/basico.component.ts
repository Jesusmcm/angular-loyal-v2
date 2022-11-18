import { Component, OnInit } from '@angular/core';

export interface Langauage {
  name:string,
  id:number
}

@Component({
  selector: 'app-basico',
  templateUrl: './basico.component.html',
  styleUrls: ['./basico.component.css']
})

export class BasicoComponent implements OnInit {
  title = 'Ejemplos básico';
  idbutton = 'miboton';
  idbuttonLogin = 'mibotonLogin';
  mostrarTexto = true;
  showLogin = true;
  username='Jesús';
  languages:Langauage[] = [
    {id:1,name:'Java',},
    {id:2,name:'JSP',},
    {id:3,name:'Angular',},
  ];

  ngOnInit(): void {
  }


getTitle(): string {
  return this.title;
}

cambiar(): void {
  //debugger;
  this.mostrarTexto = ! this.mostrarTexto;
}

mostrarLogin():void{
  this.showLogin = true;
}

ocultarLogin():void{
  this.showLogin = false;
}

recibirMensaje(event:any):void{
  console.log(event);
}
}
