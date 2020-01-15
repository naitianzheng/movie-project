import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie} from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(
    private http: HttpClient
  ) { }
  
  getMovie(id: number): Observable<Movie>{
    let url ='http://localhost:8000/movie/'+ id;
    return this.http.get<Movie>(url);
  }
  
  getMovieList(): Observable<Movie[]>{
    return this.http.get<Movie[]>('http://localhost:8000/movie');
        // .pipe(map(result=>result['objects']));
  }
}