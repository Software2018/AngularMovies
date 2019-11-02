import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import {MoviesDetailsComponent} from './movies-details/movies-details.component';
const routes: Routes = [{
  path:'movielist',component:MovieListComponent},
{path:"", redirectTo:'movielist', pathMatch:'full'},
{path:'moviedetail/:id',component:MoviesDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
