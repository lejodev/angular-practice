import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CarsService } from './products.service';

@Component({
  selector: 'app-cars',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class CarsComponent implements OnInit {

  constructor(private carsService: CarsService) { }
  products!: Product[]
  highestRated!: Product

  ngOnInit(): void {
    this.carsService.getCars().subscribe(data => {
      this.products = data
      console.log(this.products)
      this.highestRated = this.products.reduce((prevProduct: Product, currentProduct: Product) => {
        return prevProduct.rating.rate > currentProduct.rating.rate ? prevProduct : currentProduct
      })
      console.log("Highest rated produt", this.highestRated)
    })
  }

  handleClick(buttonValue: string) {
  }

}
