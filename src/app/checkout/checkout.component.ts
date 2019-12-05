import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Location } from '@angular/common';
import { Order } from '../order';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.less']
})
export class CheckoutComponent implements OnInit {

  order = {} as Order;

  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor(
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goNext(): void{
    this.router.navigate(['/complete']);
  }
  goBack(): void{
    this.location.back();
  }

}
