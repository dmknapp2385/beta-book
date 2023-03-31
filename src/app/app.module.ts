//module imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//testing web-api
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

//components
import { AppComponent } from './app.component';
import { AddClimbComponent } from './add-climb/add-climb.component';
import { ViewClimbsComponent } from './view-climbs/view-climbs.component';
import { SearchComponent } from './search/search.component';
import { SingleClimbComponent } from './single-climb/single-climb.component';
import { ClimbEditComponent } from './climb-edit/climb-edit.component';

//services
//add service to deal with climbs and one for login

@NgModule({
  declarations: [
    AppComponent,
    AddClimbComponent,
    ViewClimbsComponent,
    SearchComponent,
    SingleClimbComponent,
    ClimbEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
