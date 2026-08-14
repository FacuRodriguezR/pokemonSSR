import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'about',
    loadComponent: () => import('./pages/about/about-pages')
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing/pricing-pages')
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact-pages')
  },
  {
    path: '**',
    redirectTo: () => {
      //const authService = inject(AuthService)

      return 'about'
    }
  }
];
