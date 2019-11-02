import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }
  private moviesUrl = "https://api.themoviedb.org/3/discover/movie?api_key=12c4e800f9eac5a36c0f5b4c2c203834&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
  getMovies():Observable<any>{

    return this.http.get(this.moviesUrl).pipe(
      tap(_=>this.log("were fetched"))
    );
  }

  private log(message:string){
    console.log(`Movies: ${message}`)
  }


}
