import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { PaginaProdutoComponent } from './pagina-produto/pagina-produto.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { TokenInterceptor } from '../token.interceptor';


@NgModule({
  declarations: [
    ProdutosComponent,
    PaginaProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    } 
  ],
})
export class ProdutosModule { }
