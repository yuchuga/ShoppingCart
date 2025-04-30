import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Product } from './product.model'

@Injectable({ providedIn: 'root' })
export class ProductService {
  getProducts(): Observable<Array<Product>> {
    return of([
      { id: '1', name: 'iPhone 16 Pro', price: 1599, quantity: 1 },
      { id: '2', name: 'iPhone 16 Pro Max', price: 1899, quantity: 1 },
    ])
  }
}