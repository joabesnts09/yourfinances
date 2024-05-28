import { Component, Input } from '@angular/core';
import { ITransaction } from '../../interfaces/transaction.interface';
import { TransactionService } from '../../services/transaction.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-card.component.html',
  styleUrl: './transaction-card.component.scss'
})
export class TransactionCardComponent {
  constructor(private transactionService: TransactionService){}
  @Input() transaction!: ITransaction

  valueToMoney() {
    return Number(this.transaction.value).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  handleClick() {
    this.transactionService.RemoveTransaction(this.transaction.id)
  }

} 
