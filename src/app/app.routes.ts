import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { PostJobComponent } from './dashboard/post-job/post-job.component';
import { ApplicationsComponent } from './dashboard/applications/applications.component';
import { SavedJobsComponent } from './dashboard/saved-jobs/saved-jobs.component';
import path from 'path';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'job/:id', component: JobDetailsComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'post-job', component: PostJobComponent },
      { path: 'applications', component: ApplicationsComponent },
      { path: 'saved-jobs', component: SavedJobsComponent },
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
    ],
  },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
];

export default routes;
