import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductStore } from '../product.store';

@Component({
  selector: 'slipkart-product-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-header.component.html',
  styleUrl: './product-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductHeaderComponent {
  productListStore = inject(ProductStore)

  refreshProducts() {
    this.productListStore.loadProducts()
  }
}
