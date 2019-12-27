import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Movie } from "../movie";
import { MovieService } from "../movie.service";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.less']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getMovie();
    
  }
  getMovie(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id)
        .subscribe(movie => {
        this.movie = movie;
        this.movie.quantity = parseInt(localStorage.getItem(this.movie.id.toString()))
        if (isNaN(this.movie.quantity)){
        this.movie.quantity = 0;
        } 
    });
  }

  goBack(): void{
    this.location.back();
  }

  addToCart(movie: Movie): void {
    movie.quantity++;
    localStorage.setItem(movie.id.toString(), movie.quantity.toString())
  }

  removeAll(movie: Movie): void {
    movie.quantity = 0;
    localStorage.setItem(movie.id.toString(), movie.quantity.toString())
  }
  
}
