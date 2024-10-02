import { Component, Input } from '@angular/core';
import { IVacanca } from '../../../../model/interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-v',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-v.component.html',
  styleUrl: './section-v.component.scss'
})
export class SectionVComponent {
  @Input() iVacanca!:IVacanca;
}
