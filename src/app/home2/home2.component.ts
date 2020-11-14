import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthResult, NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoginService } from '../home/login.service';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnDestroy {

  private destroy$ = new Subject<void>();
  constructor(private authService: NbAuthService, private router: Router,
    private loginService: LoginService) {
    this.authService.authenticate('google')
      .pipe(takeUntil(this.destroy$))
      .subscribe((authResult: NbAuthResult) => {
        if (authResult.isSuccess()) {
          this.router.navigateByUrl(authResult.getRedirect());
        }
      });

  }

  // this.loginService.userDetails(access_token.access_token)





  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
