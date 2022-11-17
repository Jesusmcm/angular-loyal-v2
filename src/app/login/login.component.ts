import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  @Input()
  user?:string;

  @Output()
  informarAlPadre = new EventEmitter<string>();

  username?:string;

  constructor(loginService: LoginService) {
    alert(loginService.getName());
  }

  ngOnInit(): void {
    this.username = this.user;
  }

  ngOnDestroy(): void {
  }

  emitirMensaje() {
    this.informarAlPadre.emit('Mi nombre es: ' + this.username);
  }

}
