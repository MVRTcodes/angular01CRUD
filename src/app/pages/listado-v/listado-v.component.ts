import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { SectionVComponent } from "../../shared/components/section-v/section-v.component";
import { IVacanca } from '../../../model/interfaces';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { VacancesService } from '../../services/vacances.service';

@Component({
  selector: 'app-listado-v',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, ReactiveFormsModule, HeaderComponent, SectionVComponent],
  templateUrl: './listado-v.component.html',
  styleUrl: './listado-v.component.scss'
})
export class ListadoVComponent {

  // ListaVacances: IVacanca[] = [
  //   {
  //     id: 0,
  //     nom: 'Hotel 4 estrellas Peñiscola',
  //     preu: 300,
  //     actiu: true,
  //     pais: 'España',
  //     descripcio: 'Sitio de vacaciones',
  //   },
  //   {
  //     id: 1,
  //     nom: 'Hotel 3 estrellas Granada',
  //     preu: 250,
  //     actiu: true,
  //     pais: 'España',
  //     descripcio: 'Sitio de vacaciones',
  //   },
  // ];
  ListaVacances!: IVacanca[];

  vacanca!: IVacanca;

  

  applyForm = new FormGroup({
    nombreV: new FormControl('', [Validators.required]),
    precioV: new FormControl('', [Validators.required]),
    activoV: new FormControl(''),
    paisV: new FormControl(''),
    descV: new FormControl(''),
  })

  constructor(private router: Router, private vacances: VacancesService){
    this.ListaVacances = vacances.getVacances();
    // this.ListaVacances = vacances.getVacances();
    // console.log(this.ListaVacances);
  }

  // goToHome(){
  //   this.router.navigateByUrl('home');
  // }

  submitApplication() {

    if(this.applyForm.valid){

      const ultimoId = this.ListaVacances.at(-1)?.id;
      
      this.vacanca = {
        //id: ultimoId != undefined ? ultimoId ?? 0 + 1 : 0,
        nom: this.applyForm.value.nombreV ?? '',
        preu: Number(this.applyForm.value.precioV ?? ''),
        actiu: this.applyForm.value.activoV === 'y'? true: false,
        pais: this.applyForm.value.paisV ?? '',
        descripcio: this.applyForm.value.descV ?? ''
      }
      console.log(this.ListaVacances);
      this.ListaVacances.push(this.vacanca);
      this.vacances.updateVacanca(this.ListaVacances);
      console.log(this.ListaVacances);
    }else{
      alert("form invalido");
    }

  }

}
