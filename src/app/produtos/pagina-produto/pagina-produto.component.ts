import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iProduto } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pagina-produto',
  templateUrl: './pagina-produto.component.html',
  styleUrls: ['./pagina-produto.component.css']
})
export class PaginaProdutoComponent implements OnInit {
  apiServerUrl = environment.apiBaseUrl;

  produto: iProduto | undefined;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    
    this.getOne().subscribe(
      (response: iProduto) => {
        this.produto = response;
      },
    );
  }

  getOne() {
    const paramsMap = this.route.snapshot.paramMap;
    const id = paramsMap.get("id");
    return this.httpClient.get<iProduto>(`${this.apiServerUrl}/products/${id}`);
  }

  
  

}
