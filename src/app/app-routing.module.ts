import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClothingComponent } from './components/clothing/clothing.component';
import { TechComponent } from './components/tech/tech.component';
import { ProductsComponent } from './components/products/products.component';
import { AllComponent } from './components/all/all.component';
import { MensClothingComponent } from './components/mens-clothing/mens-clothing.component';
import { WomensClothingComponent } from './components/womens-clothing/womens-clothing.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  { path: 'clothing', component: ClothingComponent },
  { path: 'tech', component: TechComponent },
  { path: "mens_clothing", component: MensClothingComponent },
  { path: "womens_clothing", component: WomensClothingComponent },
  { path: "", component: AllComponent },
  { path: ":searchInput", component: SearchResultsComponent },
  // { path: "**", component: PageNotFoundComponent },
  { path: "product/:id", component: ProductComponent }
  // Other routes if any
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
