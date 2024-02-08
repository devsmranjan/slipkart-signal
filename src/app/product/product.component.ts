import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductHeaderComponent } from './product-header/product-header.component';
import { ProductService } from './product.service';
import { ProductStore } from './product.store';

@Component({
  selector: 'slipkart-product',
  standalone: true,
  imports: [CommonModule, ProductHeaderComponent, ProductListComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  providers: [ProductService, ProductStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {}
