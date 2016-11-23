import { PipeTransform, Pipe } from '@angular/core';

import { IProduct } from './product';

//Every custom pipe must have Pipe decorator
@Pipe({
    name: 'productFilter'
})
//Custom pipe filters IProduct array by product name. 
//Filter value is passed with filterBy property
export class ProductFilterPipe implements PipeTransform {
    //Custom pipes must implement transform method
    transform(value: IProduct[], filterBy: string): IProduct[]{        
        filterBy = filterBy ? filterBy.toLowerCase() : null;
        return filterBy ? value.filter((product: IProduct) => 
            product.productName.toLowerCase().indexOf(filterBy) !== -1) : value;
    }
}