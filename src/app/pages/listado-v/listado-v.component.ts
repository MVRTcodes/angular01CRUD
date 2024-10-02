import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { SectionVComponent } from "../../shared/components/section-v/section-v.component";
import { IVacanca } from '../../../model/interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-v',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, HeaderComponent, SectionVComponent],
  templateUrl: './listado-v.component.html',
  styleUrl: './listado-v.component.scss'
})
export class ListadoVComponent {

  ListaVacances: IVacanca[] = [
    {
      id: 0,
      nom: 'Hotel 4 estrellas Peñiscola',
      preu: 300,
      actiu: true,
      pais: 'España',
      descripcio: 'Sitio de vacaciones',
    },
    {
      id: 1,
      nom: 'Hotel 3 estrellas Granada',
      preu: 250,
      actiu: true,
      pais: 'España',
      descripcio: 'Sitio de vacaciones',
    },
  ];

  constructor(private router: Router){}

  goToHome(){
    this.router.navigateByUrl('home');
  }

}
