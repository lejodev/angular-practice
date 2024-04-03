import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Product } from "src/app/models/product.model";
import { Observable } from "rxjs";


@Injectable({
    providedIn: "root"
})

export class ProductsService {

    private api = "https://fakestoreapi.com/products";

    constructor(private http: HttpClient) { }

    getAllProducts(): Observable<Product[]> {

        return this.http.get<Product[]>(this.api)
    }

    getProductsByCategory(query: string): Observable<Product[]> {

        return this.http.get<Product[]>(`${this.api}/category/${query}`)
    }

    // getHighestRated():Observable<Product>{
    //     this.getCars.
    // }


}