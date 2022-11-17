import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-loyal-v2';
  idbutton = 'miboton';
  idbuttonLogin = 'mibotonLogin';
  mostrarTexto = true;
  showLogin = true;
  username='Jesús';
  languages = [
    {name:'Java',},
    {name:'JSP',},
    {name:'Angular',},
  ];

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
  alert(event);
}

}
