import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'app-products',
    templateUrl: './product-list.component.html'
})

export class ProductListComponent implements OnInit {
    title = 'Product List';
    imageWidth = 50;
    imageMargin = 2;
    showImage =  false;
    errorMessage: string;
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    filteredProducts: IProduct[];
    products: IProduct[];

    constructor(private _productService: ProductService) {
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1 );
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClickedEvent(message: string): void {
        this.title = this.title + ': ' + message;
    }

    ngOnInit(): void {
        this._productService.getProducts().subscribe(
            products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error => this.errorMessage = <any>error
        );
    }
}
