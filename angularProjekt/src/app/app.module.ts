import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/HeaderMenu/header/header.component';
import { LowerHeaderComponent } from './Component/HeaderMenu/lower-header/lower-header.component';
import { UpperHeaderComponent } from './Component/HeaderMenu/upper-header/upper-header.component';
import { MainBodyComponent } from './Component/BodyMenu/main-body/main-body.component';
import { BodyDisplayContentComponent } from './Component/BodyMenu/body-display-content/body-display-content.component';
import { MasterBitchComponent } from './Component/master-bitch/master-bitch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LowerHeaderComponent,
    UpperHeaderComponent,
    MainBodyComponent,
    BodyDisplayContentComponent,
    MasterBitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
