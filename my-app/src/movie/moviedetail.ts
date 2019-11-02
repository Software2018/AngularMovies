import {Genres} from './genres'
import {ProductionCompanies} from './productioncompanies'
import {ProductionCountries} from './productioncountries'
import {SpokenLanguages} from './spokenlanguages'
export class MovieDetail{
    adult: false
backdrop_path: string;
belongs_to_collection: null;
budget: number;
genres: Genres[];
homepage: string;
id: number;
imdb_id: string;
original_language: string;
original_title: string;
overview: string;
popularity: number;
poster_path: string;
production_companies: ProductionCompanies[];
production_countries: ProductionCountries[];
release_date: string;
revenue: number;
runtime: number;
spoken_languages: SpokenLanguages[];
status: string;
tagline: string;
title: string;
video: boolean;
vote_average: number;
vote_count: number;
}