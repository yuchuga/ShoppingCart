import { ApplicationConfig } from '@angular/core'
import { provideStore } from '@ngrx/store'
import { provideHttpClient } from '@angular/common/http'
import { provideEffects } from '@ngrx/effects'
import { cartReducer, productsReducer } from './state/cart.reducer'
import { CartEffects } from './state/cart.effects'
// import { provideRouter } from '@angular/router'
// import { routes } from './app.routes'

export const appConfig: ApplicationConfig = {
  // providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
  providers: [
    provideStore({
      products: productsReducer, 
      cart: cartReducer 
    }),
    provideHttpClient(),
    provideEffects([CartEffects])
  ]
};
