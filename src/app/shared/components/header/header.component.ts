import { Component, Input } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  [x: string]: any;

  @Input() title!: string;

  constructor(private authService: AuthService, private router: Router){}

  signOut(){
    this.authService.logout().then(() =>{
      this.router.navigateByUrl('login');
    })
    this.authService.logout();
  }
  
}
