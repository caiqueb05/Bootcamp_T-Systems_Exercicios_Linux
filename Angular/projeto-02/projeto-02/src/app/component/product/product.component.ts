import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: ''
  };
}