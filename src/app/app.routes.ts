import { Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { TransactionsComponent } from './pages/transactions/transactions.component'

export const routes: Routes = [
    {
        path: '', component: HomeComponent,
    },
    {
        path: 'transactions', component: TransactionsComponent,
    }
]
