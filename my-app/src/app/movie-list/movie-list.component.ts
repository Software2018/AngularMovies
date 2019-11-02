import { Component, OnInit } from '@angular/core';
import { MoviesService} from '../movies.service'
import {Movie} from './movie'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies:Movie[];
  poster_path:string='http://image.tmdb.org/t/p/w154';
  constructor(private movieService:MoviesService) { }
  getmovies():void{
     this.movieService.getMovies().subscribe(movies=> {this.movies=movies.results
    console.log(movies.results)});
  }
  ngOnInit() {
    this.getmovies();
  }

}
