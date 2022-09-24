import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    NgxMaskModule.forRoot(),
    FormsModule
  ]
})
export class RegisterModule { }
