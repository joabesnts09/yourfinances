import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTransactionFormComponent } from './register-transaction-form.component';

describe('RegisterTransactionFormComponent', () => {
  let component: RegisterTransactionFormComponent;
  let fixture: ComponentFixture<RegisterTransactionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterTransactionFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterTransactionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
