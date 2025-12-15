import { Component, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { RevealOnScroll } from '../../shared/reveal-on-scroll';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, RevealOnScroll],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  constructor(private fb: FormBuilder) {
    this.form = this.fb.nonNullable.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  form!: FormGroup;

  submitting = signal(false);
  submitted = signal(false);

  async onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitting.set(true);
    await new Promise((r) => setTimeout(r, 1000));
    this.submitting.set(false);
    this.submitted.set(true);
    this.form.reset();
  }
}
