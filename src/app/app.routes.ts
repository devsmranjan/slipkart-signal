import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: '/products',
        pathMatch: "full"
    },
    {
        path: 'products',
        loadComponent: () => import("./product-list/product-list.component").then(c => c.ProductListComponent)
    }
];
