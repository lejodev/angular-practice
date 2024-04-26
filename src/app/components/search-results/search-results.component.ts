import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products/products.service';
import { Product } from 'src/app/models/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  private routeSub: any;

  constructor(private route: ActivatedRoute, private router: Router, private productsService: ProductsService) { }

  endPointProduct: any = null
  productsList: Product[] = []


  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.endPointProduct = params["searchInput"]
      this.fetchSearchResults();
    })
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe()
  }

  private fetchSearchResults(): void {
    this.productsService.getProductByTitle(this.endPointProduct).subscribe(data => {
      this.productsList = data;
      if (data == undefined || data.length == 0) {
        this.router.navigate(["**"])
      }
    });
  }

}
