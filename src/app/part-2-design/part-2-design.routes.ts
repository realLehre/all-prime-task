import { Routes } from '@angular/router';

export const part2DesignRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./part-2-design.component').then((c) => c.Part2DesignComponent),
    children: [],
  },
];
