
import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service'


@Component({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {

    //constructor(private _productService: ProductService) is as shortcut for declaring a private 
    //variable and assigning a value to id from constrictor parameter -- It works with public and protected too
    constructor(private _productService: ProductService){
    }

    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'cart';
    errorMessage: string;
    products: IProduct[];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit():void{
        this._productService.getProducts()
        .subscribe(
            products => this.products = products,
            error => this.errorMessage = <any>error
        );
    }

    onRatingClicked(message: string): void{
        this.pageTitle = `Product List ${message}`;
    }
}