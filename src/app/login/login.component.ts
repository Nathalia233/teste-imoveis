import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    email: string;
    password: string;

    constructor() {
      this.email = '';
      this.password = '';
    }
  
    login() {
      console.log(`Email: ${this.email}, Senha: ${this.password}`);
      // Aqui você pode implementar a lógica de autenticação
    }
}
