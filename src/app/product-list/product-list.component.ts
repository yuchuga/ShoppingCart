import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { Product } from '../product.model'
import { selectProducts } from '../state/cart.selector'
import { CartActions } from '../state/cart.action'

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent implements OnInit {
  products$!: Observable<ReadonlyArray<Product>>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(CartActions.loadProducts())
    this.products$ = this.store.select(selectProducts)
  }

  onAddToCart(product: Product) {
    this.store.dispatch(CartActions.addProduct({ product }))
  }
}