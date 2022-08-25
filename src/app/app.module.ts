import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { LowerHeaderComponent } from './component/lower-header/lower-header.component';
import { UpperHeaderComponent } from './component/upper-header/upper-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LowerHeaderComponent,
    UpperHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
