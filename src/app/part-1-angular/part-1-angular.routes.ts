import { Route, Routes } from '@angular/router';
import { GridEditingComponent } from './grid-editing/grid-editing.component';

export const part1AngularRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./part-1-angular.component').then((c) => c.Part1AngularComponent),
    children: [
      { path: '', redirectTo: 'grid-editing', pathMatch: 'full' },
      {
        path: 'grid-editing',
        loadComponent: () =>
          import('./grid-editing/grid-editing.component').then(
            (c) => c.GridEditingComponent,
          ),
      },
      {
        path: 'grid-filtering',
        loadComponent: () =>
          import('./grid-filtering/grid-filtering.component').then(
            (c) => c.GridFilteringComponent,
          ),
      },
      {
        path: 'grid-paging',
        loadComponent: () =>
          import('./grid-paging/grid-paging.component').then(
            (c) => c.GridPagingComponent,
          ),
      },
      {
        path: 'grid-sorting',
        loadComponent: () =>
          import('./grid-sorting/grid-sorting.component').then(
            (c) => c.GridSortingComponent,
          ),
      },
    ],
  },
];
