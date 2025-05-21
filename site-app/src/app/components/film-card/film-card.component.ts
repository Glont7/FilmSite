import { Component, Input } from '@angular/core';
import { Film } from '../../interfaces/film.interface';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-film-card',
  imports: [CommonModule],
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.scss'
})
export class FilmCardComponent {
  @Input() film!:Film;

  constructor(readonly router: Router){}

  goToFilmPage() {
    this.router.navigateByUrl('recipes/' + this.film.id);
  }
}
