import { Component } from '@angular/core';

interface User {
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SignupComponent {
  user: User = {
    name: '',
    email: '',
    password: ''
  };

  signup() {
    console.log('Novo usuário:', this.user);
  }
}