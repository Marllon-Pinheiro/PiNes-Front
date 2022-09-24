import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthServiceService } from '../services/auth-service.service';
import { iUser } from '../users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";

  user: iUser | undefined;

  apiServerUrl = environment.apiBaseUrl;
  tokenUrl = environment.obterTokenUrl;
  clientId = environment.clientId;
  clientSecret = environment.clientSecret;
  errorMessage: string = "";

  constructor(
    private authService: AuthServiceService,
    private httpClient: HttpClient,
    private router: Router
    ) { }

  ngOnInit(): void {
    
  }

  login(){
    this.tryLogin(this.username, this.password).subscribe(response => {
      const access_token = JSON.stringify(response);
      localStorage.setItem('username',this.username.toUpperCase())
      localStorage.setItem('access_token', access_token);
      this.router.navigate(['/produtos']);
    }, (error: HttpErrorResponse ) => {
      this.password = "";
      this.username = "";
      this.errorMessage = "User or password is wrong."
    }
    );
  }

  tryLogin( username: string, password: string) : Observable<iUser> {
    const params = new HttpParams()
                    .set('username', username)
                    .set('password', password)
                    .set('grant_type', 'password')
    const headers = {
      'Authorization': 'Basic bXktYW5ndWxhci1hcHA6MTIz',
      'Content-Type': 'application/x-www-form-urlencoded',
    }
    return this.httpClient.post<iUser>(`${this.apiServerUrl}/oauth/token`, params.toString(), {headers});
  }
  

}
