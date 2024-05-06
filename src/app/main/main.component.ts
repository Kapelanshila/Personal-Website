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
  buttonColor = 'rgba(102,0,255)';
  hoverButtonColor: string = 'rgb(71, 0, 177)';
  hovering: boolean = false;
  buttonDisplay: string = "Download CV";
  info = "I am currently a graduate digital consultant in data engineering. I have always been interested in technology and work on digital art in my spare time. My goal is to design efficient IT systems and solutions and implement and create visually appealing and easy-to-use systems.";
  infoVisible: boolean = true;
  profileImage: string = "assets/profile-code.png";
  home: boolean = true;
  showModal = false;
  currentImage: string | null = null;


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

  artImages: string[] = [
    'Angles.png',
    'Betrayal.png',
    'Road Trip.png',
    'Reo.jpg',
  ];


  toggleHome() {
    this.color1 = '#4200a2';
    this.color2 = '#3366ff';
    this.hoverColor = 'rgba(51, 102, 255, 0.2)';
    this.buttonColor = 'rgba(102,0,255)';
    this.hoverButtonColor = 'rgb(71, 0, 177)';
    this.info = "I am currently a graduate digital consultant in data engineering. I have always been interested in technology and work on digital art in my spare time. My goal is to design efficient IT systems and solutions and implement and create visually appealing and easy-to-use systems.";
    this.buttonDisplay = "Download CV";
    this.profileImage = "assets/profile-code.png";
    this.infoVisible = false;
    this.toggleInfoVisibility();
    this.home = true;
  }

  toggleArt() {
    this.color1 = 'rgb(188,0,76)';
    this.color2 = 'rgb(255,51,153)';
    this.hoverColor = 'rgba(255, 51, 153, 0.2)';
    this.buttonColor = 'rgba(255,0,102)';
    this.hoverButtonColor = 'rgba(208, 0, 84)'
    this.info = "I have always been passionate about art, aspiring to become an animator since a very young age. Although my career began in IT, drawing remains a hobby of mine, and I am planning to start animation projects soon.";
    this.buttonDisplay = "ArtStation";
    this.profileImage = "assets/profile-art.png";
    this.infoVisible = false;
    this.toggleInfoVisibility();
    this.home = false;
  }


  toggleInfoVisibility() {
    setTimeout(() => {
      this.infoVisible = !this.infoVisible;
    }, 300);
  }

  downloadFile(): void {
    const link = document.createElement('a');
    if (this.home === true) {
      link.href = 'assets/Cheyo Chomba\'s CV.pdf';
      link.download = 'Cheyo Chomba\'s CV.pdf';
    } else {
      link.href = 'https://www.artstation.com/Kapelanshila';
      link.target = '_blank';
    }
    link.click();
  }

  getImagePath(image: string): string {
    return `assets/art/${image}`;
  }

  openModal(image: string): void {
    this.currentImage = image;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.currentImage = null;
  }
}

