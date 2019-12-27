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
   
  }

  getMovies(): void{
    this.movieService.getMovieList()
        .subscribe(movies => {
          this.movies = movies;

          for (let movie of this.movies){
            movie.quantity = parseInt(localStorage.getItem(movie.id.toString()))
            if (isNaN(movie.quantity)){
              movie.quantity = 0;
            }
          }
        });
  }

  goBack(): void{
    this.location.back();
  }

}
