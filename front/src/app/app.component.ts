import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface Movies {
  id: number;
  Titre: string;
  Description: string;
  category: Category;
  published_at: Date;
  created_at: Date;
  updated_at: Date;
}

export interface Category {
  id: number;
  Nom: string;
  movie: number;
  published_at: Date;
  created_at: Date;
  updated_at: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  movies: Movies[] = [];
  constructor(public http: HttpClient) {}
  ngOnInit() {
    this.getFilm();
  }
  getFilm() {
    console.log('get film');
    this.http.get('http://localhost:1337/movies').subscribe((data) => {
      console.log(data);
      this.movies = data as Movies[];
    });
  }
}
