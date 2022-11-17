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

  openSearch() {
    document.getElementById("mySearch").style.height = "100%";
    //tsconfig.json: "strictNullChecks": false,
  }
  
  closeSearch() {
    document.getElementById("mySearch").style.height = "0%";
  }

  openNav(){
    document.getElementById("myNavLog").style.height = "100%";
  }

  closeNav(){
    document.getElementById("myNavLog").style.height = "0%";
  }

}
