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

  ngOnInit(): void {
    this.carsService.getCars().subscribe(data => { console.log(data); this.products = data })
  }

  handleClick(buttonValue: string) {
  }

}
