import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { LogoComponent } from './components/logo/logo.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EnterButtonComponent } from './components/enter-button/enter-button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddHabitButtonComponent } from './components/add-habit-button/add-habit-button.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StartPageComponent,
    LogoComponent,
    HeaderComponent,
    FooterComponent,
    EnterButtonComponent,
    NavbarComponent,
    AddHabitButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
