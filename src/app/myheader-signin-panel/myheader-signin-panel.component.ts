import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Service/login-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MasgUser } from '../model/masg-user';
import { ApiAgentService } from '../Service/api-agent.service';
import { RepositoryService } from '../Service/Repository/repository.service';

@Component({
  selector: 'app-myheader-signin-panel',
  templateUrl: './myheader-signin-panel.component.html',
  styleUrls: ['./myheader-signin-panel.component.css']
})
export class MyheaderSigninPanelComponent implements OnInit {

  //
  private username; string;
  private remember: boolean;
  private remember_tmp: boolean;

  //
  private loginStatus: boolean;

  private loginForm: FormGroup;

  constructor(private loginService: LoginService,
              private fb: FormBuilder,
              private apiAgentService: ApiAgentService,
              private repositoryService: RepositoryService
  ) {

        this.username = null;
        this.remember = false;
   }

  ngOnInit() {

    this.isRememberMeOn();

    this.loginForm = this.fb.group({
      username : [localStorage.getItem('username'), Validators.compose([Validators.required]) ],
      password : ['', Validators.compose([Validators.required]) ],
      remember : [this.remember]
    });

  }

  loginSubmit(value: any): void {
    if ( this.loginForm.valid ) {

      // 
      this.loginStatus = false;
      this.remember_tmp = value['remember'];

      // 
      const masgUser: MasgUser = new MasgUser();
      masgUser.username = value['username'];
      masgUser.password = value['password'];

      // 
      this.apiAgentService.aPost<MasgUser>('login', masgUser)
        .subscribe(
          data => {
            // 
            this.repositoryService.syncUpUserData();
            
            // 
            this.loginStatus = true;
            this.loginService.setLoginStatus(this.loginStatus);
            this.loginService.setMasgUser(data);
            $('.ui.sidebar').sidebar('toggle');
          },
          (error: Response) => {
            this.loginStatus = false;
            this.loginService.setLoginStatus(this.loginStatus);
            console.log(error);
          },
          () => {
            //
            this.loginForm.controls['password'].setValue('');

            //
            if ( this.loginStatus && this.remember_tmp  ) {
              this.turnOnRememberMe(value['username']);
            } else {
              this.turnOffRememberMe();
            }
          }
        );

      }
    }



  turnOnRememberMe( username: string ): void {
    localStorage.setItem('rememberMe', 'true');
    localStorage.setItem('username', username);
  }

  turnOffRememberMe(): void {
    localStorage.removeItem('rememberMe');
    localStorage.removeItem('username');

  }

  isRememberMeOn(): boolean {
    //
    this.remember = false;

    if ( localStorage.getItem('rememberMe') === 'true' ) {
      this.remember = true;
    }

    return this.remember;
  }
}
