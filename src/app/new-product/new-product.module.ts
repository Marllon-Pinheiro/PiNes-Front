import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewProductRoutingModule } from './new-product-routing.module';
import { NewProductComponent } from './new-product.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';
import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG  } from 'ng2-currency-mask';

export const customCurrencyMaskConfig: CurrencyMaskConfig = {
  align: 'left',
  allowNegative: true,
  decimal: ',',
  precision: 2,
  prefix: '',
  suffix: '',
  thousands: '.'
};

@NgModule({
  declarations: [
    NewProductComponent
  ],
  imports: [
    CommonModule,
    NewProductRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    CurrencyMaskModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR'},
    { provide: CURRENCY_MASK_CONFIG, useValue: customCurrencyMaskConfig }
 ],
})
export class NewProductModule { }
