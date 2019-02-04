import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { HomeComponent } from './components/body/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { RegisterComponent } from './components/body/register/register.component';
import { FaqComponent } from './components/body/register/faq/faq.component';
import { FormComponent } from './components/body/register/form/form.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutWithSidebarComponent } from './layouts/layout-with-sidebar/layout-with-sidebar.component';
import { LayoutWithoutSidebarComponent } from './layouts/layout-without-sidebar/layout-without-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    HomeComponent,
    ErrorComponent,
    RegisterComponent,
    FaqComponent,
    FormComponent,
    SidebarComponent,
    FooterComponent,
    LayoutWithSidebarComponent,
    LayoutWithoutSidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
