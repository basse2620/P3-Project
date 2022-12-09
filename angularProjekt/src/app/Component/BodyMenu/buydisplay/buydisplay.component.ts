import { Component, OnInit } from '@angular/core';
import { SalgsBillederService } from 'src/app/services/salgs-billeder/salgs-billeder.service';
import { SalgsBilledere } from 'src/app/interfaces/salgs-billedere';
import { AddresseService } from '../../../services/addresse/addresse.service';
import { Addresse } from 'src/app/interfaces/addresse';
import { SalgsFilmService } from 'src/app/services/salgs-film/salgs-film.service';
import { SalgsFilm } from 'src/app/interfaces/salgs-film';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buydisplay',
  templateUrl: './buydisplay.component.html',
  styleUrls: ['./buydisplay.component.css']
})
export class BuydisplayComponent implements OnInit {
  lBs: SalgsBilledere[] = [];
  addre: Addresse[] =[];
  Entity: SalgsFilm[] = [];

  constructor(
    private salgsFilmService: SalgsFilmService,
    private salgsBilledservice: SalgsBillederService,
    private addresseservice: AddresseService,
    private router: Router) { }

  ngOnInit(): void {

    this.salgsBilledservice.getSalgsBilleder().subscribe((lBs) => 
    (this.lBs = lBs))

    this.salgsFilmService.getSalgsFilm().subscribe((Entity) => 
    (this.Entity = Entity));
  
    this.addresseservice.getAddresse().subscribe((addre) =>
    (this.addre = addre));
  }

  PressOn(kj){
    console.log(kj)
  }
}
