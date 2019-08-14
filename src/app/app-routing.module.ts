import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WorkshopsComponent} from './workshops/workshops.component';
import { SpeakersComponent} from './speakers/speakers.component';
import { SessionsComponent } from './sessions/sessions.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { ScheduleComponent } from './schedule/schedule.component';

import { NworkshopsComponent} from './nworkshops/nworkshops.component';
import { NspeakersComponent} from './nspeakers/nspeakers.component';
import { HomenewComponent } from './homenew/home.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  // {path: 'home', component: HomeComponent},
  // {path: 'workshops', component: WorkshopsComponent},
  // {path: 'speakers', component: SpeakersComponent},
  {path: 'sessions', component: SessionsComponent},
  {path: 'sponsors', component: SponsorsComponent},
  {path: 'schedule', component: ScheduleComponent},

  {path: 'workshops', component: NworkshopsComponent},
  {path: 'speakers', component: NspeakersComponent},
  {path: 'home', component: HomenewComponent},
]



@NgModule({
  exports: [ RouterModule ],
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
