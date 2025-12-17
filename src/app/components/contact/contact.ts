import { Component, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { RevealOnScroll } from '../../shared/reveal-on-scroll';
import { FirebaseService } from '../../../services/firebase-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, RevealOnScroll, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  form!: FormGroup;
  submitting = signal(false);
  submitted = signal(false);


  toastVisible = signal(false);
  toastMessage = signal('');
  toastType = signal<'success' | 'error'>('success');

  constructor(
    private fb: FormBuilder,
    private firebaseService: FirebaseService
  ) {
    this.form = this.fb.nonNullable.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  async onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting.set(true);

    try {
      await this.firebaseService.saveContactMessage(this.form.value);

      this.showToast('Message sent successfully', 'success');

      this.submitted.set(true);
      this.form.reset();

    } catch (err) {
      console.error('Firebase error:', err);
      this.showToast('Something went wrong ❌', 'error');
    }

    this.submitting.set(false);
  }




  showToast(message: string, type: 'success' | 'error' = 'success') {
    this.toastMessage.set(message);
    this.toastType.set(type);
    this.toastVisible.set(true);

    setTimeout(() => {
      this.toastVisible.set(false);
    }, 3000); // 3 sec
  }

}
