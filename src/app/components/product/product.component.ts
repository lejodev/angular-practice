import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products/products.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  routeSub: any
  prodcutIdParam: any = null
  product!: Product

  constructor(private route: ActivatedRoute, private prodcutsService: ProductsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params => {
      const productId = params["id"]
      this.prodcutsService.getProductById(productId).subscribe(data => {
        console.log("product", data)
        this.product = data
      })
      // console.log(this.prodcutIdParam)
    }))
  }

}
