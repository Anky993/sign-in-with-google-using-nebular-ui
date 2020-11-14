import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbAuthOAuth2Token, NbAuthResult, NbAuthService } from '@nebular/auth';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoginService } from './login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {

  token: NbAuthOAuth2Token;
  user;

  profile = false;

  constructor(private authService: NbAuthService, private loginService: LoginService) {
    this.authService.onTokenChange()
      .pipe(takeUntil(this.destroy$))
      .subscribe((token: NbAuthOAuth2Token) => {
        this.token = null;
        if (token && token.isValid()) {
          this.token = token;
          this.userDetails(this.token['token'].access_token);
        }
      });
  }

  userDetails(data) {
    this.loginService.userDetails(data).subscribe(
      data => {
        // console.log(".........",data)
        this.profile = true
        this.user = data
      },
      err => {
        console.log("dddddddddddddddd", err)
      }
    )
  }

  private destroy$ = new Subject<void>();

  login() {
    this.authService.authenticate('google')
      .pipe(takeUntil(this.destroy$))
      .subscribe((authResult: NbAuthResult) => {
        console.log(".dd...", authResult)
      });
  }

  logout() {
    this.authService.logout('google')
      .pipe(takeUntil(this.destroy$))
      .subscribe((authResult: NbAuthResult) => {
        this.profile = false
      });
  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
