import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/products.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent implements OnInit {

  constructor(private productsService: ProductsService) { }
  productsList!: Product[]

  ngOnInit(): void {
    this.productsService.getProductsByCategory("men's clothing").subscribe(data => {
      this.productsList = data
    })
  }

}
