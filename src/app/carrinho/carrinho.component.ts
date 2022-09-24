import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { iCarrinho } from '../carrinho';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  
  apiServerUrl = environment.apiBaseUrl;
  username = localStorage.getItem('username');
  cartEmpty: string = "";
  cartId: number = 0;

  public carts: iCarrinho[] | undefined;

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getProdutos().subscribe(
      (response: iCarrinho[]) => {
        const cartId = JSON.stringify(response);
        localStorage.setItem('cartId',cartId);
        this.carts = response;
        if(this.carts.length==0){
          this.cartEmpty = "The cart is empty."
        }
      },
    );
  }

  getProdutos(){
    return this.httpClient.get<iCarrinho[]>(`${this.apiServerUrl}/cart?username=${this.username}`);
  }

  deleteProduct() {
    this.delete().subscribe(
      (response: iCarrinho[]) => {
        this.carts = response;
      },
    );
  }

  delete(){
    
    return this.httpClient.delete<iCarrinho[]>(`${this.apiServerUrl}/cart/delete/${this.cartId}`);
    
  }

}
