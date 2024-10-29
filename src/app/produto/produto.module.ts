import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoComponent } from './produto.component';
import { ProdutoService } from './produto.service';

@NgModule({
  declarations: [ProdutoComponent],
  imports: [CommonModule],
  providers: [ProdutoService],
  exports: [ProdutoComponent]
})
export class ProdutoModule { }