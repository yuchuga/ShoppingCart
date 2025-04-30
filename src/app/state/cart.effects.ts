import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { catchError, map, mergeMap } from 'rxjs/operators'
import { ProductService } from '../product.service'
import { CartActions, CartApiActions } from './cart.action'

@Injectable()
export class CartEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.loadProducts),
      mergeMap(() =>
        this.productService.getProducts().pipe(
          map(products => CartApiActions.loadProductsSuccess({ products })),
          catchError(error => of(CartApiActions.loadProductsFailure({ error })))
        )
      )
    )
  )

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}