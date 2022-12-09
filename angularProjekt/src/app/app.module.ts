import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/HeaderMenu/header/header.component';
import { LowerHeaderComponent } from './Component/HeaderMenu/lower-header/lower-header.component';
import { UpperHeaderComponent } from './Component/HeaderMenu/upper-header/upper-header.component';
import { MasterBitchComponent } from './Component/master-bitch/master-bitch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { MainDadBodComponent } from './Component/BodyMenu/main-dad-bod/main-dad-bod.component';
import { BuydisplayComponent } from './Component/BodyMenu/buydisplay/buydisplay.component';
import { InformationscreenbodyComponent } from './Component/pickedsite/informationscreen/informationscreenbody/informationscreenbody.component';
import { MainbodyPickedsiteComponent } from './Component/pickedsite/mainbody-pickedsite/mainbody-pickedsite.component';
import { HomeComponent } from './pages/home/home.component';
import { KøbeFilmComponent } from './pages/købe-film/købe-film.component';
import { LoginComonent } from './pages/login/login.component';
import { RentdisplayComponent } from './Component/BodyMenu/rentdisplay/rentdisplay.component';
import { RentComponent } from './pages/rent/rent.component';
import { LogindisplayComponent } from './Component/BodyMenu/logindisplay/logindisplay.component';

const appRoutes: Routes = [
  {path: '', component: BuydisplayComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LowerHeaderComponent,
    UpperHeaderComponent,
    MasterBitchComponent,
    MainDadBodComponent,
    BuydisplayComponent,
    InformationscreenbodyComponent,
    MainbodyPickedsiteComponent,
    HomeComponent,
    KøbeFilmComponent,
    LoginComonent,
    RentdisplayComponent,
    RentComponent,
    LogindisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
