import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Part1AngularComponent } from './part-1-angular/part-1-angular.component';

export const routes: Routes = [
  { path: '', redirectTo: 'angular', pathMatch: 'full' },
  {
    path: 'angular',
    loadChildren: () =>
      import('./part-1-angular/part-1-angular.routes').then(
        (r) => r.part1AngularRoutes,
      ),
  },
];
