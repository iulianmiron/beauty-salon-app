import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentsModule } from './material-components.module';

import { AppRoutingModule }     from './app-routing.module';

import { HeroService }        from './hero.service';
import { HeroSearchService }  from './hero-search.service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { DialogOverviewExampleDialog } from './home/home.component';

import {
  MatInputModule,
  MatButtonModule
} from '@angular/material';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    MaterialComponentsModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule   
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent,
    HomeComponent,
    DialogOverviewExampleDialog
  ],
  providers: [HeroService, HeroSearchService],
  bootstrap: [AppComponent],
  entryComponents: [DialogOverviewExampleDialog]
})
export class AppModule { }
