import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userData = new Subject<number>();
  constructor() { }

  login(params) {
    let responseData;
    if (params.user_name === 'johndoe@gmail.com' && params.password === 'johnDoe@123') {
      responseData = {
        is_success: true,
        data: {
          user_name: 'johndoe@gmail.com',
          full_name: 'John Doe'
        },
        message: "Logged in successfully"
      };
    } else {
      responseData = {
        is_success: false,
        data: {},
        message: "Authentication failed"
      };
    }
    return responseData;
  }
}
