import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LaptopComponent } from './laptop/laptop.component';
import { LoginComponent } from './login/login.component';
import { PhoneComponent } from './phone/phone.component';
import { RegisterComponent } from './register/register.component';
import { StoreComponent } from './store/store.component';
import { TvComponent } from './tv/tv.component';
import { XiaomiproComponent } from './xiaomipro/xiaomipro.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'',component:DashboardComponent},
  {path:'phone',component:PhoneComponent},
  {path:'laptop',component:LaptopComponent},
  {path:'tv',component:TvComponent},
  {path:'store',component:StoreComponent},
  {path:'xiaomipro',component:XiaomiproComponent},
  {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
