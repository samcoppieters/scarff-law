import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientReviewsComponent } from './client-reviews/client-reviews.component';
import { ContactComponent } from './contact/contact.component';
import { DirectionsComponent } from './directions/directions.component';
import { HelpfulLinksComponent } from './helpful-links/helpful-links.component';
import { HomeComponent } from './home/home.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { PracticeAreasComponent } from './practice-areas/practice-areas.component';
import { QuestionairesComponent } from './questionaires/questionaires.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'our-team', component: OurTeamComponent },
  { path: 'practice-areas', component: PracticeAreasComponent },
  { path: 'helpful-links', component: HelpfulLinksComponent },
  { path: 'questionaires', component: QuestionairesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'directions', component: DirectionsComponent },
  { path: 'client-reviews', component: ClientReviewsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
