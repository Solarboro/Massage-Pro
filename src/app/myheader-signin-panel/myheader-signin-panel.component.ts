import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Service/login-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-myheader-signin-panel',
  templateUrl: './myheader-signin-panel.component.html',
  styleUrls: ['./myheader-signin-panel.component.css']
})
export class MyheaderSigninPanelComponent implements OnInit {

  private username: string;
  private password: string;

  private loginForm: FormGroup;

  constructor(private loginService: LoginService,
              private fb: FormBuilder) {
        this.loginForm = fb.group({
            username : ['', Validators.compose([Validators.required]) ],
            password : ['', Validators.compose([Validators.required]) ]
          });
   }

  ngOnInit() {

  }

  mylogin(username: string, password: string): void {
    if ( password === 'abcd1234') {
      this.loginService.login(username, password);
      $('.ui.sidebar').sidebar('toggle');
    } else {
      console.log('Password Error');
    }
  }

  loginSubmit(value: any): void {
    if ( this.loginForm.valid ) {
      this.mylogin(value['username'], value['password']);
    }
  }
}
