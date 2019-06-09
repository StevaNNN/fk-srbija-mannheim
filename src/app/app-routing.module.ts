import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SquadComponent } from './pages/squad/squad.component';
import { ProfileDetailsComponent } from './pages/squad/profile-details/profile-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'squad',
    children: [{
      path: '',
      component: SquadComponent
    }, {
      path: ':id',
      component: ProfileDetailsComponent
    }]
  }, {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule ({
  imports: [RouterModule.forRoot (routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
