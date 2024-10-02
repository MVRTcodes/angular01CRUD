import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-v',
  standalone: true,
  imports: [RouterLink, RouterOutlet, HeaderComponent, ReactiveFormsModule],
  templateUrl: './formulario-v.component.html',
  styleUrl: './formulario-v.component.scss'
})
export class FormularioVComponent {
  applyForm = new FormGroup({
    nombreV: new FormControl(''),
    precioV: new FormControl(''),
    activoV: new FormControl(''),
    paisV: new FormControl(''),
    descV: new FormControl(''),
  })

  submitApplication() {
    console.log("form");
  }
}
