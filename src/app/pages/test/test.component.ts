import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

  t:string = 'test';

  testMe(){
    console.log('1');
    console.log('2');
    console.log('3');
  }
}
