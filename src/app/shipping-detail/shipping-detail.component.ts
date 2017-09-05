import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { ShippingDetails } from "./shipping-details";

@Component({
  selector: 'app-shipping-detail',
  templateUrl: './shipping-detail.component.html',
  styleUrls: ['./shipping-detail.component.css']
})
export class ShippingDetailComponent implements OnInit {

  constructor() { }

  cities = [];
  model: ShippingDetails = new ShippingDetails('', '', true, -1);
  ngOnInit() {
    this.cities.push(
      { "id": "1", "name": "Ankara" },
      { "id": "2", "name": "Istanbul" },
      { "id": "3", "name": "İzmir" },
    );
  }

  checkout(form:NgForm){
    
  }

}
