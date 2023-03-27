import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClimbComponent } from './add-climb/add-climb.component';
import { SearchComponent } from './search/search.component';
import { SingleClimbComponent } from './single-climb/single-climb.component';
import { ViewClimbsComponent } from './view-climbs/view-climbs.component';

const routes: Routes = [
  { path: 'climbs', component: ViewClimbsComponent },
  { path: 'climbs/:id', component: SingleClimbComponent },
  { path: 'search', component: SearchComponent },
  { path: 'add', component: AddClimbComponent },
  {
    path: '',
    redirectTo: 'climbs',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
