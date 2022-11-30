import { Component, OnInit } from "@angular/core";
import { MasterBitchComponent } from "src/app/Component/master-bitch/master-bitch.component";

@Component ({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    master = MasterBitchComponent;

    ngOnInit(): void {
        
    }
}