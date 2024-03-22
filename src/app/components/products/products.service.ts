import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Product } from "src/app/models/product.model";
import { Observable } from "rxjs";


@Injectable({
    providedIn: "root"
})

export class CarsService {

    private api = "https://fakestoreapi.com/products";

    constructor(private http: HttpClient) { }

    getCars(): Observable<Product[]> {

        const headers = new HttpHeaders({
            "X-Api-Key": "ojOKEOAWiCbl34KLOVvF1q4CaZ8AP7XzrocEyrPj"
        })

        return this.http.get<Product[]>(this.api)
    }


}