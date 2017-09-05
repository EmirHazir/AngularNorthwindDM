import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // carttaki itemda hata verdi
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 
import {Routes, RouterModule} from '@angular/router'; //route için ekle

//sonradan ekledik angular2-notifications
import {NotificationsService, SimpleNotificationsModule} from 'angular2-notifications';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';
import { AccountComponent } from './account/account.component';
import { ShippingDetailComponent } from './shipping-detail/shipping-detail.component';
import { CartSummaryComponent } from './cart/cart-summary/cart-summary.component';
import { LoggedComponent } from './account/logged/logged.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CartService } from "./cart/cart.service";
import { ProductFilterPipe } from './product/product-filter.pipe';
import { VatAddedPipe } from './product/vat-added.pipe';

//Route belirlemesi
const appRoutes:Routes=[
  {path:"",redirectTo:"products",pathMatch:"full"},
  {path:"products",component:ProductComponent},
  {path:"products/:seoUrl",component:ProductComponent},
  {path:"my-cart", component:CartComponent},
  {path:"shipping-details", component:ShippingDetailComponent},

]


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    CategoryComponent,
    AccountComponent,
    ShippingDetailComponent,
    CartSummaryComponent,
    LoggedComponent,
    NotFoundComponent,
    ProductFilterPipe,
    VatAddedPipe,
  ],
  //3.part uygulama moduller ve angular modulleri
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    SimpleNotificationsModule.forRoot(),
    RouterModule.forRoot(appRoutes)
    
  ],
 //içeriden eklenen moduller
  exports:[
     
  ],
  //bütün uygulama boyunca bir örnek oluşur ve herkes onu kullanır mesela singleton 
  providers: [
    {provide:"apiUrl",useValue:"http://northwindapi.azurewebsites.net/api"},
    NotificationsService, 
    CartService,
  ],
  //başlangıç componentinin neresi olduğunu belirler
  bootstrap: [AppComponent]
})

//export diger taraf uygulamalarda public olarak tanımladığımız nesnedir
export class AppModule { }
