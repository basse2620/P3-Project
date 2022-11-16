import { Component, OnInit } from '@angular/core';
import { LaaneBillederService } from 'src/app/services/laane-billeder.service'
import { LaaneBilledere } from 'src/app/interfaces/laane-billedere';
import { AddresseService } from 'src/app/services/addresse.service';
import { Addresse } from 'src/app/interfaces/addresse';


@Component({
  selector: 'app-buydisplay',
  templateUrl: './buydisplay.component.html',
  styleUrls: ['./buydisplay.component.css']
})
export class BuydisplayComponent implements OnInit {
  lBs: LaaneBilledere[] = [];
  addre: Addresse[] =[];

  constructor(private laanebilledservice: LaaneBillederService,  private addresseservice: AddresseService) { }

  ngOnInit(): void {

    this.laanebilledservice.getLaaneBilleder().subscribe((lBs) => 
    (this.lBs = lBs))
  
    //this.addresseservice.getAddresse().subscribe((addre) => (this.addre = addre));
  }

  PressOn(kj){
    console.log(kj)
  }
}
