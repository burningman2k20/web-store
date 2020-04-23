import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenPageComponent } from './men-page/men-page.component';
import { WomenPageComponent } from './women-page/women-page.component';
import { KidsPageComponent } from './kids-page/kids-page.component';
import { LivingPageComponent } from './living-page/living-page.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'menpage',
    component: MenPageComponent
  },

  {
    path: 'womenpage',
    component: WomenPageComponent
  },

  {
    path: 'kidspage',
    component: KidsPageComponent
  },
  {
    path: 'living',
    component: LivingPageComponent
  },
  {
    path: 'account',
    component: AccountPageComponent
  },
  {
    path: 'cart',
    component: CartPageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
