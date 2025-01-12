import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-part-2-design',
  imports: [NavBarComponent, RouterOutlet],
  templateUrl: './part-2-design.component.html',
  styleUrl: './part-2-design.component.scss',
})
export class Part2DesignComponent {}
