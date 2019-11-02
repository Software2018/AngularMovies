import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {tap} from 'rxjs/operators'
import {Observable} from 'rxjs'
import {ActivatedRoute} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http:HttpClient,
  
  ) { }

  getMovie(movieId:number):Observable<any>{
   return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=12c4e800f9eac5a36c0f5b4c2c203834&language=en-US`)
 
  }
}
