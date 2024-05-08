import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Product } from "src/app/models/product.model";
import { Observable, map } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class ProductsService {

    private api = "https://fakestoreapi.com/products";

    constructor(private http: HttpClient) { }

    getAllProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.api)
    }


    getAllProductsNames(): Observable<string[]> {
        return this.getAllProducts().pipe(map(products => products.map(product => product.title)))
    }

    getProductsByCategory(query: string): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.api}/category/${query}`)
    }

    getProductByTitle(title: string): Observable<Product[]> {
        return this.getAllProducts().pipe(map(products => products.filter((product) => product.title.toLocaleLowerCase().match(title.toLocaleLowerCase()))))
        // return this.http.get<Product[]>(`${this.api}/title/${title}`)

    }

    getProductById(id: number): Observable<Product> {
        return this.http.get<Product>(`${this.api}/${id}`)
    }

    // getHighestRated():Observable<Product>{
    //     this.getCars.
    // }


}