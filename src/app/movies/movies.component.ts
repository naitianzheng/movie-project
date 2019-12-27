import { Component, OnInit } from '@angular/core';
import { MovieService} from '../movie.service'
import { Movie } from '../movie';

import { Router} from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.less']
})
export class MoviesComponent implements OnInit {

  movies : Movie[];
  
  constructor(
    private movieService: MovieService,
    private router: Router) { }

  ngOnInit() {
    this.getMovies();
  }

  goNext(id: number): void{
    let url:string = '/detail/'+ id.toString();
    
    this.router.navigate([url]);
  }

  getMovies(): void{
    this.movieService.getMovies()
        .subscribe(movies => this.movies = movies);
  }
}
