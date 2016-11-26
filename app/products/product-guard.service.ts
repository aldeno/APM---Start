import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export class ProductDetailGuard implements CanActivate {
    constructor(private _router: Router){

    }

    canActivate(route: ActivatedRouteSnapshot): boolean{
        //Get second part of url, in our case it is id
        let id = +route.url[1].path;
        //If id is not a number or it is less than 1 
        //display error and navigate to product list
        if(isNaN(id) || id < 1){
            alert('Invalid Product Id');
            this._router.navigate(['/products']);
            return false;
        }
        return true;
    }
}