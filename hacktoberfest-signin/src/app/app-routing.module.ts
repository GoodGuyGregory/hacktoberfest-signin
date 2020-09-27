import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { LoginComponent } from './components/pages/login/login.component';
import { GraphComponent } from './components/pages/graph/graph.component';

const routes: Routes = [
  {
    path: '', component: WelcomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'graph', component: GraphComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
