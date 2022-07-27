import { Component, OnInit } from '@angular/core';
import { iProduto, produtos } from '../produtos';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: iProduto[] | undefined;

  constructor(
    private produtosService: ProdutosService
  ) { }

  ngOnInit(): void {
    this.produtos = this.produtosService.getAll();
  }

}
