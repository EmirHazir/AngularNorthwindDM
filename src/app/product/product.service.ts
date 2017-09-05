import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http'; //Api için
import { Observable } from 'rxjs/Observable'; //Api için ReactJs Paketleri
import 'rxjs/add/operator/map'; //gelen response datayı maplemek için kullanılır.
import 'rxjs/add/operator/do'; //data geldiğinde yapılması isteneni yapar
import 'rxjs/add/operator/catch'; //data gelirken çıkan hatada yapılmasını istenen şeyi yazarsın

import {Product} from './product';

@Injectable()
export class ProductService {

  constructor(private http : Http, @Inject('apiUrl') private apiUrl) { }

  getProducts(seoUrl:string):Observable<Product[]>{
    if(seoUrl){
      return this.http.get(this.apiUrl+'/products/'+seoUrl)
    .map(response => response.json())
    }else{
      return this.http.get(this.apiUrl+'/products')
    .map(response => response.json())
    } 
  }

}
