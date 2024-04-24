import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products/products.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  endPointProduct: any = null
  productsList!: Product[]

  ngOnInit(): void {
    this.endPointProduct = this.route.snapshot.paramMap.get("searchInput")

    console.log(this.endPointProduct)

    this.productsService.getProductByTitle(this.endPointProduct).subscribe(data => {
      this.productsList = data
      // console.log("DATA", data)
    })
  }

}
