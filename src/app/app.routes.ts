import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'angular', pathMatch: 'full' },
  {
    path: 'angular',
    loadChildren: () =>
      import('./part-1-angular/part-1-angular.routes').then(
        (r) => r.part1AngularRoutes,
      ),
  },
  {
    path: 'design',
    loadChildren: () =>
      import('./part-2-design/part-2-design.routes').then(
        (r) => r.part2DesignRoutes,
      ),
  },
];
