import { Component } from '@angular/core';

import { ProductService } from './products/product.service';

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <div class='navbar-header'>
                    <a class='navbar-brand'>{{pageTitle}}</a>
                </div>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/products']">Product List</a></li>
                </ul>
            </div>
        </nav>
    </div>
    <div class='container'>
        <router-outlet></router-outlet>
    </div>
    `,
    //Register service to the app Component
    //All child components will have access to the service
    providers: [ProductService]
})

export class AppComponent{
    pageTitle: string = "Acm Product Management";
}