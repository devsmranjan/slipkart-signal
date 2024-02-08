import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'slipkart-product-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-header.component.html',
  styleUrl: './product-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductHeaderComponent {}
