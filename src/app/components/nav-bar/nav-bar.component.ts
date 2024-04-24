import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../products/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private productsService: ProductsService, private router: Router) { }


  products!: String[]
  title!: string

  searchGroup = new FormGroup({
    search: new FormControl(null, Validators.required)
  })

  ngOnInit(): void {
    this.productsService.getAllProductsNames().subscribe(data => { this.products = data })
  }

  inputSearch() {
    // console.log("values sent")
    // console.log(this.searchGroup.value.search)
    const title = this.searchGroup.value.search ?? "" // This syntax ?? "" means if null or undefined, use the right hand value, on this case an empty string
    this.productsService.getProductByTitle(title).subscribe(data => {
      if (data.length > 0) {
        this.router.navigate([`/${title}`])
      } else {

      }
    })
  }

}
