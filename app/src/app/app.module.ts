import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PhoneComponent } from './phone/phone.component';
import { HttpClientModule}from '@angular/common/http';
import { LaptopComponent } from './laptop/laptop.component';
import { TvComponent } from './tv/tv.component';
import { StoreComponent } from './store/store.component';
import { XiaomiproComponent } from './xiaomipro/xiaomipro.component';
// import { FilterPipe } from './pipe/filter.pipe';
import { CartComponent } from './cart/cart.component';
import { FilterPipe } from './tv/pipe/filter.pipe';
// import { honeModule}from './phone/http'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    PhoneComponent,
    LaptopComponent,
    TvComponent,
    StoreComponent,
    XiaomiproComponent,
    CartComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
