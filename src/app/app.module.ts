import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './body/home/home.component';
import { ErrorComponent } from './error/error.component';
import { RegisterComponent } from './body/register/register.component';
import { FaqComponent } from './body/register/faq/faq.component';
import { FormComponent } from './body/register/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    HomeComponent,
    ErrorComponent,
    RegisterComponent,
    FaqComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
