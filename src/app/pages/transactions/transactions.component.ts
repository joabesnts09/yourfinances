import { Component } from '@angular/core';
import { RegisterTransactionFormComponent } from '../../components/forms/register-transaction-form/register-transaction-form.component';
import { TotalComponent } from '../../components/total/total.component';
import { TransactionCardComponent } from '../../components/transaction-card/transaction-card.component';
import { CommonModule } from '@angular/common';
import { TransactionService } from '../../services/transaction.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-transactions',
    standalone: true,
    imports: [
        CommonModule,
        RegisterTransactionFormComponent,
        TotalComponent,
        TransactionCardComponent,
        RouterLink
    ],
    providers: [TransactionService],
    templateUrl: './transactions.component.html',
    styleUrl: './transactions.component.scss',
})
export class TransactionsComponent {
    constructor(private transactionService: TransactionService) {}

    get transactionList() {
        return this.transactionService.getTransactionList();
    }
}
