import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  name= 'login service';
  constructor() { }

  getName():string {
    return this.name;
  }
}
