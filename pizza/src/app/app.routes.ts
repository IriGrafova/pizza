import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/pizza', pathMatch: 'full' },
  {
    path: 'pizza',
    loadComponent: () =>
      import('./pages/main-page/main-page.component').then(
        (c) => c.MainPageComponent,
      ),
  },
  { path: '**', redirectTo: '/pizza' },
];
