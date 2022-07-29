import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { PaginaProdutoComponent } from './pagina-produto/pagina-produto.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ProdutosComponent,
    PaginaProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    HttpClientModule
  ]
})
export class ProdutosModule { }
