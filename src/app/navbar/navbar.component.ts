import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() onArtClicked = new EventEmitter<void>();
  @Output() onHomeClicked = new EventEmitter<void>();


  navLinksVisible = false;

  toggleNavLinks() {
    this.navLinksVisible = !this.navLinksVisible;
  }

  emitArtClick() {
    this.onArtClicked.emit();
  }

  emitHomeClicked() {
    this.onHomeClicked.emit();
  }
}
