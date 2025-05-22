import { Injectable } from '@angular/core';
import { Film } from '../interfaces/film.interface';
import { db } from '../db/db';
import {id} from '@instantdb/core';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor() {}

  addDBFilms(filmInput: Omit<Film,'id'>){
    db.transact(
      db.tx.films[id()].update({
        name:filmInput.name,
        image:filmInput.image,
        rating:filmInput.rating,
        watchTime:filmInput.watchTime,
      })
    );
    console.log('Success, the film has been added')
  }
}
