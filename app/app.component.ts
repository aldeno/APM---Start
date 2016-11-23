import { Component } from '@angular/core';

import { ProductService } from './products/product.service';

@Component({
    selector: 'pm-app',
    template: `
    <div><h1>{{pageTitle}}</h1>
    <pm-products></pm-products>
    </div>
    `,
    //Register service to the app Component
    //All child components will have access to the service
    providers: [ProductService]
})

export class AppComponent{
    pageTitle: string = "Acm Product Management";
}