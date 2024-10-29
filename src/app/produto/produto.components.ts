import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto',
  standalone: true,
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {
  produtoId: number;
  produto: any; // Você pode definir uma interface para o produto

  constructor(private route: ActivatedRoute) {
    this.produtoId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadProductDetails();
  }

  loadProductDetails() {
    // Aqui você deve buscar os detalhes do produto usando o produtoId
    // Exemplo de produto. Você deve substituir pela chamada real ao seu serviço.
    this.produto = {
      ID_PROD: this.produtoId,
      NOME_PROD: 'Produto ' + this.produtoId,
      FABRICANTE: 'Fabricante A',
      SECAO: 'Medicamentos',
      VALOR: 10.00
    };
  }

  goBack() {
    // Lógica para voltar à página anterior
    window.history.back();
  }
}