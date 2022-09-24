import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { iCarrinho } from 'src/app/carrinho';
import { iProduto } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';
import { NotificationService } from 'src/app/services/notification.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pagina-produto',
  templateUrl: './pagina-produto.component.html',
  styleUrls: ['./pagina-produto.component.css']
})
export class PaginaProdutoComponent implements OnInit {
  apiServerUrl = environment.apiBaseUrl;
  quantidade: number = 1;

  produto: iProduto | undefined;
  carrinho: iCarrinho | undefined

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private router: Router,
    private notification: NotificationService
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

  public addCart():void {
    this.adicionarCarrinho().subscribe(
      (response : iCarrinho) => {
        this.notification.notificate("Product added to cart");
        this.router.navigate(['carrinho']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  adicionarCarrinho(): Observable<iCarrinho> {
    const paramsMap = this.route.snapshot.paramMap;
    const id = paramsMap.get("id");
    const username = localStorage.getItem('username');
    return this.httpClient.get<iCarrinho>(`${this.apiServerUrl}/cart/${id}?username=${username}&amount=${this.quantidade}`);
  }

}
