import { Component, OnInit } from '@angular/core';
import { MovieService} from '../movie.service'
import { Movie } from '../movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.less']
})
export class MoviesComponent implements OnInit {

  movies : Movie[];
  
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void{
    this.movieService.getMovies()
        .subscribe(movies => this.movies = movies);
  }
}
