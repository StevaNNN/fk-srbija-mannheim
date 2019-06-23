import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {SquadComponent} from './pages/first-team/squad/squad.component';
import {ProfileDetailsComponent} from './pages/first-team/squad/profile-details/profile-details.component';
import {LeagueTableComponent} from './pages/first-team/league-table/league-table.component';
import {FirstTeamComponent} from './pages/first-team/first-team.component';
import {FixturesAndResultsComponent} from './pages/first-team/fixtures-and-results/fixtures-and-results.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }, {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'first-team',
    children: [{
      path: '',
      component: FirstTeamComponent,
      children: [{
        path: '',
        redirectTo: 'squad',
        pathMatch: 'full'
      }, {
        path: 'squad',
        component: SquadComponent
      }, {
        path: 'league-table',
        component: LeagueTableComponent
      }, {
        path: 'fixtures-and-results',
        component: FixturesAndResultsComponent
      }]
    }, {
      path: ':id',
      component: ProfileDetailsComponent
    }]
  }, {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
