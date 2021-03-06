import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ROUTES } from './routes/app.routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './home/landing/landing.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingService } from './services/landing.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TerminalComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  providers: [LandingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
