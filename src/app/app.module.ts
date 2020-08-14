import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './shared/material.module';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SamplesComponent } from './pages/samples/samples.component';
import {CommonModule} from '@angular/common';
import 'hammerjs';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { MatAnimatedIconComponent } from './component/mat-animated-icon/mat-animated-icon.component';
import {VarDirective} from './component/directives/var.directive';
import { NavigationListComponent } from './component/navigation-list/navigation-list.component';

export const SMALL_WIDTH_BREAKPOINT = 600;

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    SamplesComponent,
    PortfolioComponent,
    MatAnimatedIconComponent,
    VarDirective,
    NavigationListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
