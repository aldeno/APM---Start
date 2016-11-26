import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent }  from './app.component';

import { ProductListComponent } from './products/product-list.component';

import { StarComponent } from './shared/star.component';

import { ProductFilterPipe } from './products/product-filter.pipe';

import { HttpModule } from '@angular/http';

import { WelcomeComponent } from './home/welcome.component';

import { ProductDetailComponent } from './products/product-detail.component';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
        { path: 'products', component: ProductListComponent },
        { path: 'welcome', component: WelcomeComponent },
        { path: 'product/:id', component: ProductDetailComponent },
        { path: '', redirectTo: 'welcome', pathMatch: 'full'},
        { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
      ])
    ],
  declarations: [ 
    AppComponent,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent,
    WelcomeComponent,
    ProductDetailComponent
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
