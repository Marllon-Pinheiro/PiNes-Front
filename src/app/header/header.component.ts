import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginComponent } from '../login/login.component';
import { iProduto } from '../produtos';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  apiServerUrl = environment.apiBaseUrl;
  name = "";
  hasToken: String = "";
  username: String = "";

  public produtos: iProduto[] | undefined;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const Token = localStorage.getItem('access_token');
     if(Token){
       this.hasToken = "HasToken";
      }
    const usernameStorage = localStorage.getItem('username');
    if(usernameStorage){
    this.username = usernameStorage;
    }
  }

  logout() {
  localStorage.clear();
  this.router.navigate(['produtos']);
  location.reload();
  }

  search(){
  if(this.name) {
    this.router.navigate(["produtos"], {queryParams: { name: this.name }});
    this.name = "";
    return;
  }
  this.router.navigate(['produtos']);
  }
 

}
