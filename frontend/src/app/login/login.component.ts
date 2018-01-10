import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../core/auth/auth.service';
import { StateStorageService } from '../core/auth/state-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  formSubmitAttempt: boolean;
  authenticationError: boolean;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private stateStorageService: StateStorageService) {

    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [true]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  get username() { return this.form.get('username'); }

  get password() { return this.form.get('password'); }

  onSubmit() {
    if (this.form.valid) {
      this.authService.login(this.form.value).subscribe(
        (data) => {
          const redirect = this.stateStorageService.getUrl();
          if (redirect) {
              this.stateStorageService.storeUrl(null);
              this.router.navigate([redirect]);
          } else {
            this.router.navigate(['']);
          }
        },
        (error) => {
          this.authenticationError = true;

        }

      )
    }
    this.formSubmitAttempt = true;
  }
}
