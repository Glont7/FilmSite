import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FilmsService } from '../services/films.service';
import { Film } from '../interfaces/film.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-film',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-film.component.html',
  styleUrl: './add-film.component.scss',
})
export class AddFilmComponent {
  binding: any;
  localStorageValue: string|null ='';

  constructor(readonly filmsService: FilmsService, readonly router:Router){}
  addFilmForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    image: new FormControl('', [Validators.required, Validators.minLength(3)]),
    rating: new FormControl('', [Validators.required]),
    watchTime: new FormControl(0, [Validators.required, Validators.min(0)]),
    //tags: new FormControl('', [Validators.required, Validators.minLength(3)]),
});

  onSubmit() {
    if (this.addFilmForm.valid) {
      const formValue = this.addFilmForm.value;
      const formattedFilm: Omit<Film, 'id'> = {
        name: formValue.name || '',
        image: formValue.image || '',
        rating: formValue.rating || '',
        watchTime: Number(formValue.watchTime) || 0,
      };
      this.filmsService.addDBFilms(formattedFilm);
    }
  }

  redirectToHomeComponent(){
    this.router.navigateByUrl('home');
  }
}