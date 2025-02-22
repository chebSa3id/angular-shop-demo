import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionCompleteComponent } from './transaction-complete.component';

describe('TransactionCompleteComponent', () => {
  let component: TransactionCompleteComponent;
  let fixture: ComponentFixture<TransactionCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionCompleteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
