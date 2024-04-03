import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { ProductsComponent } from './components/products/products.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ClothingComponent } from './components/clothing/clothing.component';
import { TechComponent } from './components/tech/tech.component';
import { AllComponent } from './components/all/all.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ProductsComponent,
    NavBarComponent,
    ClothingComponent,
    TechComponent,
    AllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
