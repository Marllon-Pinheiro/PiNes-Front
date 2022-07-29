import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { iProduto } from '../produtos';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit { 
  apiServerUrl = environment.apiBaseUrl;

  public produtos: iProduto[] | undefined;

  constructor(
    private produtosService: ProdutosService,
    private httpClient: HttpClient
    ) { }

  ngOnInit(): void {
    this.getProdutos().subscribe(
      (response: iProduto[]) => {
        this.produtos = response;
      },
    );
  }

  getProdutos(){
    return this.httpClient.get<iProduto[]>(`${this.apiServerUrl}/products`);
  }

}
