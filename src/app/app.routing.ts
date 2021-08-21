import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'sign-in', component: SignInComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {}