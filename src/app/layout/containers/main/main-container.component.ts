import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent, HeaderComponent } from '@arvis/layout/components';

@Component({
  selector: 'app-main',
  templateUrl: './main-container.component.html',
  standalone: true,
  imports: [NgIf, RouterOutlet, HeaderComponent, FooterComponent],
})
export class MainContainerComponent {

}
