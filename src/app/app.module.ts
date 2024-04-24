import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { ProductsComponent } from './components/products/products.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ClothingComponent } from './components/clothing/clothing.component';
import { TechComponent } from './components/tech/tech.component';
import { AllComponent } from './components/all/all.component';
import { JewelryComponent } from './components/jewelry/jewelry.component';
import { MensClothingComponent } from './components/mens-clothing/mens-clothing.component';
import { WomensClothingComponent } from './components/womens-clothing/womens-clothing.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ProductsComponent,
    NavBarComponent,
    ClothingComponent,
    TechComponent,
    AllComponent,
    JewelryComponent,
    MensClothingComponent,
    WomensClothingComponent,
    FooterComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
