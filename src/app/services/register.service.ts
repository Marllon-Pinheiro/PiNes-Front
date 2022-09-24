import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { iUser } from '../users';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  apiServerUrl: string = environment.apiBaseUrl;

  constructor(
   private httpClient: HttpClient,
  ) { }

  salvar(user:iUser): Observable<iUser> {
    return this.httpClient.post<iUser>(`${this.apiServerUrl}/users`, user);
  }
}
