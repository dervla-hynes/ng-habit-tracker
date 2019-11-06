import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { HabitItemComponent } from './components/habit-item/habit-item.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { HabitListComponent } from './components/habit-list/habit-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StartPageComponent,
    LogoComponent,
    NavbarComponent,
    ButtonComponent,
    HabitItemComponent,
    CheckboxComponent,
    HabitListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
