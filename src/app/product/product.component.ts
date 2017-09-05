import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { ActivatedRoute } from "@angular/router"; //Categoriler için routtan service çek


import { Product } from './product';
import { ProductService } from './product.service';
import { CartService } from "../cart/cart.service";
import { Pager } from "../app-pager";



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})

export class ProductComponent implements OnInit {

  products: Product[];
  addedProduct: string;


  constructor(private productService: ProductService,
    private notificationsService: NotificationsService,
    private cartService: CartService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(p => {
      this.getProducts(p["seoUrl"]);
    });
  }

  getProducts(seoCategory: string) {
    this.productService.getProducts(seoCategory)
      .subscribe(p => {
        this.products = p;
        this.pager = this.getPager(p.length);
      });
  }

  addToCart(product: Product) {
    this.addedProduct = product.productName;
    this.cartService.addToCart(product);
    this.notificationsService.success("Successfull", product.productName + " added to cart");
  }

  pager: Pager = new Pager();
  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 5): Pager {
    let totalPages = Math.ceil(totalItems / pageSize);//küsüratı üste tamamla
    let pages: Array<number> = [] //sayfa sayısı kadar array boş
    for (let i = 1; i < totalPages; i++) { //sayfaların içinde gez arraya bas
      pages.push(i);
    }

    var pager = new Pager();
    pager.currentPage = currentPage;
    pager.pageList = pages;
    pager.pageSize = pageSize;

    return pager;
  }

  setPage(page:number){
    this.pager.currentPage = page;
  }

}
