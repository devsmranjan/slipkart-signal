import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: '/products',
        pathMatch: "full"
    },
    {
        path: 'products',
        loadComponent: () => import("./product/product.component").then(c => c.ProductComponent)
    }
];
