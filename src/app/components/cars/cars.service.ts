import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Car } from "src/app/models/car.model";
import { Observable } from "rxjs";


@Injectable({
    providedIn: "root"
})

export class CarsService {

    private api = "https://api.api-ninjas.com/v1/cars?limit=2&model=camaro";

    constructor(private http: HttpClient) { }

    getCars(): Observable<Car[]> {

        const headers = new HttpHeaders({
            "X-Api-Key": "ojOKEOAWiCbl34KLOVvF1q4CaZ8AP7XzrocEyrPj"
        })

        return this.http.get<Car[]>(this.api, { headers })
    }


}