import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/body/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { RegisterComponent } from './components/body/register/register.component';
import { FaqComponent } from './components/body/register/faq/faq.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'register',
    children: [{
        path: '',
        component: RegisterComponent,
      }, {
        path: '',
        component: SidebarComponent,
        outlet: 'sidebar'
      }, {
        path: 'faq',
        component: FaqComponent
      }
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
