import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RestApiService } from './rest-api.service';
import { DataService } from './data.service';
import { MessageComponent } from './message/message.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { AddressComponent } from './address/address.component';
import { CategoriesComponent } from './categories/categories.component';
import { PostProductComponent } from './post-product/post-product.component';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';
import { MyProductsComponent } from './my-products/my-products.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { MyOrderDetailComponent } from './my-order-detail/my-order-detail.component';


@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, NgbModule.forRoot(), HttpClientModule, NgbModule, CommonModule, LazyLoadImageModule],
  declarations: [AppComponent, HomeComponent, MessageComponent, RegistrationComponent, LoginComponent, ProfileComponent, SettingsComponent, AddressComponent, CategoriesComponent, PostProductComponent, MyProductsComponent, CategoryComponent, ProductComponent, SearchComponent, CartComponent, MyOrdersComponent, MyOrderDetailComponent],
  bootstrap: [AppComponent],
  providers: [RestApiService, DataService, AuthGuardService, 
    {
      provide: LocationStrategy,
      useClass:  HashLocationStrategy
    }]
})
export class AppModule { }
