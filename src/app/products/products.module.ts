import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductsGuardService } from './products-guard.service';
import { ProductService } from './product.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {
        path: 'products/:id',
        canActivate: [ProductsGuardService],
        component: ProductDetailComponent
      },
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  providers: [
    ProductService,
    ProductsGuardService
  ]
})
export class ProductsModule { }
