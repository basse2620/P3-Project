import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lower-header',
  templateUrl: './lower-header.component.html',
  styleUrls: ['./lower-header.component.css']
})
export class LowerHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  pressRent(){
    console.log(123)
  }
  pressBuy(){
    console.log(321)
  }
}
