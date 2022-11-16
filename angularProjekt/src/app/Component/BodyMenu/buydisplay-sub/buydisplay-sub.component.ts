import { Component, OnInit, Input, Output } from '@angular/core';
import { LaaneBilledere } from '../../../interfaces/laane-billedere';

@Component({
  selector: 'app-buydisplay-sub',
  templateUrl: './buydisplay-sub.component.html',
  styleUrls: ['./buydisplay-sub.component.css']
})
export class BuydisplaySubComponent implements OnInit {
  @Input() Ilaanebilleder: LaaneBilledere;

  constructor() { }

  ngOnInit(): void {
  }

}
