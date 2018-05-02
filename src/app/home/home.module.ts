import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AdminComponent } from '../admin/admin.component';
import { ProfileComponent } from '../profile/profile.component';
import { ClientComponent } from '../client/client.component';
import { SignoutComponent } from '../signout/signout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AngularCarouselComponent } from '../angular-carousel/angular-carousel.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { SlideComponent } from '../slide/slide.component';
import { ProspectsComponent } from '../prospects/prospects.component';
import { CampaignComponent } from '../campaign/campaign.component';
import { ReportsComponent } from '../reports/reports.component';
import { AlertsComponent } from '../alerts/alerts.component';
import { ResearchComponent } from '../research/research.component';
import { SeminarsComponent } from '../seminars/seminars.component';
import { HelpComponent } from '../help/help.component';
import {ChartModule} from 'primeng/chart';
import { DataTableModule } from 'primeng/datatable';

@NgModule({
  imports: [
    CommonModule,HomeRoutingModule,ChartModule,DataTableModule
  ],
  declarations: [HomeComponent, AdminComponent,
    ProfileComponent,
    ClientComponent,
    SignoutComponent,
    DashboardComponent,
    AngularCarouselComponent,
    CarouselComponent,
    SlideComponent, 
    ProspectsComponent,
    CampaignComponent,
    ReportsComponent,
    AlertsComponent,
    ResearchComponent,
    SeminarsComponent,
    HelpComponent]
})
export class HomeModule {
}
