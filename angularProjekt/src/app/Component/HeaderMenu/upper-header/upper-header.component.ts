import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upper-header',
  templateUrl: './upper-header.component.html',
  styleUrls: ['./upper-header.component.css']
})
export class UpperHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openNav() {
    document.getElementById("myNav").style.height = "100%";
    //tsconfig.json: "strictNullChecks": false,
  }
  
  closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
}
