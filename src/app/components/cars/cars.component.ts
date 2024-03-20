import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car.model';
import { CarsService } from './cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor(private carsService: CarsService) { }
  cars!: Car[]

  ngOnInit(): void {
    this.carsService.getCars().subscribe(data => { console.log(data); this.cars = data })

  }

}
