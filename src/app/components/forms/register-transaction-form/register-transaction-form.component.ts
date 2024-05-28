import { Component } from '@angular/core'
import { FormControl, ReactiveFormsModule } from '@angular/forms'
import { TransactionService } from './../../../services/transaction.service'

@Component({
  selector: 'app-register-transaction-form',
  standalone: true,
  imports: [ReactiveFormsModule],
templateUrl: './register-transaction-form.component.html',
  styleUrl: './register-transaction-form.component.scss'
})
export class RegisterTransactionFormComponent {

  constructor(private transactionService: TransactionService){}

  value = new FormControl<string>('')
  type = new FormControl<'entrada' | 'saida'>('entrada')
  description = new FormControl<string>('')


  onSubmit(evt: Event) {
    evt.preventDefault()

    if(this.value.value !== '' && this.description.value !== '') {
      const data = {
        value: this.value.value as string,
        type: this.type.value as 'entrada' | 'saida',
        description: this.description.value as string
      }
  
      this.transactionService.addTransaction(data)
      this.value.setValue('')
      this.type.setValue('entrada')
      this.description.setValue('')
    } else {
      alert('Preencha todos os campos')
    }
    
  }
}
