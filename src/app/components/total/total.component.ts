import { Component } from '@angular/core'
import { TransactionService } from '../../services/transaction.service'

@Component({
  selector: 'app-total',
  standalone: true,
  imports: [],
  templateUrl: './total.component.html',
  styleUrl: './total.component.scss'
})
export class TotalComponent {
  constructor(private transactionService: TransactionService){}

  get total() {
    return this.transactionService.getTotal()
  }
}
