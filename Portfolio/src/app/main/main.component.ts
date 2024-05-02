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

  experiences = [
    { year: '2024', position: 'Graduate Consultant', company: 'Moyo Business Advisory', description: 'I am currently a graduate consultant at Moyo, specializing in Data Engineering. As an IT consultant, I work closely with clients to identify and solve complex IT problems, develop and implement technology solutions that align with business objectives, and ensure seamless integration of new systems into existing infrastructures.' },
    { year: '2021', position: 'Junior IT Specialist', company: 'Dataproof Communications (Pty) Ltd.', description: 'As a Junior IT Specialist at Dataproof, I was responsible for capturing metadata from developed spreadsheets into the Dataproof proprietary records management system, ensuring compliance with National Archives of South Africa (NARS) approved file plans. My role also included auditing this information for accuracy, analyzing the system’s code and structure to recommend enhancements, and conducting business analysis to determine how technology could optimize operations.' },
  ];

  hoverColor: string = 'rgba(51, 102, 255, 0.2)';

  toggleColors() {
    if (this.color1 === '#4200a2' && this.color2 === '#3366ff') {
      this.color1 = 'rgb(188,0,76)';
      this.color2 = 'rgb(255,51,153)';
      this.hoverColor = 'rgba(255, 51, 153, 0.2)';
    } else {
      this.color1 = '#4200a2';
      this.color2 = '#3366ff';
      this.hoverColor = 'rgba(51, 102, 255, 0.2)';
    }
  }
}
