import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  productsList!: Product[]

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProductsByCategory("electronics").subscribe(data => {
      console.log(data)
      this.productsList = data
    })
  }

}
