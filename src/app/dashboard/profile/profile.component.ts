import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [FormsModule, CommonModule ,ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: ['John Doe'],
      profession: ['Software Engineer'],
      city: ['New York'],
      bio: ['Passionate about building scalable web applications.'],
      education: this.fb.array([this.fb.control('B.Tech in Computer Science')]),
      experience: this.fb.array([
        this.fb.control('5 years in Full-Stack Development'),
      ]),
      skills: this.fb.array([
        this.fb.control('Angular'),
        this.fb.control('Node.js'),
      ]),
    });
  }

  get education() {
    return this.profileForm.get('education') as FormArray;
  }

  get experience() {
    return this.profileForm.get('experience') as FormArray;
  }

  get skills() {
    return this.profileForm.get('skills') as FormArray;
  }

  addEducation() {
    this.education.push(this.fb.control(''));
  }

  removeEducation(index: number) {
    this.education.removeAt(index);
  }

  addExperience() {
    this.experience.push(this.fb.control(''));
  }

  removeExperience(index: number) {
    this.experience.removeAt(index);
  }

  addSkill() {
    this.skills.push(this.fb.control(''));
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  saveProfile() {
    console.log('Profile Data:', this.profileForm.value);
  }
}
