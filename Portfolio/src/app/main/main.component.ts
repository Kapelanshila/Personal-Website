import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  color1 = '#4200a2';
  color2 = '#3366ff';
  hoverColor: string = 'rgba(51, 102, 255, 0.2)';
  buttonColor  = 'rgba(102,0,255)';
  hoverButtonColor: string = 'rgb(71, 0, 177)';
  hovering: boolean = false;
  buttonDisplay: string = "Download CV";
  info = "I am currently a graduate digital consultant in data engineering. I have always been interested in technology and work on digital art in my spare time. My goal is to design efficient IT systems and solutions and implement and create visually appealing and easy-to-use systems.";

  public skills = [
    { name: 'Angular', image: 'assets/angular.png' },
    { name: '.NET', image: 'assets/dotnet.png' },
    { name: 'Ionic', image: 'assets/ionic.png' },
    { name: 'C#', image: 'assets/csharp.png' },
    { name: 'Python', image: 'assets/python.png' },
    { name: 'HTML', image: 'assets/html.png' },
    { name: 'CSS', image: 'assets/css.png' },
    { name: 'Azure', image: 'assets/azure.png' }
  ];

  toggleColors() {
    if (this.color1 === '#4200a2' && this.color2 === '#3366ff') {
      this.color1 = 'rgb(188,0,76)';
      this.color2 = 'rgb(255,51,153)';
      this.hoverColor = 'rgba(255, 51, 153, 0.2)';
      this.buttonColor = 'rgba(255,0,102)';
      this.hoverButtonColor = 'rgba(208, 0, 84)'
      this.info = "I have always been passionate about art, aspiring to become an animator since a very young age. Although my career began in IT, drawing remains a hobby of mine, and I am planning to start animation projects soon.";

    } else {
      this.color1 = '#4200a2';
      this.color2 = '#3366ff';
      this.hoverColor = 'rgba(51, 102, 255, 0.2)';
      this.buttonColor = 'rgba(102,0,255)';
      this.hoverButtonColor = 'rgb(71, 0, 177)';
      this.info = "I am currently a graduate digital consultant in data engineering. I have always been interested in technology and work on digital art in my spare time. My goal is to design efficient IT systems and solutions and implement and create visually appealing and easy-to-use systems.";
    }
  }
}
