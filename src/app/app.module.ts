import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SquadComponent } from './pages/squad/squad.component';
import { InfoContainerComponent } from './components/info-container/info-container.component';
import { PositionsComponent } from './pages/squad/positions/positions.component';
import { TeamMemberComponent } from './pages/squad/positions/team-member/team-member.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ProfileDetailsComponent } from './pages/squad/profile-details/profile-details.component';
import { ProfileDetailsHeaderComponent } from './pages/squad/profile-details/profile-details-header/profile-details-header.component';
import { LeagueTableComponent } from './pages/league-table/league-table.component';

@NgModule ({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    HeaderComponent,
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
    LeagueTableComponent
  ],
  imports: [
    NgbModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
