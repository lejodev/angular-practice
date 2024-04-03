import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClothingComponent } from './components/clothing/clothing.component';
import { TechComponent } from './components/tech/tech.component';
import { ProductsComponent } from './components/products/products.component';
import { AllComponent } from './components/all/all.component';

const routes: Routes = [
  { path: 'clothing', component: ClothingComponent },
  { path: 'tech', component: TechComponent },
  {path:"", component: AllComponent}
  // Other routes if any
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
