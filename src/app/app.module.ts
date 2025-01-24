import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { AddProjectComponent } from './projects/add-project/add-project.component';
import { EditProjectComponent } from './projects/edit-project/edit-project.component';
import { ViewProjectComponent } from './projects/view-project/view-project.component';
import { AllProjectsComponent } from './projects/all-projects/all-projects.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddProjectComponent,
    EditProjectComponent,
    ViewProjectComponent,
    AllProjectsComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
