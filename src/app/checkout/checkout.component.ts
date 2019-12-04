import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Order } from '../order';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.less']
})
export class CheckoutComponent implements OnInit {

  order = {} as Order;

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }

  goBack(): void{
    this.location.back();
  }

}
