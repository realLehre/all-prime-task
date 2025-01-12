import { Routes } from '@angular/router';

export const part2DesignRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./part-2-design.component').then((c) => c.Part2DesignComponent),
    children: [
      { path: '', redirectTo: 'page-1', pathMatch: 'full' },
      {
        path: 'page-1',
        loadComponent: () =>
          import('./design-page-1/design-page-1.component').then(
            (c) => c.DesignPage1Component,
          ),
      },
      {
        path: 'page-2',
        loadComponent: () =>
          import('./design-page-2/design-page-2.component').then(
            (c) => c.DesignPage2Component,
          ),
      },
      {
        path: 'page-3',
        loadComponent: () =>
          import('./design-page-3/design-page-3.component').then(
            (c) => c.DesignPage3Component,
          ),
      },
    ],
  },
];
