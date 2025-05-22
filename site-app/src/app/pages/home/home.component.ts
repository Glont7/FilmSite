import { Component } from '@angular/core';
import { Film } from '../../interfaces/film.interface';
import { FilmsService } from '../../services/films.service';
import { FilmCardComponent } from '../../components/film-card/film-card.component';
import {FormsModule} from '@angular/forms';
import { db } from '../../db/db';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule, FilmCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  films: Film[] = [];
  errorMessage: any = '';
  filteredFilm!: Film[];
  dbFilms!:any[];

  constructor(filmsService: FilmsService, readonly router:Router) {
    db.subscribeQuery({ films: {id: true, name: true, image: true, rating: true, watchTime: true} }, (resp) => {
      if (resp.error) {
        this.errorMessage=resp.error;
      }
      if (resp.data) {
        this.dbFilms=resp.data.films;
      }
    });
  }
}
