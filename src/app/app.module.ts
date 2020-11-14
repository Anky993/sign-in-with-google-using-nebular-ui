import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbCardModule, NbThemeModule, NbUserModule } from '@nebular/theme';
import { RouterModule, Routes } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbSidebarModule, NbLayoutModule, NbButtonModule, NbSidebarService, NbMenuService } from '@nebular/theme';
import { HomeComponent } from './home/home.component';
import { NbAuthJWTToken, NbAuthModule, NbOAuth2AuthStrategy, NbOAuth2ResponseType, NbPasswordAuthStrategy, NbUser } from '@nebular/auth';
import { HttpClientModule } from '@angular/common/http';
import { Home2Component } from './home2/home2.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Home2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // RouterModule.forRoot([{ path: '', component: HomeComponent }, { path: 'callback', component: Home2Component }], { useHash: true }), // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'callback',
        component: Home2Component,
      },
    ]),
    NbUserModule,
    NbLayoutModule,
    NbCardModule,
    NbSidebarModule.forRoot(), // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    NbThemeModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbOAuth2AuthStrategy.setup({
          name: 'google',
          clientId: '1004910310766-mje7nln8unlolbnm82o8iooo94l7fjr1.apps.googleusercontent.com',
          clientSecret: '',
          authorize: {
            endpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
            responseType: NbOAuth2ResponseType.TOKEN,
            scope: 'https://www.googleapis.com/auth/userinfo.profile',
            redirectUri: 'http://localhost:4200/callback',

          },
        }),
      ],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
