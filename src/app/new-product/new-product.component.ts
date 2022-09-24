import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { iProduto } from '../produtos';
import { ProdutosService } from '../produtos.service';
import { NotificationService } from '../services/notification.service';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  apiServerUrl = environment.apiBaseUrl;

produto: iProduto | undefined;

  constructor(
    private produtosService: ProdutosService,
    private router: Router,
    private notification: NotificationService
  ) { }

  ngOnInit(): void {
  }

  public addProduct(addForm: NgForm): void {
    this.produtosService.addProducts(addForm.value).subscribe(
      (response : iProduto) => {
        console.log(response);
        this.notification.notificate("Product added successfully");
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    addForm.reset();
  }
}
