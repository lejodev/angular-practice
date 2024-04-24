import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private productsService: ProductsService) { }
  products!: Product[]
  highestRated!: Product


  @Input() productsBind!: Product[]

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['productsBind']) {
      console.log("DATA INCOMING:", this.productsBind);
      this.products = this.productsBind
    } else {
      console.log("BAD")
    }
  }

  ngOnInit(): void {
    // this.productsService.getCars().subscribe(data => {
    //   this.products = data
    //   console.log(this.products)
    //   this.highestRated = this.products.reduce((prevProduct: Product, currentProduct: Product) => {
    //     return prevProduct.rating.rate > currentProduct.rating.rate ? prevProduct : currentProduct
    //   })
    //   console.log("Highest rated produt", this.highestRated)
    // })
    console.log("DATA INCOMING>>>>>>>>>>>>>>>>>:", this.productsBind)
  }



  handleClick(buttonValue: string) {
  }

}
