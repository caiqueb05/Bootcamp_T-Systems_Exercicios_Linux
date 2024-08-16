import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { ProductService } from './service/product.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule]
})
export class AppComponent {
  productId: number = 0;
  selectedProduct: any;
  products: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }

  getProductById(id: number): void {
    this.productService.getProductById(id).subscribe(data => {
      this.selectedProduct = data;
    });
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(product => product.id !== id);
    });
  }
}