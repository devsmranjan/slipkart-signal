import { Injectable, inject, signal } from "@angular/core";
import { EMPTY, Subject, catchError, debounceTime, switchMap, tap } from "rxjs";
import { toSignal } from '@angular/core/rxjs-interop'

import { TLoadingState } from "./models/loading-state.model";
import { ProductService } from "./product.service";


@Injectable()
export class ProductStore {
    #productService = inject(ProductService)

    #loadingState = signal<TLoadingState>('idle') // WritableSignal
    #error = signal<string | null>(null)

    loadingState = this.#loadingState.asReadonly() // Signal
    error = this.#error.asReadonly()

    #reload$ = new Subject<void>()

    setLoadingState(state: TLoadingState) {
        this.#loadingState.set(state)
    }

    setError(error: string | null) {
        this.#error.set(error)
    }

    products = toSignal(
        this.#reload$.pipe(
            tap(() => {
                this.setLoadingState('pending')
                this.setError(null)
            }),
            debounceTime(300),
            switchMap(() => this.#productService.getProducts().pipe(
                tap({
                    next: () => {
                        this.setLoadingState('success')
                    },
                    error: (err) => {
                        this.setLoadingState('error')
                        this.setError(err.message)
                    }
                })
            )),
            catchError(() => {
                return EMPTY
            })
        ),
        {
            initialValue: null
        }
    )

    loadProducts() {
        this.#reload$.next()
    }
}