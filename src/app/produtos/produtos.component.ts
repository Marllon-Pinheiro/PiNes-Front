import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { find } from 'rxjs';
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
  mensagemError: string = "";

  public products: iProduto[] | undefined;

  constructor(
    private produtosService: ProdutosService,
    private httpClient: HttpClient,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const name = params.get("name")?.toLowerCase();
      if(name) {
        this.mensagemError = "";
        this.httpClient.get<iProduto[]>(`${this.apiServerUrl}/products?name=${name}`).subscribe(
          (response: iProduto[]) => {
            this.products = response;
            if(this.products.length==0){
              this.mensagemError = "Nenhum produto encontrado.";
            }
          }, 
        );
      }  else {
        this.mensagemError = "";
        this.getProdutos().subscribe(
          (response: iProduto[]) => {
            this.products = response;
          },
        );
      } 
    });
  }
  
  getProdutos(){
    return this.httpClient.get<iProduto[]>(`${this.apiServerUrl}/products`);
  }

  

}
