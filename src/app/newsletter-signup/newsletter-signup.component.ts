// newsletter-signup.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter-signup',
  templateUrl: './newsletter-signup.component.html',
  styleUrls: ['./newsletter-signup.component.css'],
  imports: [MatFormField, MatLabel, MatError,ReactiveFormsModule],
})
export class NewsletterSignupComponent {
  newsletterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.newsletterForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.newsletterForm.valid) {
      const email = this.newsletterForm.value.email;
      console.log('Subscribed email:', email);
      alert("🎉 You're subscribed! Look out for updates in your inbox.");
      this.newsletterForm.reset();
    }
  }
}
