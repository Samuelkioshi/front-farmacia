import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  produtos = [
    { ID_PROD: 1, NOME_PROD: 'Produto 1', FABRICANTE: 'Fabricante A', SECAO: 'Medicamentos', VALOR: 10.00 },
    { ID_PROD: 2, NOME_PROD: 'Produto 2', FABRICANTE: 'Fabricante B', SECAO: 'Beleza', VALOR: 20.00 },
  ];

  showProductDescription(productId: number) {
    console.log(`Redirecionando para o produto ${productId}`);
  }
}