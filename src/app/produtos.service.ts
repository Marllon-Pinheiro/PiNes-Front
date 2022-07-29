import { Injectable } from '@angular/core';
import { iProduto } from './produtos';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(
    private httpClient: HttpClient,
  ) { }

  
  
}
