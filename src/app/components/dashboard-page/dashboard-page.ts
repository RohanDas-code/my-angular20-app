import { Component, OnInit } from '@angular/core';
import { ApiService, User } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  imports: [CommonModule, ReactiveFormsModule, ButtonModule],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
})
export class DashboardPage implements OnInit {

  users: User[] = [];
  form: FormGroup;
  loading = false;
  error = '';

  constructor(
    private userService: ApiService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(
      data => this.users = data,
      err => this.error = 'Failed to load users'
    );
  }

  navigateToCreateNewDesign() {
    this.router.navigate(['/create-new-design']);
  }

  navigateToCreateSecondDesign() {
    this.router.navigate(['/create-second-design']);
  }

  navigateToCreateThirdDesign() {
    this.router.navigate(['/create-third-design']);
  }

  submit() {
    if (this.form.invalid) return;
    this.loading = true;
    this.error = '';
    const val = this.form.value;
    this.userService.createUser(val).subscribe({
      next: (u) => {
        this.users.unshift(u);
        this.form.reset();
        this.loading = false;
      },
      error: (e) => {
        this.loading = false;
        this.error = e?.error?.error || 'Failed to create user';
      }
    });
  }

}
