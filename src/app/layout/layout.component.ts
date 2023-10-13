import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  standalone: true,
  imports: [NgIf, RouterOutlet, HeaderComponent, FooterComponent],
})
export class LayoutComponent {

}
