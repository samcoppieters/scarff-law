import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { PracticeAreasComponent } from './practice-areas/practice-areas.component';
import { HelpfulLinksComponent } from './helpful-links/helpful-links.component';
import { QuestionairesComponent } from './questionaires/questionaires.component';
import { ContactComponent } from './contact/contact.component';
import { DirectionsComponent } from './directions/directions.component';
import { ClientReviewsComponent } from './client-reviews/client-reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OurTeamComponent,
    PracticeAreasComponent,
    HelpfulLinksComponent,
    QuestionairesComponent,
    ContactComponent,
    DirectionsComponent,
    ClientReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
