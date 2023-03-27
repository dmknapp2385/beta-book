//module imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { AddClimbComponent } from './add-climb/add-climb.component';
import { ViewClimbsComponent } from './view-climbs/view-climbs.component';
import { SearchComponent } from './search/search.component';
import { SingleClimbComponent } from './single-climb/single-climb.component';

//services
//add service to deal with climbs and one for login

@NgModule({
  declarations: [
    AppComponent,
    AddClimbComponent,
    ViewClimbsComponent,
    SearchComponent,
    SingleClimbComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
