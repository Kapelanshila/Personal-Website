import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  color1 = '#4200a2';
  color2 = '#3366ff';

  toggleColors() {
    if (this.color1 === '#4200a2' && this.color2 === '#3366ff') {
      this.color1 = 'rgb(188,0,76)';
      this.color2 = 'rgb(255,51,153)';
    } else {
      this.color1 = '#4200a2';
      this.color2 = '#3366ff';
    }
  }
}
