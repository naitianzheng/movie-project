import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Location } from '@angular/common';
import { Order } from '../order';
import { Movie } from '../movie';
import { OrderService } from "../order.service";
import { MovieService } from "../movie.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.less']
})
export class CheckoutComponent implements OnInit {

  movies: Movie[];
  total_price: number = 0.00;
  order = {} as Order;
  newOrder: Observable<Order>

  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor(
    private orderService: OrderService,
    private movieService: MovieService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void{
    this.movieService.getMovieList()
        .subscribe(movies => {
          this.movies = movies;
          for (let movie of this.movies){
            movie.quantity = parseInt(localStorage.getItem(movie.id.toString()));
            if (isNaN(movie.quantity)){
              movie.quantity = 0;
            }
            this.total_price += movie.price*movie.quantity;
          }
        });
  }

  goNext(order: Order): void{     
    order.movies = this.movies;
    console.log(order.movies);
    order.total_price = this.total_price;
    this.newOrder = this.orderService.submitOrder(order);
    this.newOrder.subscribe(order=>this.order=order);
    
    this.router.navigate(['/complete']);
  }
  goBack(): void{
    this.location.back();
  }

}
