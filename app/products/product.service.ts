
import { Injectable } from '@angular/core';

import { IProduct } from './product';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/Rx'
import 'rxjs/add/operator/catch';

//Injectable decorator is required only if service depends on other services
//But it is recomanded to use it on all services by convention
@Injectable()
export class ProductService {
    private _productUrl = 'api/products/products.json';

    constructor(private _http : Http){ }

    getProducts(): Observable<IProduct[]>{
        return this._http.get(this._productUrl)
        .map((response: Response) => <IProduct[]>response.json())
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    getProductsById(id: number): Observable<IProduct>{
        console.log('getProductsById');
        return this._http.get(this._productUrl)
        .flatMap((response) => <IProduct[]>response.json())
        .first(x=>x.productId == id);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}