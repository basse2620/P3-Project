import { Component, OnInit } from '@angular/core';
import { LaaneBillederService } from '../../../services/laane-billeder.service';
import { LaaneBilledere } from '../../../interfaces/laane-billedere';

@Component({
  selector: 'app-buy-display',
  templateUrl: './buy-display.component.html',
  styleUrls: ['./buy-display.component.css']
})
export class BuyDisplayComponent implements OnInit {
  laaneBilledere2: LaaneBilledere[] = [];

  constructor(private laaneBillederService: LaaneBillederService) { }

  ngOnInit(): void {
    this.laaneBillederService.getLaaneBilleder().subscribe((laaneBilledere) => (this.laaneBilledere2 = laaneBilledere));
  }

}
