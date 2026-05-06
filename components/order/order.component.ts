import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule,
    ReactiveFormsModule,],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly apiService = inject(ApiService);

  form!: FormGroup;
  showPopup = false;

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
    })
  }

  onSubmit() {
    this.apiService.addOrder(this.form.value).subscribe(() => {
      this.showPopup = true;
      this.form.reset();

      setTimeout(() => {
        this.showPopup = false;
      }, 2000);
    }
    );
  }

  preventDot(event: KeyboardEvent) {
    if (event.key === '.' || event.key === 'Period') {
      event.preventDefault();
    }
  }
}
