
import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';

import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit{
    pageTitle: string = "Product Detail";
    product: IProduct = {productName: 'TEST', description: '',
     imageUrl: '', price: 1, productCode: '', productId: 22, releaseDate: '', starRating: 3};

    constructor(private _route: ActivatedRoute, 
                private _router: Router,
                private _productService: ProductService){
        //read params from the url
        //console.log(this._route.snapshot.params['id']);
    }

    ngOnInit():void {
        // '+' is shortcut in javascript to convert string to numeric
        let id = +this._route.snapshot.params['id'];
        this.pageTitle+= `: ${id}`;
        this._productService.getProductsById(id)
            .subscribe(prod => {
                this.product = prod;
                console.log('ngOnInit: ' + JSON.stringify(prod));
                });
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }
}