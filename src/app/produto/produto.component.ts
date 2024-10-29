import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
goBack() {
throw new Error('Method not implemented.');
}
  produtos: any[] = [];
produto: any;

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.produtos = this.produtoService.getProdutos();
  }

  showProductDescription(produtoId: number) {
    // Lógica para mostrar a descrição do produto
  }
}