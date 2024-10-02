import { Component, Input } from '@angular/core';
import { IVacanca } from '../../../../model/interfaces';

@Component({
  selector: 'app-section-v',
  standalone: true,
  imports: [],
  templateUrl: './section-v.component.html',
  styleUrl: './section-v.component.scss'
})
export class SectionVComponent {
  @Input() iVacanca!:IVacanca;
}
