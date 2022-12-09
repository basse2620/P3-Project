import { Component, OnInit } from '@angular/core';
import { SalgsFilmService } from 'src/app/services/salgs-film/salgs-film.service';
import { SalgsFilm } from 'src/app/interfaces/salgs-film';
import { LaaneFilm } from 'src/app/interfaces/laane-film';
import { LaaneFilmService } from 'src/app/services/laane-film/laane-film.service'

@Component({
  selector: 'app-main-dad-bod',
  templateUrl: './main-dad-bod.component.html',
  styleUrls: ['./main-dad-bod.component.css']
})
export class MainDadBodComponent implements OnInit {
  Entity1: SalgsFilm[] = [];
  Entity2: LaaneFilm[] = [];

  constructor(
    private salgsFilmService: SalgsFilmService,
    private laanefilmService: LaaneFilmService,
  ) { }

  ngOnInit(): void {
    this.salgsFilmService.getSalgsFilm().subscribe((Entity) =>
      (this.Entity1 = Entity));
    this.laanefilmService.getLaaneFilm().subscribe((Entity) =>
      (this.Entity2 = Entity));
  }

  PressOn(kj) {
    console.log(kj)
  }
}
