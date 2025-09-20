import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./shared/components/navbar/navbar";
import { LoginForm } from './pages/auth/login-form/login-form';
import { LoginTemplate } from './pages/auth/login-template/login-template';

@Component({
  selector: 'app-root',
  imports: [LoginForm, LoginTemplate],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('sistem-bank');
}
