import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Movie } from "../movie";
import { MovieService } from "../movie.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {

  movies: Movie[];

  constructor(
    private movieService: MovieService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getMovies();
    for (let movie of this.movies){
      movie.quantity = parseInt(localStorage.getItem(movie.id.toString()))
      if (movie.quantity === NaN){
        movie.quantity = 0;
      }
    }
  }

  getMovies(): void {
    this.movieService.getMovies()
        .subscribe(movies => this.movies = movies);
  }

  goBack(): void{
    this.location.back();
  }

}
