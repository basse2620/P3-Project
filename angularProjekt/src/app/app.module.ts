import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/HeaderMenu/header/header.component';
import { LowerHeaderComponent } from './Component/HeaderMenu/lower-header/lower-header.component';
import { UpperHeaderComponent } from './Component/HeaderMenu/upper-header/upper-header.component';
import { MasterBitchComponent } from './Component/master-bitch/master-bitch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { BuyDisplayComponent } from './Component/BodyMenu/buy-display/buy-display.component';
import { MainDadBodComponent } from './Component/BodyMenu/main-dad-bod/main-dad-bod.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LowerHeaderComponent,
    UpperHeaderComponent,
    MasterBitchComponent,
    BuyDisplayComponent,
    MainDadBodComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
