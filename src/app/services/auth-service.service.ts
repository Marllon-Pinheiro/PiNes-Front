import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { iUser } from '../users';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private apiServerUrl = environment.apiBaseUrl;

  public username: string = "";
  public password: string = "";

  constructor(
    private httpClient: HttpClient
  ) { }

  login(username: string, password: string) {
    return this.httpClient.get(`${this.apiServerUrl}/login` ,
    { headers: {authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res) => {
      this.username = username;
      this.password = password;
    }));
  }

  createBasicAuthToken(username: string, password: string) {
    return 'Basic' + window.btoa(username + ":" + password);
  }
}