import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Location } from '@angular/common';
import { Order } from '../order';
import { OrderService } from "../order.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.less']
})
export class CheckoutComponent implements OnInit {

  order = {} as Order;
  newOrder: Observable<Order>

  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor(
    private orderService: OrderService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goNext(order: Order): void{
    this.router.navigate(['/complete']);
    this.newOrder = this.orderService.submitOrder(order);
    this.newOrder.subscribe(order=>this.order=order);
    // console.log(order.address);
  }
  goBack(): void{
    this.location.back();
  }

}
