import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-part-1-angular',
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './part-1-angular.component.html',
  styleUrl: './part-1-angular.component.scss',
})
export class Part1AngularComponent {}
