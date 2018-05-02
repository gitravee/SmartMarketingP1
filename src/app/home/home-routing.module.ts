import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AdminComponent } from '../admin/admin.component';
import { ProfileComponent } from '../profile/profile.component';
import { ClientComponent } from '../client/client.component';
import { SignoutComponent } from '../signout/signout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProspectsComponent } from '../prospects/prospects.component';
import { CampaignComponent } from '../campaign/campaign.component';
import { ReportsComponent } from '../reports/reports.component';
import { AlertsComponent } from '../alerts/alerts.component';
import { ResearchComponent } from '../research/research.component';
import { SeminarsComponent } from '../seminars/seminars.component';
import { HelpComponent } from '../help/help.component';

const homeRoutes: Routes = [
    {
      path: 'home',
      component: HomeComponent,
      children: [
        {
          path: '',
          children: [
            { path: 'dashboard',   component: DashboardComponent },
            { path: 'admin',   component: AdminComponent },
            { path: 'profile',   component: ProfileComponent },
            { path: 'client',   component: ClientComponent },
            { path: 'signout',   component: SignoutComponent },
            { path: 'prospects',   component: ProspectsComponent },
            { path: 'campaign',   component: CampaignComponent },
            { path: 'reports',   component: ReportsComponent },
            { path: 'alerts',   component: AlertsComponent },
            { path: 'research',   component: ResearchComponent },
            { path: 'seminars',   component: SeminarsComponent },
            { path: 'help',   component: HelpComponent },
            { path: '',   component: DashboardComponent },
          ]
        }
      ]
    }
  ];

  @NgModule({
    imports: [
      RouterModule.forChild(homeRoutes)
    ],
    exports: [
      RouterModule
    ],
    providers: []
  })
  export class HomeRoutingModule { }
  
  
  /*
  Copyright 2017-2018 Google Inc. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at http://angular.io/license
  */