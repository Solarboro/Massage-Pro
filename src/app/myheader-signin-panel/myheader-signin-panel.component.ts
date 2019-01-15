import { Component, OnInit } from '@angular/core';
import { MasgUserService } from '../Service/masg-user.service';

@Component({
  selector: 'app-myheader-signin-panel',
  templateUrl: './myheader-signin-panel.component.html',
  styleUrls: ['./myheader-signin-panel.component.css']
})
export class MyheaderSigninPanelComponent implements OnInit {

  constructor(
    private masgUserService: MasgUserService
  ) {
   }

  ngOnInit() {

    //
    if ( this.masgUserService.getStatus() ) {
      $('.ui.form.masgSignin')
      .form(
        'set values',
        {
          username: this.masgUserService.getMasgUser().username,
          rememberme: this.masgUserService.getRememberFlag()
        }
      );
    }

    //
    $('.ui.form.masgSignin')
    .form(
      {
        on: 'blur',
        fields: {
          username: 'empty',
          password: 'empty'
        },
        onSuccess: (event, fields) => {
          //
          this.masgUserService.login(
            fields['username'],
            fields['password'],
            fields['rememberme'] === 'on' ? true : false
          );

          //
          $('.ui.form.masgSignin')
          .form('set value', 'password', '');

          //
          return false;
        }
      }
    );
  }

}
