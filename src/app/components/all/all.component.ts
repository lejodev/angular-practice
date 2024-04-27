import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/products.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  productsList!: Product[]

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(data => {
      this.productsList = data
    })

  }

}
