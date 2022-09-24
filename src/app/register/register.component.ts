import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NotificationService } from '../services/notification.service';
import { iUser } from '../users';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  apiServerUrl = environment.apiBaseUrl;
  errorMessage: string = "";

  user: iUser | undefined;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private notification: NotificationService
  ) { }

  ngOnInit(): void {
  }

  public addUser(addForm: NgForm): void {
    this.sendUser(addForm.value).subscribe(
      (response : iUser) => {
        this.notification.notificate("Account created successfully");
        this.router.navigate(['login']);
      },
      (error: HttpErrorResponse) => {
        this.errorMessage = "The user is already in use.";
      }
    );
    
  }

  sendUser(user: iUser): Observable<iUser>{
    return this.httpClient.post<iUser>(`${this.apiServerUrl}/users`, user)
  }

}
