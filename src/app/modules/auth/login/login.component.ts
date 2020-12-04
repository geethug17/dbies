import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonConfig } from 'src/app/core/models/button';
import { InputConfig } from 'src/app/core/models/input';
import { AuthService } from 'src/app/core/service/auth.service';
import { InputFieldComponent } from 'src/app/shared/input-field/input-field.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitConfig: ButtonConfig;
  usernameConfig: InputConfig;
  passwordConfig: InputConfig;

  @ViewChild('usernameComponent', { static: false }) usernameComponent: InputFieldComponent | undefined;
  @ViewChild('passwordComponent', { static: false }) passwordComponent: InputFieldComponent | undefined;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.setFieldConfigurations();
  }

  ngOnInit() {
  }

  setFieldConfigurations() {
    this.usernameConfig = {
      type: 'text',
      class: 'username w-100',
      placeholder: 'Username',
      maxlength: 'null'
    };

    this.passwordConfig = {
      type: 'password',
      class: 'password w-100',
      placeholder: 'Password',
      maxlength: 'null'
    };

    this.submitConfig = {
      type: 'submit',
      class: 'submit-btn w-100',
      text: 'Submit'
    };
  }

  submitInfo() {
    const params = {
      user_name: this.usernameComponent.inputData,
      password: this.passwordComponent.inputData,
    }
    const userData = this.authService.login(params);
    if(userData.is_success){
      this.router.navigate(['home']);
    } else {
      alert(userData.message);
    }
  }

}
