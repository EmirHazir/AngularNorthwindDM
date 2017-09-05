import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http'; //Api için
import { Observable } from 'rxjs/Observable'; //Api için ReactJs Paketleri
import 'rxjs/add/operator/map'; //gelen response datayı maplemek için kullanılır.
import 'rxjs/add/operator/do'; //data geldiğinde yapılması isteneni yapar
import 'rxjs/add/operator/catch'; //data gelirken çıkan hatada yapılmasını istenen şeyi yazarsın

import { Category } from "./category";

Category
@Injectable()
export class CategoryService {

  constructor(private http: Http, @Inject("apiUrl") private apiUrl) { }

  url: string = this.apiUrl + "/categories";

  getCategories(): Observable<Category[]> {
    return this.http.get(this.url).map(r => r.json());
  }

}
