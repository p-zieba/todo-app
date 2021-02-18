import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './core/components/main/main.component';
import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './core/components/footer/footer.component';
import { NavigationComponent } from './core/components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
