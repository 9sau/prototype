import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/body/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { RegisterComponent } from './components/body/register/register.component';
import { FaqComponent } from './components/body/register/faq/faq.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  /* { path: 'register/faqs', component: FaqComponent, outlet: 'registerOutlet' },
  { path: 'register/form', component: RegisterComponent, outlet: 'registerOutlet' }, */
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
