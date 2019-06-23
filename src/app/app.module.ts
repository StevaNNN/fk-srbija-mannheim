import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {FooterComponent} from './components/footer/footer.component';
import {SquadComponent} from './pages/first-team/squad/squad.component';
import {InfoContainerComponent} from './components/info-container/info-container.component';
import {PositionsComponent} from './pages/first-team/squad/positions/positions.component';
import {TeamMemberComponent} from './pages/first-team/squad/positions/team-member/team-member.component';
import {SideNavComponent} from './components/side-nav/side-nav.component';
import {TopBarComponent} from './components/top-bar/top-bar.component';
import {ProfileDetailsComponent} from './pages/first-team/squad/profile-details/profile-details.component';
import {ProfileDetailsHeaderComponent} from './pages/first-team/squad/profile-details/profile-details-header/profile-details-header.component';
import {LeagueTableComponent} from './pages/first-team/league-table/league-table.component';
import {StoreModule} from '@ngrx/store';
import {reducers, metaReducers, effects} from './state';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';
import { FirstTeamComponent } from './pages/first-team/first-team.component';
import { FixturesAndResultsComponent } from './pages/first-team/fixtures-and-results/fixtures-and-results.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    SquadComponent,
    InfoContainerComponent,
    SideNavComponent,
    TopBarComponent,
    InfoContainerComponent,
    PositionsComponent,
    TeamMemberComponent,
    ProfileDetailsComponent,
    ProfileDetailsHeaderComponent,
    LeagueTableComponent,
    FirstTeamComponent,
    FixturesAndResultsComponent
  ],
  imports: [
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot(effects),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
