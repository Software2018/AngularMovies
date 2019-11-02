import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service'
import {tap} from 'rxjs/operators'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {

  constructor(private movieService:MovieService,
    private route:ActivatedRoute
  ) {

   }
   POSTER_PATH:string='http://image.tmdb.org/t/p/w154'
   BACKDROP_PATH:string='http://image.tmdb.org/t/p/w1280'
   backdrop_path:string;
   poster_path:string;
   movies;
   movieId:number = +this.route.snapshot.paramMap.get("id");
  
  getMovie():void{
    this.movieService.getMovie(this.movieId).subscribe(data=>{
      this.movies=data;
      this.backdrop_path = `${this.BACKDROP_PATH}${data.backdrop_path}`;
      this.poster_path = `${this.POSTER_PATH}${data.poster_path}`;
      console.log(this.movies)

    });
  }

  ngOnInit() {
    this.getMovie();
  }

}
